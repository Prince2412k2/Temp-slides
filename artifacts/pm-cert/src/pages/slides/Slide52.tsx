export default function Slide52() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-4vw", right: "-4vw", width: "24vw", height: "24vw" }}>
        <div style={{ position: "absolute", top: "8vw", right: "8vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "3vw", right: "12vw", width: "9vw", height: "9vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.4 }} />
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
          Agile Challenges and How to Overcome Them
        </h1>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#E8878C", margin: "0 0 1.2vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Common Challenges</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Teams resist changing from familiar Waterfall habits</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Stakeholders struggle with "no detailed plan upfront"</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Lack of customer availability for ongoing feedback</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Scope can still creep if backlog prioritization is weak</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Misunderstanding of Agile roles and responsibilities</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#7BC8A4", margin: "0 0 1.2vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Solutions</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Invest in Agile training and coaching for the whole team</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Set expectations with stakeholders using roadmaps and release plans</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Schedule regular stakeholder demos to gather timely feedback</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Use retrospectives to continuously improve team processes</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Clarify who owns what with clear role definitions</p>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#1E1E1E", borderRadius: "1vw", padding: "1.5vw 2.5vw", maxWidth: "70vw" }}>
          <p style={{ fontSize: "1.4vw", color: "#F5F5F0", margin: 0, lineHeight: 1.5 }}>Agile transformation takes time. Be patient with your team and celebrate small wins along the way.</p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>52</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Scrum</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
