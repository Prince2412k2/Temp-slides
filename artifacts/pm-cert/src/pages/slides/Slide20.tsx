export default function Slide20() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-6vw", right: "-4vw", width: "26vw", height: "26vw" }}>
        <div style={{ position: "absolute", bottom: "7vw", right: "7vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.3 }} />
        <div style={{ position: "absolute", bottom: "3vw", right: "11vw", width: "11vw", height: "11vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.3 }} />
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
          The Project Communication Plan
        </h1>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>A Communication Plan Outlines</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#E8878C", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Who needs to receive information</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7B9FCC", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>What type of information they need</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7BC8A4", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>How often they need it</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#1E1E1E", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Through which channel (email, meeting, report)</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#E8878C", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Who is responsible for sending it</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Why Communication Plans Matter</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Prevents missed updates</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Ensures everyone knows what is happening</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Reduces confusion and rework</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Helps manage stakeholder expectations</p>
            </div>
            <div style={{ marginTop: "2.5vh", backgroundColor: "#1E1E1E", borderRadius: "1vw", padding: "1.5vw 2vw" }}>
              <p style={{ fontSize: "1.3vw", color: "#F5F5F0", margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>Communication is arguably the most important tool in project management. Most project failures involve a communication breakdown.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>20</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Planning</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
