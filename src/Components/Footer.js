import React, { Component } from 'react';
import { withTranslation } from 'react-multi-lang'
import type { T } from 'react-multi-lang';

type Props = {
   t: T
 }
class Footer extends Component {
  render() {
    const { t } = this.props;
    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
    <li>&copy; {t('FOOTER.COPY_RIGHT')}</li>
              <li>{t('FOOTER.DESIGN_BY')} <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default withTranslation(Footer);
