export default function Slide55() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-6vw", left: "-4vw", width: "26vw", height: "26vw" }}>
        <div style={{ position: "absolute", bottom: "7vw", left: "7vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.3 }} />
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
          The Evolution of Agile and AI in Project Management
        </h1>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.2vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>How Agile Has Evolved</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Scaled Agile frameworks emerged for large organizations (SAFe, LeSS)</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Agile spread from software to marketing, HR, education, and government</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>DevOps and Agile are increasingly combined for end-to-end delivery</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Remote and distributed Agile teams are now the norm</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.2vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>AI in Project Management</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Predictive risk identification using historical project data</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Automated status updates and reporting</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Natural language interfaces for backlog management</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Resource optimization and scheduling tools</p>
            </div>
            <div style={{ marginTop: "2vh", backgroundColor: "#1E1E1E", borderRadius: "1vw", padding: "1.5vw 2vw" }}>
              <p style={{ fontSize: "1.3vw", color: "#F5F5F0", margin: 0, lineHeight: 1.5 }}>AI assists PMs with data and analysis — but human judgment, communication, and leadership remain irreplaceable.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>55</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Agile</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
