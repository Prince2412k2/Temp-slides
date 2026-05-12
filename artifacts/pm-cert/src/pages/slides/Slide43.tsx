export default function Slide43() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-6vw", left: "-4vw", width: "26vw", height: "26vw" }}>
        <div style={{ position: "absolute", bottom: "7vw", left: "7vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.3 }} />
        <div style={{ position: "absolute", bottom: "3vw", left: "11vw", width: "11vw", height: "11vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.3 }} />
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
          The Three Scrum Roles
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Each person on a Scrum team has a distinct role with unique responsibilities:</p>
        <div style={{ display: "flex", gap: "2.5vw", flex: 1, alignItems: "stretch" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#E8878C" }} />
            <p style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, margin: 0 }}>Product Owner</p>
            <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0, lineHeight: 1.6 }}>Represents the customer's voice. Owns and prioritizes the Product Backlog. Ensures the team builds the right thing. Decides what gets done in each Sprint.</p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1vh", backgroundColor: "#1E1E1E", borderRadius: "1.5vw", padding: "2.5vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#7B9FCC" }} />
            <p style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, margin: 0, color: "#F5F5F0" }}>Scrum Master</p>
            <p style={{ fontSize: "1.4vw", color: "#aaaaaa", margin: 0, lineHeight: 1.6 }}>Serves the team as a coach. Facilitates Scrum events. Removes impediments. Helps the team improve. Is NOT a traditional project manager.</p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#7BC8A4" }} />
            <p style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, margin: 0 }}>Development Team</p>
            <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0, lineHeight: 1.6 }}>Cross-functional group that builds the product. Self-organizing. Typically 3–9 people. Responsible for delivering a potentially shippable product increment every Sprint.</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>43</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Scrum</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
