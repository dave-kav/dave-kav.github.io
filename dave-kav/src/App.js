import "./App.css";
import { faBook, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import IconLink from "./IconLink";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="jumbotron-wrapper">
        <div className="container-fluid jumbotron">
          <h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>David Kavanagh</p>
              <img
                src="./profile.jpeg"
                alt="Profile"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  marginLeft: "20px",
                }}
              />
            </div>
            <hr style={{ borderTop: "1px dashed #8c8b8b", width: "100%" }} />
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h3>
              Senior Backend Engineer @{" "}
              <a className="App-link" href="https://www.apata.com">
                Apata
              </a>
            </h3>
          </div>
        </div>
        </div>
        <div className="container-fluid minitron">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ borderRight: "1px solid #ddd", padding: "0 20px" }}>
                <IconLink
                  url="mailto:dave.kavanagh@gmail.com"
                  icon={faEnvelopeSquare}
                  text="Email"
                  className="App-link"
                />
              </div>
              <div style={{ borderRight: "1px solid #ddd", padding: "0 20px" }}>
                <IconLink
                  url="./CV_DK.pdf"
                  icon={faBook}
                  text="Resumé"
                  className="App-link"
                />
              </div>
              <div style={{ borderRight: "1px solid #ddd", padding: "0 20px" }}>
                <IconLink
                  url="https://github.com/dave-kav"
                  icon={faGithubSquare}
                  text="GitHub"
                  className="App-link"
                />
              </div>
              <div style={{ padding: "0 20px" }}>
                <IconLink
                  url="https://www.linkedin.com/in/dave-kavanagh/"
                  icon={faLinkedin}
                  text="LinkedIn"
                  className="App-link"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
