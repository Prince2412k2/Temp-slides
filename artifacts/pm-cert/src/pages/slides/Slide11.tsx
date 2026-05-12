export default function Slide11() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "28vw", height: "28vw" }}>
        <div style={{ position: "absolute", top: "10vw", right: "10vw", width: "14vw", height: "14vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.5 }} />
        <div style={{ position: "absolute", top: "5vw", right: "14vw", width: "11vw", height: "11vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.5 }} />
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
          Scope and Scope Creep
        </h1>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Project Scope</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0, lineHeight: 1.6 }}>Defines what is included and what is not included in the project.</p>
            <div style={{ marginTop: "3vh" }}>
              <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Scope Creep</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0, lineHeight: 1.6 }}>Occurs when tasks or features are added to the project without a corresponding change to the timeline, budget, or resources.</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>How to Prevent Scope Creep</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#E8878C", marginTop: "0.6vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Clearly document what is in scope at the start</p>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7B9FCC", marginTop: "0.6vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Get sign-off from stakeholders on the scope</p>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7BC8A4", marginTop: "0.6vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Have a formal change request process</p>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#1E1E1E", marginTop: "0.6vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Push back on additions that are not approved</p>
              </div>
            </div>
            <div style={{ marginTop: "2vh", backgroundColor: "#1E1E1E", borderRadius: "1vw", padding: "1.5vw 2vw" }}>
              <p style={{ fontSize: "1.3vw", color: "#F5F5F0", margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>Scope creep is one of the most common reasons projects go over budget and miss deadlines.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>11</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Initiation</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
