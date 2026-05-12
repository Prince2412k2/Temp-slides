export default function Slide18() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "30vw", height: "30vw" }}>
        <div style={{ position: "absolute", top: "10vw", right: "10vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "5vw", right: "15vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "15vw", right: "5vw", width: "10vw", height: "10vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.4 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5vw" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#1E1E1E" }} />
          Google PM Certificate
        </div>
        <div style={{ fontSize: "1vw", color: "#666666" }}>2026</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", zIndex: 1, marginTop: "4vh", gap: "2.5vh" }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", fontWeight: 700, margin: 0, letterSpacing: "-0.04em", lineHeight: 1.1, color: "#1E1E1E" }}>
          Risk Management Basics
        </h1>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#E8878C", marginBottom: "1.5vh" }} />
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1vh 0" }}>Risk Management Process</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.5vh 0" }}>1. Identify risks — brainstorm what could go wrong</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.5vh 0" }}>2. Assess likelihood and impact of each risk</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.5vh 0" }}>3. Prioritize risks that are both likely and high impact</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.5vh 0" }}>4. Create a mitigation plan for top risks</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0 }}>5. Monitor risks throughout the project</p>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#7B9FCC", marginBottom: "1.5vh" }} />
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1vh 0" }}>Types of Risks</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.5vh 0" }}>Schedule risks (delays)</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.5vh 0" }}>Budget risks (cost overruns)</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.5vh 0" }}>Scope risks (uncontrolled changes)</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.5vh 0" }}>Resource risks (people leaving, unavailability)</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 2vh 0" }}>External risks (market shifts, regulation)</p>
            <p style={{ fontSize: "1.7vw", color: "#E8878C", margin: 0, fontWeight: 600 }}>No project goes 100% according to plan. Flexibility and preparation are essential.</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>18</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Google PM Certificate</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Planning</div>
      </div>
    </div>
  );
}
