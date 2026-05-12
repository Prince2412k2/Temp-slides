export default function Slide07() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "28vw", height: "28vw" }}>
        <div style={{ position: "absolute", top: "10vw", right: "10vw", width: "14vw", height: "14vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "5vw", right: "14vw", width: "11vw", height: "11vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "14vw", right: "5vw", width: "9vw", height: "9vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.4 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5vw" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#1E1E1E" }} />
          Google PM Certificate
        </div>
        <div style={{ fontSize: "1vw", color: "#666666" }}>2026</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", zIndex: 1, marginTop: "4vh", gap: "3vh" }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", fontWeight: 700, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.1, color: "#1E1E1E" }}>
          Organizational Structure and Company Culture
        </h1>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Types of Organizational Structures</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ borderLeft: "0.3vw solid #E8878C", paddingLeft: "1.5vw" }}>
                <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.3vh 0" }}>Classic / Functional</p>
                <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Team members report to functional managers, PM has less authority</p>
              </div>
              <div style={{ borderLeft: "0.3vw solid #7B9FCC", paddingLeft: "1.5vw" }}>
                <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.3vh 0" }}>Matrix</p>
                <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Team members report to both a functional manager and a project manager</p>
              </div>
              <div style={{ borderLeft: "0.3vw solid #7BC8A4", paddingLeft: "1.5vw" }}>
                <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.3vh 0" }}>Project-based</p>
                <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Team members are dedicated to projects, PM has more authority</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Why Culture Matters</p>
            <p style={{ fontSize: "1.4vw", color: "#555555", margin: "0 0 2vh 0", lineHeight: 1.6 }}>Organizational culture is based on shared workplace values. It shows up in how people communicate, make decisions, and work together.</p>
            <div style={{ backgroundColor: "#1E1E1E", borderRadius: "1vw", padding: "1.5vw 2vw" }}>
              <p style={{ fontSize: "1.3vw", color: "#F5F5F0", margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>A project that is out of sync with the company's culture is much harder to complete successfully.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>07</span>
          <span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} />
          <span>Foundations</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
