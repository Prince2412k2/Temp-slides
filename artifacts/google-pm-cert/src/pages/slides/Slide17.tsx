export default function Slide17() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-8vw", left: "-4vw", width: "35vw", height: "35vw" }}>
        <div style={{ position: "absolute", bottom: "10vw", left: "10vw", width: "18vw", height: "18vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.25 }} />
        <div style={{ position: "absolute", bottom: "5vw", left: "15vw", width: "14vw", height: "14vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.25 }} />
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
          How to Create a Project Budget
        </h1>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#7B9FCC", marginBottom: "1.5vh" }} />
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1.2vh 0" }}>Budget Components</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>Labor costs</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>Materials and supplies</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>Software and tools</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>Vendor and contractor fees</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0 }}>Contingency reserves for unexpected costs</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#E8878C", marginBottom: "1.5vh" }} />
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1.2vh 0" }}>Budgeting Steps</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>1. Break down costs by milestone and deliverable</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>2. Use historical data from similar projects</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>3. Get estimates from vendors and team members</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>4. Build in a buffer for risk</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0 }}>5. Track spending continuously throughout the project</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>17</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Google PM Certificate</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Planning</div>
      </div>
    </div>
  );
}
