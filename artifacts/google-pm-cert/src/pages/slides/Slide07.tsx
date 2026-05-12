export default function Slide07() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "40vw", height: "40vw", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "10%", left: "10%", width: "25vw", height: "25vw", borderRadius: "50%", border: "0.2vw solid #E8878C", boxSizing: "border-box", opacity: 0.1 }} />
        <div style={{ position: "absolute", top: "20%", left: "20%", width: "18vw", height: "18vw", borderRadius: "50%", border: "0.2vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.1 }} />
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
          Organizational Structure and Company Culture
        </h1>
        <div style={{ display: "flex", gap: "4vw" }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#E8878C", marginBottom: "1.5vh" }} />
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1.2vh 0" }}>Organizational Structures</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.8vh 0", lineHeight: 1.5 }}><strong>Classic/Functional</strong> — PM has less authority; team reports to functional managers</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.8vh 0", lineHeight: 1.5 }}><strong>Matrix</strong> — team reports to both functional manager and PM</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0, lineHeight: 1.5 }}><strong>Project-based</strong> — team dedicated to projects, PM has more authority</p>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#7B9FCC", marginBottom: "1.5vh" }} />
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1.2vh 0" }}>Why Culture Matters</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 1.2vh 0", lineHeight: 1.5 }}>Organizational culture is based on shared workplace values. It shows up in how people communicate, make decisions, and work together.</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>A project out of sync with the company's culture is much harder to complete successfully.</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>07</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Google PM Certificate</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Foundations</div>
      </div>
    </div>
  );
}
