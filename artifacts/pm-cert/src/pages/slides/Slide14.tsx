export default function Slide14() {
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
      <div style={{ flex: 1, display: "flex", flexDirection: "column", zIndex: 1, marginTop: "4vh", gap: "2.5vh" }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", fontWeight: 700, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.1, color: "#1E1E1E" }}>
          Project Planning for Beginners
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>The five core elements of a project plan:</p>
        <div style={{ display: "flex", gap: "2vw", flex: 1, alignItems: "stretch" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ fontSize: "2.5vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C" }}>1</div>
            <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: 0 }}>Tasks</p>
            <p style={{ fontSize: "1.2vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Activities that need to be completed within a set time</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ fontSize: "2.5vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7B9FCC" }}>2</div>
            <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: 0 }}>Milestones</p>
            <p style={{ fontSize: "1.2vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Important points that indicate progress or phase completion</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ fontSize: "2.5vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4" }}>3</div>
            <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: 0 }}>People</p>
            <p style={{ fontSize: "1.2vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Who is responsible for what</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ fontSize: "2.5vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C" }}>4</div>
            <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: 0 }}>Documentation</p>
            <p style={{ fontSize: "1.2vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Supporting materials, charters, contracts, requirements</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ fontSize: "2.5vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7B9FCC" }}>5</div>
            <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: 0 }}>Time</p>
            <p style={{ fontSize: "1.2vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Estimates for each task and an overall schedule</p>
          </div>
        </div>
        <p style={{ fontSize: "1.3vw", color: "#888888", margin: 0, fontStyle: "italic" }}>At the center of every project plan is the schedule — your guide for time estimates, milestone tracking, and overall project progress.</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>14</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Planning</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
