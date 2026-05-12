export default function Slide16() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-4vw", right: "-4vw", width: "24vw", height: "24vw" }}>
        <div style={{ position: "absolute", top: "8vw", right: "8vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "4vw", right: "12vw", width: "9vw", height: "9vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.4 }} />
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
          Negotiating with Stakeholders
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0, maxWidth: "60vw" }}>Strong project plans require buy-in. Key negotiation principles:</p>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#E8878C", marginTop: "0.7vh", flexShrink: 0 }} />
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Understand what stakeholders truly need, not just what they ask for</p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7B9FCC", marginTop: "0.7vh", flexShrink: 0 }} />
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Be transparent about constraints (time, budget, scope)</p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7BC8A4", marginTop: "0.7vh", flexShrink: 0 }} />
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Offer alternatives when you cannot deliver exactly what is requested</p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#1E1E1E", marginTop: "0.7vh", flexShrink: 0 }} />
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Document all agreements to avoid misunderstandings later</p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#E8878C", marginTop: "0.7vh", flexShrink: 0 }} />
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Revisit the plan if circumstances change</p>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
            <div style={{ backgroundColor: "#1E1E1E", borderRadius: "1.5vw", padding: "3vw" }}>
              <p style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4", margin: "0 0 1.5vh 0" }}>Empathy is a negotiation tool.</p>
              <p style={{ fontSize: "1.4vw", color: "#F5F5F0", margin: 0, lineHeight: 1.6 }}>When you understand the stakeholder's underlying goal, you can find creative solutions that work for everyone.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>16</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Planning</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
