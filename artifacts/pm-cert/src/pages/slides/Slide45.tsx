export default function Slide45() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-6vw", right: "-4vw", width: "26vw", height: "26vw" }}>
        <div style={{ position: "absolute", bottom: "7vw", right: "7vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.3 }} />
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
          The Product Backlog
        </h1>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>What Is a Product Backlog?</p>
            <p style={{ fontSize: "1.5vw", color: "#555555", margin: "0 0 2vh 0", lineHeight: 1.6 }}>An ordered list of everything that might be needed in the product. It is the single source of truth for what the team will work on. The Product Owner owns and prioritizes it.</p>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Backlog Items Include</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8vh" }}>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#E8878C", flexShrink: 0 }} />
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>User stories (new features from user perspective)</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7B9FCC", flexShrink: 0 }} />
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Bug fixes</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7BC8A4", flexShrink: 0 }} />
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Technical improvements</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#1E1E1E", flexShrink: 0 }} />
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Research and exploration tasks</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ backgroundColor: "#1E1E1E", borderRadius: "1.5vw", padding: "3vw", marginBottom: "2vh" }}>
              <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4", margin: "0 0 1vh 0" }}>User Story Format</p>
              <p style={{ fontSize: "1.5vw", color: "#F5F5F0", margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>"As a [type of user], I want to [action], so that [benefit]."</p>
            </div>
            <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0, lineHeight: 1.6 }}>The backlog is never fully done — it evolves as the product and team learn more about customer needs.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>45</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Scrum</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
