export default function Slide02() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "28vw", height: "28vw" }}>
        <div style={{ position: "absolute", top: "10vw", right: "10vw", width: "14vw", height: "14vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.5 }} />
        <div style={{ position: "absolute", top: "5vw", right: "14vw", width: "11vw", height: "11vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.5 }} />
        <div style={{ position: "absolute", top: "14vw", right: "5vw", width: "9vw", height: "9vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.5 }} />
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
          What Is Project Management?
        </h1>
        <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", maxWidth: "70vw" }}>
          <p style={{ fontSize: "1.8vw", color: "#1E1E1E", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
            The application of knowledge, skills, tools, and techniques to meet project requirements and achieve the desired outcome.
          </p>
        </div>
        <div style={{ display: "flex", gap: "2vw", marginTop: "1vh" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.3vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1vh 0" }}>Key Activities</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: "0 0 0.8vh 0" }}>Planning and organizing</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: "0 0 0.8vh 0" }}>Managing tasks</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: "0 0 0.8vh 0" }}>Budgeting and controlling costs</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Ensuring delivery on time and within scope</p>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.3vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1vh 0" }}>Why It Matters</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0, lineHeight: 1.6 }}>Businesses depend on project management to deliver expected outcomes on time and within budget. Without it, projects risk missing goals, overspending, or failing entirely.</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>02</span>
          <span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} />
          <span>Foundations</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
