export default function Slide52() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-8vw", left: "-4vw", width: "35vw", height: "35vw" }}>
        <div style={{ position: "absolute", bottom: "10vw", left: "10vw", width: "18vw", height: "18vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.25 }} />
        <div style={{ position: "absolute", bottom: "5vw", left: "15vw", width: "14vw", height: "14vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.25 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5vw" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#1E1E1E" }} />
          Google PM Certificate
        </div>
        <div style={{ fontSize: "1vw", color: "#666666" }}>2026</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", zIndex: 1, marginTop: "4vh", gap: "3vh" }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", fontWeight: 700, margin: 0, letterSpacing: "-0.04em", lineHeight: 1.1, color: "#1E1E1E" }}>
          Sprint Retrospective in Practice
        </h1>
        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", borderTop: "0.4vw solid #E8878C" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1vh 0" }}>What Went Well?</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Identify practices and behaviors to keep doing</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", borderTop: "0.4vw solid #7B9FCC" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1vh 0" }}>What Could Be Better?</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Identify problems or friction points to address</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", borderTop: "0.4vw solid #7BC8A4" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1vh 0" }}>What Will We Try Next Sprint?</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Commit to 1–3 concrete improvements with owners</p>
          </div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.7vw", fontWeight: 600, margin: "0 0 0.8vh 0" }}>Rules for a Good Retrospective</p>
          <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Create a safe space — no blame, focus on systems and processes · Keep it time-boxed (usually 60–90 minutes) · Follow through on action items from the previous retrospective</p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>52</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Google PM Certificate</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Agile &amp; Scrum</div>
      </div>
    </div>
  );
}
