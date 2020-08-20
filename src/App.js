import React from 'react'


import ReactGA from 'react-ga';
import $ from 'jquery';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
// Do this two lines only when setting up the application
import {  withTranslation, setLanguage, getLanguage } from 'react-multi-lang'

import type { T } from 'react-multi-lang';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }
  changeLanguage(language) {
    const setLg = () => setLanguage(language);
    $.ajax({
      url: `/translations/${language}.json`,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
        setLg();
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }
  componentDidMount() {
    this.getResumeData();
  }
  render() {
    const { t } = this.props
    return (
      <div className="App">

        <Header data={this.state.resumeData.main} />
        <ul className="selectLanguages">
          <li><span className={getLanguage() === 'jp' ? 'btn-tranfer button active-language' : 'btn-tranfer button'} onClick={() => this.changeLanguage('jp')}>JP</span></li>
          <li><span className={getLanguage() === 'en' ? 'btn-tranfer button active-language' : 'btn-tranfer button'} onClick={() => this.changeLanguage('en')}>EN</span></li>
          <li><span className={getLanguage() === 'vn' ? 'btn-tranfer button active-language' : 'btn-tranfer button'} onClick={() => this.changeLanguage('vn')}>VN</span></li>
        </ul>
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    )
  }
}
// export default App;
export default withTranslation(App);

