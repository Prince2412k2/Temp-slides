export default function Slide01() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "30vw", height: "30vw" }}>
        <div style={{ position: "absolute", top: "10vw", right: "10vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box" }} />
        <div style={{ position: "absolute", top: "5vw", right: "15vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box" }} />
        <div style={{ position: "absolute", top: "15vw", right: "5vw", width: "10vw", height: "10vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5vw" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#1E1E1E" }} />
          Google PM Certificate
        </div>
        <div style={{ fontSize: "1vw", color: "#666666" }}>2026</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "3vh", zIndex: 1, marginTop: "8vh" }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "6vw", fontWeight: 700, margin: 0, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#1E1E1E" }}>
          Google Project Management Certificate
        </h1>
        <p style={{ fontSize: "2vw", fontWeight: 400, color: "#555555", margin: 0, maxWidth: "55vw", lineHeight: 1.5 }}>
          Comprehensive Course Review
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.8vh", marginTop: "2vh" }}>
          <p style={{ fontSize: "1.5vw", color: "#888888", margin: 0 }}>Foundations of Project Management</p>
          <p style={{ fontSize: "1.5vw", color: "#888888", margin: 0 }}>Project Initiation · Planning · Execution</p>
          <p style={{ fontSize: "1.5vw", color: "#888888", margin: 0 }}>Agile and Scrum · Closing and Career Readiness</p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888" }}>Complete Study Presentation</div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
