export default function Slide21() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-4vw", right: "-4vw", width: "26vw", height: "26vw" }}>
        <div style={{ position: "absolute", top: "9vw", right: "9vw", width: "13vw", height: "13vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "4vw", right: "13vw", width: "10vw", height: "10vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.4 }} />
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
          Communicate Effectively as a Project Manager
        </h1>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <div style={{ backgroundColor: "#1E1E1E", borderRadius: "1.5vw", padding: "2.5vw", marginBottom: "2vh" }}>
              <p style={{ fontSize: "4vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4", margin: 0, lineHeight: 1 }}>90%</p>
              <p style={{ fontSize: "1.4vw", color: "#F5F5F0", margin: "0.8vh 0 0 0" }}>of a PM's time is spent on communication</p>
            </div>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Effective Communication Is</p>
            <p style={{ fontSize: "1.4vw", color: "#555555", margin: "0 0 0.8vh 0" }}>Clear</p>
            <p style={{ fontSize: "1.4vw", color: "#555555", margin: "0 0 0.8vh 0" }}>Honest</p>
            <p style={{ fontSize: "1.4vw", color: "#555555", margin: "0 0 0.8vh 0" }}>Relevant</p>
            <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Frequent but not excessive (avoid information overload)</p>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Communication Channels to Master</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ borderLeft: "0.3vw solid #E8878C", paddingLeft: "1.5vw" }}>
                <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.2vh 0" }}>Email</p>
                <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Keep it concise, clear subject lines, appropriate recipients</p>
              </div>
              <div style={{ borderLeft: "0.3vw solid #7B9FCC", paddingLeft: "1.5vw" }}>
                <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.2vh 0" }}>Meetings</p>
                <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Structured, intentional, agenda-driven</p>
              </div>
              <div style={{ borderLeft: "0.3vw solid #7BC8A4", paddingLeft: "1.5vw" }}>
                <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.2vh 0" }}>Instant Messaging</p>
                <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Quick updates, not for complex discussions</p>
              </div>
              <div style={{ borderLeft: "0.3vw solid #1E1E1E", paddingLeft: "1.5vw" }}>
                <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 0.2vh 0" }}>Written Documents</p>
                <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Reports and formal documentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>21</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Planning</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
