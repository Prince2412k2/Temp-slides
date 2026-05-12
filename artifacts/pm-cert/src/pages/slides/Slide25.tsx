export default function Slide25() {
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
          Effective Project Management During Execution
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0, maxWidth: "60vw" }}>During execution, a project manager's focus shifts to:</p>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#E8878C", flexShrink: 0 }} />
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Keeping the team on track and unblocked</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7B9FCC", flexShrink: 0 }} />
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Managing risks as they arise</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7BC8A4", flexShrink: 0 }} />
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Maintaining open communication with stakeholders</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#1E1E1E", flexShrink: 0 }} />
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Monitoring scope, schedule, and budget</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#E8878C", flexShrink: 0 }} />
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Updating the project plan as things change</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ backgroundColor: "#1E1E1E", borderRadius: "1.5vw", padding: "3vw", height: "100%" }}>
              <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4", margin: "0 0 1.5vh 0" }}>Key Principle</p>
              <p style={{ fontSize: "1.5vw", color: "#F5F5F0", margin: 0, lineHeight: 1.6 }}>The project plan is a living document. It should be updated whenever there is a significant change to scope, schedule, or budget, with all changes clearly communicated to the team.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>25</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Execution</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
