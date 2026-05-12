export default function Slide36() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-4vw", right: "-4vw", width: "24vw", height: "24vw" }}>
        <div style={{ position: "absolute", top: "8vw", right: "8vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "3vw", right: "12vw", width: "9vw", height: "9vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.4 }} />
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
          Intro to Agile
        </h1>
        <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", maxWidth: "70vw" }}>
          <p style={{ fontSize: "1.8vw", color: "#1E1E1E", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>Agile is an iterative approach to project management and software development that helps teams deliver value to their customers faster and with fewer headaches.</p>
        </div>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Agile vs Waterfall</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7B9FCC", marginTop: "0.7vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Waterfall is linear — phases are completed sequentially before moving on</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#E8878C", marginTop: "0.7vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Agile is iterative — work is done in short cycles, with constant feedback and adjustment</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Agile Values</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Individuals and interactions over processes and tools</p>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Working software over comprehensive documentation</p>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Customer collaboration over contract negotiation</p>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Responding to change over following a plan</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>36</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Agile</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
