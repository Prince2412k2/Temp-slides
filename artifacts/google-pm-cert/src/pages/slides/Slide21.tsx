export default function Slide21() {
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
        <p style={{ fontSize: "1.4vw", color: "#888888", margin: 0, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>Section — Execution</p>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", fontWeight: 700, margin: 0, letterSpacing: "-0.04em", lineHeight: 1.1, color: "#F5F5F0" }}>
          Communicate Effectively as a Project Manager
        </h1>
        <div style={{ display: "flex", gap: "4vw", marginTop: "1vh" }}>
          <div style={{ flex: 1 }}>
            <div style={{ borderTop: "0.2vw solid #E8878C", paddingTop: "1.5vh", marginBottom: "1vh" }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 0.8vh 0", color: "#F5F5F0" }}>Effective Communication Is</p>
              <p style={{ fontSize: "1.7vw", color: "#888888", margin: "0 0 0.5vh 0" }}>Clear</p>
              <p style={{ fontSize: "1.7vw", color: "#888888", margin: "0 0 0.5vh 0" }}>Honest</p>
              <p style={{ fontSize: "1.7vw", color: "#888888", margin: "0 0 0.5vh 0" }}>Relevant</p>
              <p style={{ fontSize: "1.7vw", color: "#888888", margin: 0 }}>Frequent but not excessive</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ borderTop: "0.2vw solid #7B9FCC", paddingTop: "1.5vh", marginBottom: "1vh" }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 0.8vh 0", color: "#F5F5F0" }}>Channels to Master</p>
              <p style={{ fontSize: "1.7vw", color: "#888888", margin: "0 0 0.5vh 0" }}>Email — concise, clear subject lines</p>
              <p style={{ fontSize: "1.7vw", color: "#888888", margin: "0 0 0.5vh 0" }}>Meetings — structured, agenda-driven</p>
              <p style={{ fontSize: "1.7vw", color: "#888888", margin: "0 0 0.5vh 0" }}>Instant messaging — quick updates only</p>
              <p style={{ fontSize: "1.7vw", color: "#888888", margin: 0 }}>Written documents and reports</p>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: "4vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C", lineHeight: 1, margin: "0 0 1vh 0" }}>90%</p>
            <p style={{ fontSize: "1.7vw", color: "#888888", margin: 0, lineHeight: 1.5 }}>of a PM's time is spent on communication</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#666666", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>21</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#666666" }} /><span>Google PM Certificate</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#F5F5F0", border: "0.1vw solid rgba(255,255,255,0.2)" }}>Execution</div>
      </div>
    </div>
  );
}
