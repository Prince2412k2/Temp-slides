export default function Slide40() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-4vw", right: "-4vw", width: "24vw", height: "24vw" }}>
        <div style={{ position: "absolute", top: "8vw", right: "8vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "3vw", right: "12vw", width: "9vw", height: "9vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.4 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5vw" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#1E1E1E" }} />
          Google PM Certificate
        </div>
        <div style={{ fontSize: "1vw", color: "#666666" }}>2026</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", zIndex: 1, marginTop: "4vh", gap: "2.5vh" }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", fontWeight: 700, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.1, color: "#1E1E1E" }}>
          Popular Agile Frameworks and Methodologies
        </h1>
        <div style={{ display: "flex", gap: "2vw", flex: 1, alignItems: "stretch" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", backgroundColor: "#E8878C" }} />
            <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, margin: 0 }}>Scrum</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Sprint-based framework with defined roles, events, and artifacts. Most popular Agile implementation.</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", backgroundColor: "#7B9FCC" }} />
            <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, margin: 0 }}>Kanban</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Visual workflow system that limits work in progress (WIP) and improves flow.</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", backgroundColor: "#7BC8A4" }} />
            <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, margin: 0 }}>XP (Extreme Programming)</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Software-focused Agile with practices like pair programming and test-driven development.</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#1E1E1E", borderRadius: "1.5vw", padding: "2.5vw", display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", backgroundColor: "#E8878C" }} />
            <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, margin: 0, color: "#F5F5F0" }}>Lean</p>
            <p style={{ fontSize: "1.3vw", color: "#aaaaaa", margin: 0, lineHeight: 1.5 }}>Focuses on eliminating waste and maximizing customer value delivery.</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>40</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Agile</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
