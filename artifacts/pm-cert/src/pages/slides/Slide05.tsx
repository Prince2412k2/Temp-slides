export default function Slide05() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-6vw", right: "-4vw", width: "25vw", height: "25vw" }}>
        <div style={{ position: "absolute", bottom: "6vw", right: "6vw", width: "14vw", height: "14vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.3 }} />
        <div style={{ position: "absolute", bottom: "3vw", right: "10vw", width: "10vw", height: "10vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.3 }} />
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
          Professional Project Management Skills
        </h1>
        <div style={{ display: "flex", gap: "4vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Core Competencies</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: "0 0 1vh 0" }}>Planning and organizing</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: "0 0 1vh 0" }}>Managing tasks and priorities</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: "0 0 1vh 0" }}>Budget management and cost control</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: "0 0 1vh 0" }}>Communication and stakeholder management</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: "0 0 1vh 0" }}>Risk identification and mitigation</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Leadership and team motivation</p>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Soft Skills That Matter</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#E8878C", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Negotiation</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7B9FCC", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Empathetic listening</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7BC8A4", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Trust building</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#1E1E1E", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Influencing without authority</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>05</span>
          <span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} />
          <span>Foundations</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
