export default function Slide30() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-4vw", right: "-4vw", width: "24vw", height: "24vw" }}>
        <div style={{ position: "absolute", top: "8vw", right: "8vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "3vw", right: "12vw", width: "9vw", height: "9vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "12vw", right: "3vw", width: "7vw", height: "7vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.4 }} />
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
          Quality Management and Continuous Improvement
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0, maxWidth: "65vw" }}>Quality means fulfilling the outlined requirements for the deliverable and meeting or exceeding the needs and expectations of your customer.</p>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>The Triple Constraint</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1vw", padding: "1.5vw 2vw", boxShadow: "0 0.3vw 1vw rgba(0,0,0,0.04)", display: "flex", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#E8878C", flexShrink: 0 }} />
                <div><p style={{ fontSize: "1.4vw", fontWeight: 600, margin: 0 }}>Scope</p><p style={{ fontSize: "1.2vw", color: "#555555", margin: 0 }}>What the project includes</p></div>
              </div>
              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1vw", padding: "1.5vw 2vw", boxShadow: "0 0.3vw 1vw rgba(0,0,0,0.04)", display: "flex", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#7B9FCC", flexShrink: 0 }} />
                <div><p style={{ fontSize: "1.4vw", fontWeight: 600, margin: 0 }}>Time</p><p style={{ fontSize: "1.2vw", color: "#555555", margin: 0 }}>When it will be delivered</p></div>
              </div>
              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1vw", padding: "1.5vw 2vw", boxShadow: "0 0.3vw 1vw rgba(0,0,0,0.04)", display: "flex", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#7BC8A4", flexShrink: 0 }} />
                <div><p style={{ fontSize: "1.4vw", fontWeight: 600, margin: 0 }}>Budget</p><p style={{ fontSize: "1.2vw", color: "#555555", margin: 0 }}>What it will cost</p></div>
              </div>
            </div>
            <p style={{ fontSize: "1.3vw", color: "#888888", margin: "1.5vh 0 0 0", fontStyle: "italic" }}>If any one element suffers, overall quality suffers too.</p>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ backgroundColor: "#1E1E1E", borderRadius: "1.5vw", padding: "3vw", height: "100%" }}>
              <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4", margin: "0 0 1.5vh 0" }}>Continuous Improvement</p>
              <p style={{ fontSize: "1.4vw", color: "#F5F5F0", margin: 0, lineHeight: 1.6 }}>An ongoing effort to improve products, processes, or services. It involves recognizing what needs to change, planning for it, and implementing improvements.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>30</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Execution</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
