import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
//import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

class App extends Component
{

  constructor(props)
  {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId)
  {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : ``;
    this.loadResumeFromPath(resumePath);
    console.log(resumePath, "resumepath")
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId)
  {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    var oppositeElem = document.getElementById(oppositeLangIconId);
    var pickedElem = document.getElementById(pickedLangIconId);
    if (oppositeElem) {
      oppositeElem.removeAttribute("filter", "brightness(40%)");
    }
    if (pickedElem) {
      pickedElem.setAttribute("filter", "brightness(40%)");
    }
  }

  componentDidMount()
  {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path)
  {
    console.log(path, "path")
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data)
      {
        console.log(data, "data")
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err)
      {
        alert(err);
      },
    });
  }

  loadSharedData()
  {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data)
      {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err)
      {
        alert(err);
      },
    });
  }

  render() {
  const { sharedData, resumeData } = this.state;

  // wait until data is present
  if (!sharedData.basic_info || !resumeData) {
    return <div style={{padding: 24}}>Loading…</div>;
  }

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
      <Experience
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Footer sharedBasicInfo={sharedData.basic_info} />
      <Contact />
    </div>
  );
}

}

export default App;
