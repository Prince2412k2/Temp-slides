export default function Slide27() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-8vw", left: "-4vw", width: "35vw", height: "35vw" }}>
        <div style={{ position: "absolute", bottom: "10vw", left: "10vw", width: "18vw", height: "18vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.25 }} />
        <div style={{ position: "absolute", bottom: "5vw", left: "15vw", width: "14vw", height: "14vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.25 }} />
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
          How Project Managers Improve Team Effectiveness
        </h1>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#7B9FCC", marginBottom: "1.5vh" }} />
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1.2vh 0" }}>Strong Teams Share</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>Clear roles and responsibilities</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>Psychological safety to speak up</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>Shared understanding of goals</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>Trust between members</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0 }}>Effective conflict resolution</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#E8878C", marginBottom: "1.5vh" }} />
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1.2vh 0" }}>How PMs Build Effectiveness</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>Hold regular team meetings and check-ins</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>Celebrate wins and acknowledge contributions</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>Address conflict early before it escalates</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.6vh 0" }}>Remove obstacles blocking team progress</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0 }}>Advocate for the team's needs with upper management</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>27</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Google PM Certificate</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Execution</div>
      </div>
    </div>
  );
}
