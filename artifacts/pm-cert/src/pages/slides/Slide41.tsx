export default function Slide41() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-6vw", right: "-4vw", width: "26vw", height: "26vw" }}>
        <div style={{ position: "absolute", bottom: "7vw", right: "7vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.3 }} />
        <div style={{ position: "absolute", bottom: "3vw", right: "11vw", width: "11vw", height: "11vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.3 }} />
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
          Lean's 5 Core Principles
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0, maxWidth: "60vw" }}>Lean originated in manufacturing at Toyota and focuses on eliminating waste and delivering maximum customer value.</p>
        <div style={{ display: "flex", gap: "2vw", flex: 1, alignItems: "stretch" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ fontSize: "2.5vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C" }}>1</div>
            <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: 0 }}>Define Value</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Identify what the customer considers valuable</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ fontSize: "2.5vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7B9FCC" }}>2</div>
            <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: 0 }}>Map the Value Stream</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Chart all steps that create or don't create value</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ fontSize: "2.5vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4" }}>3</div>
            <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: 0 }}>Create Flow</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Remove obstacles so work flows smoothly</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ fontSize: "2.5vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C" }}>4</div>
            <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: 0 }}>Establish Pull</p>
            <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Work is pulled based on actual customer demand</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#1E1E1E", borderRadius: "1.5vw", padding: "2.5vw", display: "flex", flexDirection: "column", gap: "0.8vh" }}>
            <div style={{ fontSize: "2.5vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4" }}>5</div>
            <p style={{ fontSize: "1.5vw", fontWeight: 600, margin: 0, color: "#F5F5F0" }}>Pursue Perfection</p>
            <p style={{ fontSize: "1.3vw", color: "#aaaaaa", margin: 0, lineHeight: 1.5 }}>Continuously improve to eliminate all waste</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>41</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Agile</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
