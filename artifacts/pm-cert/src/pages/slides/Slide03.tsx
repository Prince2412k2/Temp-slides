export default function Slide03() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-8vw", left: "-4vw", width: "28vw", height: "28vw" }}>
        <div style={{ position: "absolute", bottom: "8vw", left: "8vw", width: "16vw", height: "16vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.3 }} />
        <div style={{ position: "absolute", bottom: "4vw", left: "12vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.3 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5vw" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#1E1E1E" }} />
          Google PM Certificate
        </div>
        <div style={{ fontSize: "1vw", color: "#666666" }}>2026</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", zIndex: 1, marginTop: "5vh", gap: "3vh" }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", fontWeight: 700, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.1, color: "#1E1E1E" }}>
          What Does a Project Manager Actually Do?
        </h1>
        <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0, lineHeight: 1.5, maxWidth: "60vw" }}>Project managers follow a structured process but wear many hats:</p>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.2vh" }}>
            <p style={{ fontSize: "1.5vw", color: "#1E1E1E", margin: 0 }}>Use productivity tools and create processes</p>
            <p style={{ fontSize: "1.5vw", color: "#1E1E1E", margin: 0 }}>Create project plans, schedules, and budgets</p>
            <p style={{ fontSize: "1.5vw", color: "#1E1E1E", margin: 0 }}>Manage and communicate with stakeholders</p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.2vh" }}>
            <p style={{ fontSize: "1.5vw", color: "#1E1E1E", margin: 0 }}>Identify and manage risks</p>
            <p style={{ fontSize: "1.5vw", color: "#1E1E1E", margin: 0 }}>Guide the team from initiation through closing</p>
            <p style={{ fontSize: "1.5vw", color: "#1E1E1E", margin: 0 }}>Remove obstacles blocking team progress</p>
          </div>
        </div>
        <div style={{ backgroundColor: "#1E1E1E", borderRadius: "1.5vw", padding: "2vw 3vw", maxWidth: "65vw", marginTop: "1vh" }}>
          <p style={{ fontSize: "1.6vw", color: "#F5F5F0", margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>
            "A project manager does not do all the work directly. They support the people who do."
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>03</span>
          <span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} />
          <span>Foundations</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
