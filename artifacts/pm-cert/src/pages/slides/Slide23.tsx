export default function Slide23() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#F5F5F0", fontFamily: "'Inter', sans-serif", color: "#1E1E1E", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-4vw", right: "-4vw", width: "24vw", height: "24vw" }}>
        <div style={{ position: "absolute", top: "8vw", right: "8vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "3vw", right: "12vw", width: "9vw", height: "9vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.4 }} />
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
          How to Organize Effective Meetings
        </h1>
        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#E8878C", margin: "0 0 1.2vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Pre-Meeting Preparation</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Define the purpose of the meeting</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Build an agenda</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Share the agenda with attendees beforehand</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Book the right time and location (or video link)</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#7B9FCC", margin: "0 0 1.2vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>During the Meeting</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Stick to the agenda</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Manage time actively</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Record decisions and action items</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", fontWeight: 600, color: "#7BC8A4", margin: "0 0 1.2vh 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>After the Meeting</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Send a summary with action items, owners, and due dates</p>
              <p style={{ fontSize: "1.5vw", color: "#555555", margin: 0 }}>Follow up on unresolved items</p>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#1E1E1E", borderRadius: "1vw", padding: "1.5vw 2.5vw", maxWidth: "70vw" }}>
          <p style={{ fontSize: "1.4vw", color: "#F5F5F0", margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>Not every issue requires a meeting. Consider whether an email or async update could accomplish the same goal.</p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>23</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} /><span>Planning</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#FFFFFF", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#1E1E1E", boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)" }}>Study Guide</div>
      </div>
    </div>
  );
}
