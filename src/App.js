import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <nav>
            <img src="./assets/logo-final.png" alt="" className="logo" />
            <div className="header-min-left">
              {" "}
              <a
                href="mailto:sahil@getstellr.io"
                className="contact-button link-tagger"
              >
                sahil@getstellr.io
              </a>
              <a
                href="https://app.getstellr.io/login"
                className="header-button link-tagger"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
        <div className="main-content">
          <div className="main-content-inside">
            <h1>
              AI-Powered ELN for
              <br /> Modern Scientists
              {/* Advanced ELN for 
              Modern Scientists */}
            </h1>
            <p>
              Stellr is a digital tool for scientists to document and manage lab
              work. It modernizes the old paper notebook approach, centralizing
              data for quick search and collaboration, enhancing research
              efficiency.
            </p>
            <a href="https://app.getstellr.io/login" className="link-tagger">
              Get Started for FREE
            </a>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1691913848">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </div>
      <div className="laptop">
        <div className="laptop__screen">
          <img
            src="./assets/capture.png"
            width={1600}
            height={1000}
            alt="Screen"
          />
        </div>
        <div className="laptop__bottom">
          <div className="laptop__under" />
        </div>
        <div className="laptop__shadow" />
        <footer>
          <div className="footer-inside">
            <h1>
              © Stellr Tech Solutions Private Limited <br />
              Made with ❤️ by
              <span
                onClick={() => {
                  window.location.href = "https://www.futurecloud.in/";
                }}
              >
                {" "}
                Futurecloud
              </span>
            </h1>
          </div>
        </footer>
      </div>
      <div className="main-div-bottom">
        <h1>
          © Stellr Tech Solutions Private Limited <br />
          Made with ❤️ by
          <span
            onClick={() => {
              window.location.href = "https://www.futurecloud.in/";
            }}
          >
            {" "}
            Futurecloud
          </span>
        </h1>
      </div>
    </div>
  );
}

export default App;
