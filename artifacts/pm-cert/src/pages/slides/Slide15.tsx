export default function Slide15() {
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
          Building a Project Plan
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0, maxWidth: "60vw" }}>Project plans can be built in a spreadsheet with the following approach:</p>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C", lineHeight: 1, minWidth: "3vw" }}>1</div>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Review the project charter goals and deliverables</p>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7B9FCC", lineHeight: 1, minWidth: "3vw" }}>2</div>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>List all tasks associated with each deliverable</p>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4", lineHeight: 1, minWidth: "3vw" }}>3</div>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Identify milestones within that task list</p>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C", lineHeight: 1, minWidth: "3vw" }}>4</div>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Estimate time for each task</p>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7B9FCC", lineHeight: 1, minWidth: "3vw" }}>5</div>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Assign owners</p>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ fontSize: "2vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4", lineHeight: 1, minWidth: "3vw" }}>6</div>
              <p style={{ fontSize: "1.4vw", color: "#555555", margin: 0 }}>Track progress continuously</p>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.04)" }}>
              <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#1E1E1E", margin: "0 0 1vh 0" }}>Starting Point</p>
              <p style={{ fontSize: "1.3vw", color: "#555555", margin: 0, lineHeight: 1.6 }}>Ask yourself for each deliverable: "What steps do we need to take to achieve this?" Those steps become your tasks.</p>
            </div>
            <div style={{ backgroundColor: "#1E1E1E", borderRadius: "1.5vw", padding: "2.5vw" }}>
              <p style={{ fontSize: "1.3vw", color: "#F5F5F0", margin: 0, lineHeight: 1.6 }}>Analyze emails, old project plans, and stakeholder conversations to uncover additional tasks you may have missed.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>15</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Planning</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
