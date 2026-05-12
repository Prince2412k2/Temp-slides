export default function Slide10() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-4vw", right: "-4vw", width: "26vw", height: "26vw" }}>
        <div style={{ position: "absolute", top: "9vw", right: "9vw", width: "13vw", height: "13vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "4vw", right: "13vw", width: "10vw", height: "10vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.4 }} />
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
          Setting SMART Goals
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Goals must be SMART to be actionable:</p>
        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ fontSize: "3vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C", lineHeight: 1 }}>S</div>
            <div><p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.3vh 0" }}>Specific</p><p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Clearly defined, not vague</p></div>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ fontSize: "3vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7B9FCC", lineHeight: 1 }}>M</div>
            <div><p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.3vh 0" }}>Measurable</p><p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Has metrics or indicators of success</p></div>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ fontSize: "3vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4", lineHeight: 1 }}>A</div>
            <div><p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.3vh 0" }}>Attainable</p><p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Realistic and achievable</p></div>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ fontSize: "3vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C", lineHeight: 1 }}>R</div>
            <div><p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.3vh 0" }}>Relevant</p><p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Aligned with the broader business objective</p></div>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ fontSize: "3vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7B9FCC", lineHeight: 1 }}>T</div>
            <div><p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.3vh 0" }}>Time-bound</p><p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Has a defined deadline or timeframe</p></div>
          </div>
        </div>
        <div style={{ backgroundColor: "#1E1E1E", borderRadius: "1vw", padding: "1.5vw 2.5vw", maxWidth: "75vw" }}>
          <p style={{ fontSize: "1.3vw", color: "#F5F5F0", margin: 0, lineHeight: 1.5 }}>
            <span style={{ color: "#7BC8A4", fontWeight: 600 }}>SMART:</span> "Increase customer satisfaction scores by 15% within 6 months by launching a new follow-up survey system"
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>10</span>
          <span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} />
          <span>Initiation</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
