import React, { Component } from 'react';
import { withTranslation } from 'react-multi-lang'
import PrintButton from './PrintButton';
import type { T } from 'react-multi-lang';

type Props = {
   t: T
 }
 
class Header extends Component {
  render() {
   const { t } = this.props;
    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">{t('header.home')}</a></li>
            <li><a className="smoothscroll" href="#about">{t('header.About')}</a></li>
	         <li><a className="smoothscroll" href="#resume">{t('header.Resume')}</a></li>
            <li><a className="smoothscroll" href="#portfolio">{t('header.Works')}</a></li>
            <li><a className="smoothscroll" href="#testimonials">{t('header.Testimonials')}</a></li>
            <li><a className="smoothscroll" href="#contact">{t('header.Contact')}</a></li>
           
         </ul>
      </nav>
      <div className="row banner">
         
         <div className="banner-text">
         <PrintButton id={"root"} label={t('introduce.view_pdf')}></PrintButton>
            <h1 className="responsive-headline">{t("header.im")} {name}.</h1>
            <h3>{t('introduce.job')} <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default withTranslation(Header);