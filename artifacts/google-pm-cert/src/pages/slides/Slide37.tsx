export default function Slide37() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-8vw", left: "-4vw", width: "35vw", height: "35vw" }}>
        <div style={{ position: "absolute", bottom: "10vw", left: "10vw", width: "18vw", height: "18vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.25 }} />
        <div style={{ position: "absolute", bottom: "5vw", left: "15vw", width: "14vw", height: "14vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.25 }} />
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
          The Scrum Team
        </h1>
        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", borderTop: "0.4vw solid #E8878C" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2vw", fontWeight: 700, margin: "0 0 0.8vh 0", color: "#E8878C" }}>Product Owner</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.5vh 0" }}>Represents the voice of the customer</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.5vh 0" }}>Manages and prioritizes the Product Backlog</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0 }}>Ensures the team builds the most valuable features first</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", borderTop: "0.4vw solid #7B9FCC" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2vw", fontWeight: 700, margin: "0 0 0.8vh 0", color: "#7B9FCC" }}>Scrum Master</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.5vh 0" }}>Coaches the team on Scrum practices</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.5vh 0" }}>Removes impediments and blockers</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0 }}>Facilitates Scrum ceremonies</p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)", borderTop: "0.4vw solid #7BC8A4" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2vw", fontWeight: 700, margin: "0 0 0.8vh 0", color: "#7BC8A4" }}>Development Team</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.5vh 0" }}>Cross-functional: has all skills needed to build the product</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: "0 0 0.5vh 0" }}>Self-organizing: decides how to do the work</p>
            <p style={{ fontSize: "1.7vw", color: "#555555", margin: 0 }}>Typically 3–9 people</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>37</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Google PM Certificate</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Agile &amp; Scrum</div>
      </div>
    </div>
  );
}
