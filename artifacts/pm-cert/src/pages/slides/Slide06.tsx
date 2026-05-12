export default function Slide06() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-4vw", right: "-4vw", width: "26vw", height: "26vw" }}>
        <div style={{ position: "absolute", top: "9vw", right: "9vw", width: "13vw", height: "13vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.5 }} />
        <div style={{ position: "absolute", top: "4vw", right: "13vw", width: "10vw", height: "10vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.5 }} />
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
          Project Structures and Life Cycles
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>The Project Life Cycle consists of four phases:</p>
        <div style={{ display: "flex", gap: "2vw", flex: 1, alignItems: "stretch" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#E8878C" }} />
            <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, margin: 0 }}>Initiation</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Define the project, identify stakeholders, create the project charter</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#7B9FCC" }} />
            <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, margin: 0 }}>Planning</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Develop the project plan, set schedule, identify tasks and milestones</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#7BC8A4" }} />
            <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, margin: 0 }}>Execution</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Carry out the plan, manage the team, track progress</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#1E1E1E" }} />
            <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, margin: 0 }}>Closing</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Formally complete the project, document lessons learned, hand off deliverables</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>06</span>
          <span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} />
          <span>Foundations</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
