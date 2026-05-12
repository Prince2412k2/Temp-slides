export default function Slide49() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-6vw", right: "-4vw", width: "26vw", height: "26vw" }}>
        <div style={{ position: "absolute", bottom: "7vw", right: "7vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.3 }} />
        <div style={{ position: "absolute", bottom: "3vw", right: "11vw", width: "11vw", height: "11vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.3 }} />
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
          Blending Methods: Hybrid Project Management
        </h1>
        <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw 2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", maxWidth: "70vw" }}>
          <p style={{ fontSize: "1.7vw", color: "#1E1E1E", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>Hybrid project management combines elements of both Agile and Waterfall to meet the unique needs of a project.</p>
        </div>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Common Hybrid Patterns</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ borderLeft: "0.3vw solid #E8878C", paddingLeft: "1.5vw" }}>
                <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.2vh 0" }}>Waterfall Planning + Agile Execution</p>
                <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Use a waterfall approach to define scope and budget, then execute with Scrum sprints</p>
              </div>
              <div style={{ borderLeft: "0.3vw solid #7B9FCC", paddingLeft: "1.5vw" }}>
                <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.2vh 0" }}>Phase-gated with Sprints</p>
                <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Use formal phase gates for big decisions but run sprints within each phase</p>
              </div>
              <div style={{ borderLeft: "0.3vw solid #7BC8A4", paddingLeft: "1.5vw" }}>
                <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.2vh 0" }}>Agile with Fixed Milestones</p>
                <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Use sprints but align them with key delivery dates from a waterfall schedule</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
            <div style={{ backgroundColor: "#1E1E1E", borderRadius: "1.5vw", padding: "3vw" }}>
              <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4", margin: "0 0 1.5vh 0" }}>The Right Mix</p>
              <p style={{ fontSize: "1.4vw", color: "#F5F5F0", margin: 0, lineHeight: 1.6 }}>There is no single "right" approach. The best project managers understand both methodologies deeply and adapt their approach to what the project actually needs.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>49</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Scrum</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
