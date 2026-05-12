export default function Slide29() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-6vw", left: "-4vw", width: "26vw", height: "26vw" }}>
        <div style={{ position: "absolute", bottom: "7vw", left: "7vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.3 }} />
        <div style={{ position: "absolute", bottom: "3vw", left: "11vw", width: "11vw", height: "11vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.3 }} />
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
          How Project Managers Can Build Customer Satisfaction
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0, maxWidth: "65vw" }}>Customer satisfaction is a key measure of project success.</p>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Strategies for Strong Customer Relationships</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Communicate proactively and transparently</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Set realistic expectations from the start</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Deliver on your commitments</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Involve the customer early and often in decisions</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Follow up after delivery to ensure ongoing satisfaction</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Soft Skills to Practice</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ borderLeft: "0.3vw solid #E8878C", paddingLeft: "1.5vw" }}>
                <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.3vh 0" }}>Negotiation</p>
                <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Finding solutions that work for both sides</p>
              </div>
              <div style={{ borderLeft: "0.3vw solid #7B9FCC", paddingLeft: "1.5vw" }}>
                <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.3vh 0" }}>Empathetic Listening</p>
                <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Understanding what the customer truly wants</p>
              </div>
              <div style={{ borderLeft: "0.3vw solid #7BC8A4", paddingLeft: "1.5vw" }}>
                <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.3vh 0" }}>Trust Building</p>
                <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Consistent, honest communication over time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>29</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Execution</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
