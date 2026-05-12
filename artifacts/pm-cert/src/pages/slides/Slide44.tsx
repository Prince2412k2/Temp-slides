export default function Slide44() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-4vw", right: "-4vw", width: "26vw", height: "26vw" }}>
        <div style={{ position: "absolute", top: "9vw", right: "9vw", width: "13vw", height: "13vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "4vw", right: "13vw", width: "10vw", height: "10vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.4 }} />
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
          The Five Scrum Events
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Each Sprint contains five formal events:</p>
        <div style={{ display: "flex", gap: "1.5vw", flex: 1, alignItems: "stretch" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#E8878C" }} />
            <p style={{ fontSize: "1.4vw", fontWeight: 700, margin: 0 }}>Sprint</p>
            <p style={{ fontSize: "1.2vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>1–4 week fixed iteration where the team creates a product increment</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#7B9FCC" }} />
            <p style={{ fontSize: "1.4vw", fontWeight: 700, margin: 0 }}>Sprint Planning</p>
            <p style={{ fontSize: "1.2vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Team selects work from the backlog and defines the Sprint Goal</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#7BC8A4" }} />
            <p style={{ fontSize: "1.4vw", fontWeight: 700, margin: 0 }}>Daily Scrum</p>
            <p style={{ fontSize: "1.2vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Daily 15-minute standup: What did you do? What will you do? Any blockers?</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#1E1E1E" }} />
            <p style={{ fontSize: "1.4vw", fontWeight: 700, margin: 0 }}>Sprint Review</p>
            <p style={{ fontSize: "1.2vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Team demos completed work to stakeholders and gathers feedback</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#1E1E1E", borderRadius: "1.5vw", padding: "2vw", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#E8878C" }} />
            <p style={{ fontSize: "1.4vw", fontWeight: 700, margin: 0, color: "#F5F5F0" }}>Sprint Retrospective</p>
            <p style={{ fontSize: "1.2vw", color: "#aaaaaa", margin: 0, lineHeight: 1.5 }}>Team reflects on how to improve processes for the next Sprint</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>44</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Scrum</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
