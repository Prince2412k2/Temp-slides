export default function Slide13() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "30vw", height: "30vw" }}>
        <div style={{ position: "absolute", top: "10vw", right: "10vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.5 }} />
        <div style={{ position: "absolute", top: "5vw", right: "15vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.5 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5vw" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#1E1E1E" }} />
          Google PM Certificate
        </div>
        <div style={{ fontSize: "1vw", color: "#666666" }}>2026</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", zIndex: 1, marginTop: "4vh", gap: "3vh" }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", fontWeight: 700, margin: 0, letterSpacing: "-0.04em", lineHeight: 1.1, color: "#1E1E1E" }}>
          The Benefits of Project Planning
        </h1>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1.5vh 0" }}>Planning Helps You</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.7vh 0", lineHeight: 1.5 }}>Document scope, tasks, milestones, and budget</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.7vh 0", lineHeight: 1.5 }}>Set a realistic schedule</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.7vh 0", lineHeight: 1.5 }}>Identify risks before they happen</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.7vh 0", lineHeight: 1.5 }}>Align the team and stakeholders on expectations</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Create a roadmap for execution</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1.5vh 0" }}>What Goes Into a Project Plan</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.7vh 0", lineHeight: 1.5 }}>Tasks and milestones</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.7vh 0", lineHeight: 1.5 }}>Assigned team members</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.7vh 0", lineHeight: 1.5 }}>Documentation and resources</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 2vh 0", lineHeight: 1.5 }}>Timeline and deadlines</p>
            <p style={{ fontSize: "1.7vw", color: "#E8878C", margin: 0, fontWeight: 600 }}>Lack of planning is one of the top causes of project failure.</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>13</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Google PM Certificate</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Planning</div>
      </div>
    </div>
  );
}
