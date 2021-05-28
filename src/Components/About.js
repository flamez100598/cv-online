import React, { Component } from 'react';
import { withTranslation, } from 'react-multi-lang'
import PrintButton from './PrintButton';

 
class About extends Component {
  render() {
      const { t } = this.props;
    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var address = this.props.data.address.address;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Dung Pham Profile Pic" />
         </div>
         <div className="nine columns main-col">
        
            <h2>{t('introduce.about_me')}</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>{t('introduce.contact_details')}</h2>
                  <p className="address">
						   <span>{address}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a  className="button" style={{display: 'flex', float: 'left'}}><i className="fa fa-eye" style={{marginTop: 8}}></i>
                     <PrintButton id={"root"} label={t('introduce.view_pdf')}></PrintButton>
                     
                     </a>
                     <div className="clear-both"></div>
                  </p>
                  <p>
                     <a href="/CVPhamQuocDung.docx" className="button" ><i className="fa fa-download" ></i>
                     {t('introduce.download_resume')}
                     
                     </a>
                  </p>
               </div>
            </div>
         </div>
         
      </div>

   </section>
    );
  }
}

export default withTranslation(About);
