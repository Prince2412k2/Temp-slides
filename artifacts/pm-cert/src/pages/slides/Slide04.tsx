export default function Slide04() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "28vw", height: "28vw" }}>
        <div style={{ position: "absolute", top: "10vw", right: "10vw", width: "14vw", height: "14vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "5vw", right: "14vw", width: "11vw", height: "11vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.4 }} />
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
          The Value of a Project Manager
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0, maxWidth: "60vw" }}>Project managers add value through four core dimensions:</p>
        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", backgroundColor: "#E8878C" }} />
            <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, margin: 0 }}>Prioritization</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Deciding what the team should focus on first</p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", backgroundColor: "#7B9FCC" }} />
            <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, margin: 0 }}>Delegation</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Assigning work to the right people at the right time</p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", backgroundColor: "#7BC8A4" }} />
            <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, margin: 0 }}>Communication</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Serving as the main information hub for the team and stakeholders</p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", backgroundColor: "#1E1E1E" }} />
            <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, margin: 0 }}>Organizational Skills</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Keeping everyone aligned and moving forward</p>
          </div>
        </div>
        <p style={{ fontSize: "1.3vw", color: "#888888", margin: "1vh 0 0 0", maxWidth: "70vw", lineHeight: 1.6, fontStyle: "italic" }}>Project managers shepherd projects from start to finish, serving as guides using impeccable organizational and interpersonal skills every step of the way.</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>04</span>
          <span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} />
          <span>Foundations</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
