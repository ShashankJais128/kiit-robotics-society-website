function Text() {
  return (
    <div>
      <text
        className="font-poppins"
        style={{
          color: "rgba(255, 183, 66, 1)",
          fontStyle: "Bold",
          fontWeight: "700",
          fontSize: "50px",
          lineHeight: "50px",
          alignSelf: "Left",
          verticalAlign: "Top",
          marginTop: "-50px",
        }}
      >
        KIIT<br></br> Robotics<br></br> Society
      </text>
      <br></br>
      <text
        className="font-lobster"
        style={{
          color: "#D4D4D4",
          fontStyle: "italic",
          fontWeight: "400",
          fontSize: "23px",
          lineHeight: "32px",
        }}
      >
        Ideas💡that Enlighten
      </text>
    </div>
  );
}

export default Text;
