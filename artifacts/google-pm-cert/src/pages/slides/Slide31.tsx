export default function Slide31() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "30vw", height: "30vw" }}>
        <div style={{ position: "absolute", top: "10vw", right: "10vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.5 }} />
        <div style={{ position: "absolute", top: "5vw", right: "15vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.5 }} />
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
          Understanding Change Management
        </h1>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#7B9FCC", marginBottom: "1.5vh" }} />
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1vh 0" }}>What Is Change Management?</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 1.5vh 0", lineHeight: 1.5 }}>The process of delivering your completed project and getting people to adopt it. It's about managing the human side of change.</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#E8878C", marginBottom: "1.5vh" }} />
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1vh 0" }}>Core Concepts</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}><strong>Create a sense of ownership</strong> — involve stakeholders early</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}><strong>Create a sense of urgency</strong> — help people understand why change is needed now</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}><strong>Effective communication</strong> — be clear about the reasons and benefits of the change</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0 }}><strong>Follow a consistent process</strong> — use the same messaging across the organization</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>31</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Google PM Certificate</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Execution</div>
      </div>
    </div>
  );
}
