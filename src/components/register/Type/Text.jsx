function Text() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter your full name here"
          className="bg-transparent"
          style={{
            width: "100%",
            outline: "none",
            color: "white",
          }}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.event
            }
          }}
        ></input>
      </div>
    );
  }

  export default Text;