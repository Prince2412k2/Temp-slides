import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { createRequire } from "module";
const pptxgen = createRequire(import.meta.url)("pptxgenjs");

const WORKSPACE_ROOT = path.resolve(import.meta.dirname, "..", "..");
const SLIDES_DIR = path.join(WORKSPACE_ROOT, "artifacts/pm-cert/src/pages/slides");
const MANIFEST_PATH = path.join(WORKSPACE_ROOT, "artifacts/pm-cert/src/data/slides-manifest.json");

interface ManifestEntry {
  id: string;
  position: number;
  filepath: string;
  title: string;
  description: string;
  speakerNotes?: string;
}

// Section colors (matching the app design system)
const SECTION_COLORS: Record<string, string> = {
  "Foundations": "4472C4",
  "Initiation": "548235",
  "Planning": "BF8F00",
  "Execution": "C55A11",
  "Closing": "7030A0",
  "Section Intro": "1E1E1E",
  "Agile": "2E75B6",
  "Scrum": "D84315",
  "Career": "00695C",
  "Summary": "4A148C",
  "The End": "1E1E1E",
};

const BG_LIGHT = "F5F5F0";
const BG_DARK = "1E1E1E";
const ACCENT = "C04000";

function extractH1(content: string): string {
  const m = content.match(/<h1[^>]*>\s*\n?\s*([^<]+?)\s*\n?\s*<\/h1>/);
  return m ? m[1].trim().replace(/&amp;/g, "&") : "";
}

function extractParagraphs(content: string): string[] {
  const results: string[] = [];
  const pRe = /<p[^>]*>([\s\S]*?)<\/p>/g;
  let match: RegExpExecArray | null;
  while ((match = pRe.exec(content)) !== null) {
    const text = match[1]
      .replace(/\{.*?\}/g, "")
      .replace(/<[^>]+>/g, "")
      .replace(/&amp;/g, "&")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (text && text.length > 2) results.push(text);
  }
  return results;
}

function extractSection(content: string): string {
  const m = content.match(/span>\s*Section\s*Intro\s*</);
  if (m) return "Section Intro";
  const footerM = content.match(/span>(\w[\w\s&;]+)<\/span>\s*<\/div>\s*$/m);
  if (footerM) return footerM[1].trim();
  const altM = content.match(/\/><span>(\w[\w\s&;]+)<\/span>/);
  if (altM) {
    const s = altM[1].trim();
    if (!/^\d+$/.test(s)) return s;
  }
  return "";
}

function isDarkSlide(content: string): boolean {
  return content.includes('backgroundColor: "#1E1E1E"');
}

function isSectionDivider(content: string): boolean {
  return content.includes('Section Intro') || content.includes('Section 4');
}

function buildSlide(pres: pptxgen, entry: ManifestEntry, paragraphs: string[], section: string) {
  const slide = pres.addSlide();
  const isDark = isDarkSlide(readFileSync(path.join(SLIDES_DIR, path.basename(entry.filepath)), "utf-8"));
  const isDivider = isSectionDivider(readFileSync(path.join(SLIDES_DIR, path.basename(entry.filepath)), "utf-8"));

  const bgColor = isDark || isDivider ? BG_DARK : BG_LIGHT;
  const textColor = isDark || isDivider ? "F5F5F0" : "1E1E1E";
  const mutedColor = isDark || isDivider ? "888888" : "666666";
  const sectionColor = SECTION_COLORS[section] || ACCENT;

  slide.background = { color: bgColor };

  // Section color bar at top
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.15, fill: { color: sectionColor },
  });

  // Slide number + section in header
  slide.addText(`${entry.position}  ·  ${section || "Presentation"}`, {
    x: 0.6, y: 0.25, w: 9, h: 0.4,
    fontSize: 9, color: mutedColor, fontFace: "Inter",
  });

  if (isDivider) {
    slide.addText(entry.title, {
      x: 0.6, y: 2.5, w: 8.8, h: 1.2,
      fontSize: 36, bold: true, color: "F5F5F0", fontFace: "Inter",
      align: "left",
    });
    if (paragraphs.length > 0) {
      slide.addText(paragraphs[0], {
        x: 0.6, y: 3.8, w: 8.8, h: 0.6,
        fontSize: 16, color: "888888", fontFace: "Inter",
      });
    }
    return;
  }

  // Title
  slide.addText(entry.title, {
    x: 0.6, y: 0.8, w: 8.8, h: 0.8,
    fontSize: 28, bold: true, color: textColor, fontFace: "Inter",
    align: "left",
  });

  // Body content
  const bodyStartY = 1.8;
  const bodyText = paragraphs
    .filter(p => !p.includes("Google PM Certificate") && !p.includes("2026") && !p.includes("Study Guide"))
    .slice(0, 12);

  if (bodyText.length > 0) {
    const items = bodyText.map((t) => ({
      text: t,
      options: {
        fontSize: 13,
        color: textColor,
        fontFace: "Inter",
        bullet: { code: "2022" },
        lineSpacingMultiple: 1.4,
      },
    }));

    slide.addText(items, {
      x: 0.6, y: bodyStartY, w: 8.8, h: 4.5,
      valign: "top",
      lineSpacingMultiple: 1.3,
    });
  }

  // Footer
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 6.7, w: 1.5, h: 0.02, fill: { color: sectionColor },
  });
  slide.addText("Google Project Management Certificate", {
    x: 0.6, y: 6.85, w: 4, h: 0.3,
    fontSize: 8, color: mutedColor, fontFace: "Inter",
  });
}

async function main() {
  const manifestRaw = readFileSync(MANIFEST_PATH, "utf-8");
  const manifest: ManifestEntry[] = JSON.parse(manifestRaw);

  const pres = new pptxgen();
  pres.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
  pres.layout = "WIDE";

  for (const entry of manifest) {
    const filePath = path.join(SLIDES_DIR, path.basename(entry.filepath));
    const content = readFileSync(filePath, "utf-8");
    const paragraphs = extractParagraphs(content);
    const section = extractSection(content);
    buildSlide(pres, entry, paragraphs, section);
  }

  const outPath = path.join(WORKSPACE_ROOT, "Google-PM-Certificate-Study-Guide.pptx");
  await pres.writeFile({ fileName: outPath });
  console.log("Generated: " + outPath);
}

main().catch(console.error);
