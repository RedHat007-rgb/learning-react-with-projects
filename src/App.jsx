function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "grey",
        height: "100vh",
        padding: 10,
      }}
    >
      <div style={{ marginRight: 4 }}>
        <div>
          <div>
            <Profilecard></Profilecard>
          </div>
        </div>
      </div>

      <div style={{}}>
        <div>
          <div>
            <Postcomponent></Postcomponent>
            <br />
          </div>
          <div>
            <Postcomponent></Postcomponent>
            <br />
          </div>
          <div>
            <Postcomponent></Postcomponent>
          </div>
        </div>
      </div>
    </div>
  );
}

function Postcomponent() {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: 400,
        padding: 20,
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 1,
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          src="https://pbs.twimg.com/profile_images/1599003507415166977/pRYwiTo3_normal.jpg"
          style={{ width: 60, height: 60 }}
        ></img>
        <div
          style={{
            fontsize: 12,
            marginLeft: 10,
          }}
        >
          <div>
            <b>100XDEVS</b>
          </div>
          <div>28000 followers</div>
          <div>30min</div>
        </div>
      </div>
      <br />
      <div>Whats going on today folks? happy Dussera</div>
    </div>
  );
}

function Profilecard() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: 400,
        width: 250,
        borderRadius: 20,
        padding: 10,
      }}
    >
      <div style={{ backgroundColor: "#ecf0f1", textAlign: "center" }}>
        <img
          src="https://pbs.twimg.com/profile_images/1599003507415166977/pRYwiTo3_normal.jpg"
          alt="Profile"
        />
      </div>

      <div style={{ fontSize: 15, padding: 20, textAlign: "center" }}>
        <b>Welcome Bala Reddy</b>
        <div style={{ color: "#3498db", marginTop: 5 }}>Add a Photo</div>
      </div>

      <div style={{ width: "100%", paddingLeft: 7.5 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Profile viewers</div>
          <div>8</div>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Connections</div>
          <div>354</div>
        </div>
        <div style={{ marginTop: 10 }}>
          <b>Grow Your Network</b>
        </div>
      </div>
    </div>
  );
}

export default App;
