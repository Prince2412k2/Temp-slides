export default function Slide53() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-6vw", right: "-4vw", width: "26vw", height: "26vw" }}>
        <div style={{ position: "absolute", bottom: "7vw", right: "7vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.3 }} />
        <div style={{ position: "absolute", bottom: "3vw", right: "11vw", width: "11vw", height: "11vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.3 }} />
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
          Common Scrum Pitfalls
        </h1>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#E8878C", margin: "0 0 1.2vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Team-Level Pitfalls</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#E8878C", marginTop: "0.7vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Treating Daily Scrum as a status meeting to the Scrum Master rather than a team coordination event</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#E8878C", marginTop: "0.7vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Skipping retrospectives when things are "going well"</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#E8878C", marginTop: "0.7vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Overloading Sprints with too much work</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#7B9FCC", margin: "0 0 1.2vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Organizational Pitfalls</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7B9FCC", marginTop: "0.7vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Scrum Master acting as a traditional manager instead of a servant leader</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7B9FCC", marginTop: "0.7vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Stakeholders not attending Sprint Reviews</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#7B9FCC", marginTop: "0.7vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Changing priorities mid-Sprint without a good reason</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#1E1E1E", borderRadius: "1vw", padding: "1.5vw 2.5vw", maxWidth: "75vw" }}>
          <p style={{ fontSize: "1.4vw", color: "#F5F5F0", margin: 0, lineHeight: 1.5 }}>Scrum is deceptively simple to understand but difficult to master. The pitfalls above are where most teams get stuck.</p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>53</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Scrum</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
