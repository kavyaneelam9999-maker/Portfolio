import React, { Component } from "react";
import Typical from "react-typical";
import Logo from '../components/images/logo.png';
//import Switch from "react-switch";

class Header extends Component
{
  titles = [];

  constructor()
  {
    super();
    this.state = { checked: false };
    // this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  // onThemeSwitchChange(checked)
  // {
  //   this.setState({ checked });
  //   this.setTheme();
  // }

  // setTheme()
  // {
  //   var dataThemeAttribute = "data-theme";
  //   var body = document.body;
  //   var newTheme =
  //     body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
  //   body.setAttribute(dataThemeAttribute, newTheme);
  // }

  render()
  {
    if (this.props.sharedData)
    {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat();
    }

    const HeaderTitleTypeAnimation = React.memo(() =>
    {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: 'linear-gradient(135deg, #f8fafc 0%, #a8edea 100%)' }}>
        <img
          src={Logo}
          alt="Name Logo"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.18,
            zIndex: 0
          }}
        />
        <div className="row aligner" style={{ height: '100%', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="col-md-12">
            <div style={{ textAlign: 'center' }}>
              <span>
                <img
                  height="260px"
                  src={Logo}
                  alt="Name Logo"
                  style={{ borderRadius: '50%', boxShadow: '0 8px 32px 0 rgba(34, 193, 195, 0.3)', border: '6px solid #a8edea', background: 'rgba(255,255,255,0.7)', padding: '16px', marginBottom: '1.5rem' }}
                />
              </span>
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
