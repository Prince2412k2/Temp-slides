export default function Slide56() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#1E1E1E", fontFamily: "'Inter', sans-serif", color: "#F5F5F0", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "30vw", height: "30vw" }}>
        <div style={{ position: "absolute", top: "10vw", right: "10vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.3 }} />
        <div style={{ position: "absolute", top: "5vw", right: "15vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.3 }} />
        <div style={{ position: "absolute", top: "15vw", right: "5vw", width: "10vw", height: "10vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.3 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5vw" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#F5F5F0" }} />
          Google PM Certificate
        </div>
        <div style={{ fontSize: "1vw", color: "#888888" }}>2026</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", zIndex: 1, marginTop: "4vh", gap: "3vh" }}>
        <p style={{ fontSize: "1.4vw", color: "#888888", margin: 0, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>Section — Careers</p>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4.5vw", fontWeight: 700, margin: 0, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#F5F5F0" }}>
          Building a Career in Project Management
        </h1>
        <p style={{ fontSize: "1.8vw", color: "#888888", margin: "1vh 0 0 0", lineHeight: 1.5, maxWidth: "60vw" }}>Project management is a high-demand career path across virtually every industry. The Google PM Certificate is a recognized first step into this field.</p>
        <div style={{ display: "flex", gap: "3vw", marginTop: "2vh" }}>
          <div style={{ flex: 1, borderTop: "0.2vw solid #E8878C", paddingTop: "1.5vh" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.7vw", fontWeight: 600, margin: "0 0 0.5vh 0", color: "#F5F5F0" }}>High Demand</p>
            <p style={{ fontSize: "1.5vw", color: "#888888", margin: 0 }}>PM roles needed in every industry globally</p>
          </div>
          <div style={{ flex: 1, borderTop: "0.2vw solid #7B9FCC", paddingTop: "1.5vh" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.7vw", fontWeight: 600, margin: "0 0 0.5vh 0", color: "#F5F5F0" }}>Good Pay</p>
            <p style={{ fontSize: "1.5vw", color: "#888888", margin: 0 }}>Competitive salaries at all experience levels</p>
          </div>
          <div style={{ flex: 1, borderTop: "0.2vw solid #7BC8A4", paddingTop: "1.5vh" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.7vw", fontWeight: 600, margin: "0 0 0.5vh 0", color: "#F5F5F0" }}>Growth Path</p>
            <p style={{ fontSize: "1.5vw", color: "#888888", margin: 0 }}>Clear ladder from coordinator to senior PM to director</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#666666", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>56</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#666666" }} /><span>Google PM Certificate</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#F5F5F0", border: "0.1vw solid rgba(255,255,255,0.2)" }}>Careers</div>
      </div>
    </div>
  );
}
