export default function Slide51() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-6vw", left: "-4vw", width: "26vw", height: "26vw" }}>
        <div style={{ position: "absolute", bottom: "7vw", left: "7vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.3 }} />
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
          The Value Roadmap
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0, maxWidth: "65vw" }}>An Agile way of mapping out the product development process. It gives the team direction and prioritizes features that deliver maximum value.</p>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Three Key Components</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1vw", padding: "1.5vw 2vw", boxShadow: "0 0.3vw 1vw rgba(0,0,0,0.04)", display: "flex", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#E8878C", flexShrink: 0 }} />
                <div><p style={{ fontSize: "1.4vw", fontWeight: 600, margin: 0 }}>Product Vision</p><p style={{ fontSize: "1.2vw", color: "#555555", margin: 0 }}>Why the product exists and where it is headed</p></div>
              </div>
              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1vw", padding: "1.5vw 2vw", boxShadow: "0 0.3vw 1vw rgba(0,0,0,0.04)", display: "flex", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#7B9FCC", flexShrink: 0 }} />
                <div><p style={{ fontSize: "1.4vw", fontWeight: 600, margin: 0 }}>Product Roadmap</p><p style={{ fontSize: "1.2vw", color: "#555555", margin: 0 }}>High-level view of what will be built and when</p></div>
              </div>
              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1vw", padding: "1.5vw 2vw", boxShadow: "0 0.3vw 1vw rgba(0,0,0,0.04)", display: "flex", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#7BC8A4", flexShrink: 0 }} />
                <div><p style={{ fontSize: "1.4vw", fontWeight: 600, margin: 0 }}>Release Plan</p><p style={{ fontSize: "1.2vw", color: "#555555", margin: 0 }}>Schedule for when features will be delivered to users</p></div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ backgroundColor: "#1E1E1E", borderRadius: "1.5vw", padding: "3vw", height: "100%" }}>
              <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4", margin: "0 0 1.5vh 0" }}>Value First</p>
              <p style={{ fontSize: "1.4vw", color: "#F5F5F0", margin: 0, lineHeight: 1.6 }}>The roadmap is not a promise — it is a plan. The Product Owner continuously updates it based on customer feedback, new information, and changing priorities to always ensure the team is building the most valuable things next.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>51</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Scrum</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
