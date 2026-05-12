export default function Slide12() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "-6vw", left: "-4vw", width: "26vw", height: "26vw" }}>
        <div style={{ position: "absolute", bottom: "7vw", left: "7vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.3 }} />
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
          Communicating and Working with Stakeholders
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0, maxWidth: "60vw" }}>Stakeholders are anyone who has an interest in the project outcome, including sponsors, customers, team members, and other departments.</p>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Steps to Manage Stakeholders</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C", lineHeight: 1, minWidth: "3vw" }}>1</div>
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Identify all stakeholders early</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7B9FCC", lineHeight: 1, minWidth: "3vw" }}>2</div>
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Understand their interests and influence levels</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4", lineHeight: 1, minWidth: "3vw" }}>3</div>
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Create a stakeholder map (RACI chart)</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C", lineHeight: 1, minWidth: "3vw" }}>4</div>
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Communicate regularly based on their needs</p>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7B9FCC", lineHeight: 1, minWidth: "3vw" }}>5</div>
                <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Involve them at key decision points</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
              <p style={{ fontSize: "1.6vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, margin: "0 0 1.5vh 0", color: "#1E1E1E" }}>RACI Chart</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
                <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                  <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#E8878C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "1vw", fontWeight: 700, color: "#fff" }}>R</span>
                  </div>
                  <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Responsible — does the work</p>
                </div>
                <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                  <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#7B9FCC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "1vw", fontWeight: 700, color: "#fff" }}>A</span>
                  </div>
                  <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Accountable — owns the outcome</p>
                </div>
                <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                  <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#7BC8A4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "1vw", fontWeight: 700, color: "#fff" }}>C</span>
                  </div>
                  <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Consulted — provides input</p>
                </div>
                <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                  <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#1E1E1E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "1vw", fontWeight: 700, color: "#fff" }}>I</span>
                  </div>
                  <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0 }}>Informed — kept up to date</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>12</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Initiation</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
