export default function Slide48() {
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
          When to Use Agile or Waterfall
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>The decision depends on the nature of the project and its environment:</p>
        <div style={{ display: "flex", gap: "2vw", flex: 1, alignItems: "stretch" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)"}}>
            <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7B9FCC", margin: "0 0 1.5vh 0" }}>Choose Waterfall When</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Requirements are clear and stable</p>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>The project is linear with predictable phases</p>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Industry regulations require extensive documentation</p>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Deliverables are fixed (construction, manufacturing)</p>
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: "#1E1E1E", borderRadius: "1.5vw", padding: "2.5vw" }}>
            <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C", margin: "0 0 1.5vh 0" }}>Choose Agile When</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <p style={{ fontSize: "1.4vw", color: "#aaaaaa", margin: 0 }}>Requirements are unclear or frequently changing</p>
              <p style={{ fontSize: "1.4vw", color: "#aaaaaa", margin: 0 }}>Speed and adaptability are critical</p>
              <p style={{ fontSize: "1.4vw", color: "#aaaaaa", margin: 0 }}>Continuous customer collaboration is possible</p>
              <p style={{ fontSize: "1.4vw", color: "#aaaaaa", margin: 0 }}>The team is comfortable with iteration and ambiguity</p>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1vw", padding: "1.5vw 2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", maxWidth: "70vw" }}>
          <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0, lineHeight: 1.5 }}>Neither approach is universally superior. The best project managers know when to use which, and often blend both.</p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>48</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Scrum</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
