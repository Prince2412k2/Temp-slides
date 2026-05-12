export default function Slide28() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "30vw", height: "30vw" }}>
        <div style={{ position: "absolute", top: "10vw", right: "10vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "5vw", right: "15vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.4 }} />
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
          How Project Managers Can Influence Those Around Them
        </h1>
        <p style={{ fontSize: "1.8vw", color: "#555555", margin: 0, lineHeight: 1.5 }}><strong>Influencing</strong> is the ability to alter another person's thinking or behaviors without direct authority.</p>
        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "3vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C", lineHeight: 1, marginBottom: "1vh" }}>01</div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.7vw", fontWeight: 600, margin: "0 0 0.5vh 0" }}>Establish Credibility</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Show expertise and trustworthiness</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "3vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7B9FCC", lineHeight: 1, marginBottom: "1vh" }}>02</div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.7vw", fontWeight: 600, margin: "0 0 0.5vh 0" }}>Frame for Common Ground</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Show how your idea benefits them</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "3vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4", lineHeight: 1, marginBottom: "1vh" }}>03</div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.7vw", fontWeight: 600, margin: "0 0 0.5vh 0" }}>Provide Evidence</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Use data and examples to support your case</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "3vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C", lineHeight: 1, marginBottom: "1vh" }}>04</div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.7vw", fontWeight: 600, margin: "0 0 0.5vh 0" }}>Connect Emotionally</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Make the case resonate on a personal level</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>28</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Google PM Certificate</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Execution</div>
      </div>
    </div>
  );
}
