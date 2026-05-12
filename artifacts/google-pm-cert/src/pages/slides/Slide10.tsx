export default function Slide10() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "30vw", height: "30vw" }}>
        <div style={{ position: "absolute", top: "10vw", right: "10vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.5 }} />
        <div style={{ position: "absolute", top: "5vw", right: "15vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.5 }} />
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
          Setting SMART Goals
        </h1>
        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", borderTop: "0.4vw solid #E8878C" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2.5vw", fontWeight: 700, margin: "0 0 0.5vh 0", color: "#E8878C" }}>S</p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 0.5vh 0" }}>Specific</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Clearly defined, not vague</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", borderTop: "0.4vw solid #7B9FCC" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2.5vw", fontWeight: 700, margin: "0 0 0.5vh 0", color: "#7B9FCC" }}>M</p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 0.5vh 0" }}>Measurable</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Has metrics or indicators of success</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", borderTop: "0.4vw solid #7BC8A4" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2.5vw", fontWeight: 700, margin: "0 0 0.5vh 0", color: "#7BC8A4" }}>A</p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 0.5vh 0" }}>Attainable</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Realistic and achievable</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", borderTop: "0.4vw solid #E8878C" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2.5vw", fontWeight: 700, margin: "0 0 0.5vh 0", color: "#E8878C" }}>R</p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 0.5vh 0" }}>Relevant</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Aligned with the broader business objective</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", borderTop: "0.4vw solid #7B9FCC" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2.5vw", fontWeight: 700, margin: "0 0 0.5vh 0", color: "#7B9FCC" }}>T</p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 0.5vh 0" }}>Time-bound</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Has a defined deadline or timeframe</p>
          </div>
        </div>
        <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0, lineHeight: 1.5, maxWidth: "80vw" }}>Example: "Increase customer satisfaction scores by 15% within 6 months by launching a new follow-up survey system" is SMART. "Improve customer experience" is not.</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>10</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Google PM Certificate</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Initiation</div>
      </div>
    </div>
  );
}
