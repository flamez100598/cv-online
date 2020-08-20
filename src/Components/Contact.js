import React, { Component } from 'react';
import FormSendMail from './FormSendMail';
import { withTranslation } from 'react-multi-lang'
import type { T } from 'react-multi-lang';

type Props = {
   t: T
 }
class Contact extends Component {
  render() {
      const { t } = this.props;
    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
      var address = this.props.data.address.address;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>{t('FOOTER.GET_IN_TOUCH')}</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

            <FormSendMail />

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>{t('FOOTER.ADDRESS_AND_PHONE')}</h4>
					   <p className="address">
						   {address}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>< br/>
                     <b><span>{email}</span></b>
					   </p>
				   </div>

              
            </aside>
      </div>
   </section>
    );
  }
}

export default withTranslation(Contact);
