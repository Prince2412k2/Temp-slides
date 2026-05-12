export default function Slide60() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#1E1E1E", fontFamily: "'Inter', sans-serif", color: "#F5F5F0", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box", position: "relative" }}>
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "30vw", height: "30vw" }}>
        <div style={{ position: "absolute", top: "10vw", right: "10vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.5 }} />
        <div style={{ position: "absolute", top: "5vw", right: "15vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.5 }} />
        <div style={{ position: "absolute", top: "15vw", right: "5vw", width: "10vw", height: "10vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.5 }} />
      </div>
      <div style={{ position: "absolute", bottom: "-8vw", left: "-5vw", width: "30vw", height: "30vw" }}>
        <div style={{ position: "absolute", bottom: "8vw", left: "8vw", width: "16vw", height: "16vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.2 }} />
        <div style={{ position: "absolute", bottom: "3vw", left: "13vw", width: "11vw", height: "11vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.2 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5vw" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#F5F5F0" }} />
          Google PM Certificate
        </div>
        <div style={{ fontSize: "1vw", color: "#888888" }}>2026</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 1, textAlign: "center", gap: "3vh" }}>
        <div style={{ display: "flex", gap: "2vw", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#E8878C" }} />
          <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#7B9FCC" }} />
          <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#7BC8A4" }} />
        </div>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "6vw", fontWeight: 700, margin: 0, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#F5F5F0" }}>
          You Are Ready.
        </h1>
        <p style={{ fontSize: "2vw", color: "#888888", margin: 0, maxWidth: "50vw", lineHeight: 1.5 }}>
          Google Project Management Certificate — Complete
        </p>
        <div style={{ marginTop: "3vh", display: "flex", gap: "3vw" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "3vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C", margin: 0 }}>60</p>
            <p style={{ fontSize: "1.2vw", color: "#666666", margin: "0.5vh 0 0 0" }}>Slides Covered</p>
          </div>
          <div style={{ width: "1px", backgroundColor: "#333333", margin: "0 2vw" }} />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "3vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7B9FCC", margin: 0 }}>5</p>
            <p style={{ fontSize: "1.2vw", color: "#666666", margin: "0.5vh 0 0 0" }}>Major Sections</p>
          </div>
          <div style={{ width: "1px", backgroundColor: "#333333", margin: "0 2vw" }} />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "3vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#7BC8A4", margin: 0 }}>∞</p>
            <p style={{ fontSize: "1.2vw", color: "#666666", margin: "0.5vh 0 0 0" }}>Projects to Manage</p>
          </div>
        </div>
        <p style={{ fontSize: "1.4vw", color: "#555555", margin: "3vh 0 0 0", fontStyle: "italic" }}>
          "The successful project manager is one who makes it look easy."
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#555555", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>60</span><span style={{ width: "2vw", height: "1px", backgroundColor: "#555555" }} /><span>The End</span>
        </div>
        <div style={{ padding: "0.8vw 1.5vw", backgroundColor: "#2E2E2E", borderRadius: "1vw", fontSize: "1vw", fontWeight: 500, color: "#F5F5F0" }}>Study Guide</div>
      </div>
    </div>
  );
}
