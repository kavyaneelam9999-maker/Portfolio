import React, { Component } from "react";
import Typical from "react-typical";

class Header extends Component {
  titles = [];

  render() {
    // Safely read from props
    const basic = this.props.sharedData?.basic_info ?? this.props.sharedData ?? {};
    const name = typeof basic.name === "string" ? basic.name : "";
    const rawTitles = Array.isArray(basic.titles) ? basic.titles : [];

    // Build steps for react-typical: [text, ms, text, ms, ...]
    this.titles = rawTitles.map(t => [String(t).toUpperCase(), 1500]).flat();

    const HeaderTitleTypeAnimation = React.memo(() => (
      <Typical className="title-styles" steps={this.titles} loop={50} />
    ));

    return (
      <header
        id="home"
        style={{
          height: window.innerHeight - 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "linear-gradient(135deg, #f8fafc 0%, #a8edea 100%)"
        }}
      >
        <img
          src={'/logo.png'}
          alt="Name Logo"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.18,
            zIndex: 0
          }}
        />
        <div className="row aligner" style={{ height: "100%", width: "100%", position: "relative", zIndex: 1 }}>
          <div className="col-md-12">
            <div style={{ textAlign: "center" }}>
              <span>
                <img
                  height="260px"
                  src={'/logo.png'}
                  alt="Name Logo"
                  style={{
                    borderRadius: "50%",
                    boxShadow: "0 8px 32px 0 rgba(34, 193, 195, 0.3)",
                    border: "6px solid #a8edea",
                    background: "rgba(255,255,255,0.7)",
                    padding: "16px",
                    marginBottom: "1.5rem"
                  }}
                />
              </span>
              <br />
              {!!name && (
                <h1 className="mb-0">
                  <Typical steps={[name]} wrapper="p" />
                </h1>
              )}
              {this.titles.length > 0 && (
                <div className="title-container">
                  <HeaderTitleTypeAnimation />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
