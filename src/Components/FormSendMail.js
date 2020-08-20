import React from 'react';
import { withTranslation } from 'react-multi-lang'
import type { T } from 'react-multi-lang';

type Props = {
   t: T
 }
 class FormSendMail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            feedback: '', 
        name: 'Phạm Quốc Dũng', 
        fromName : '',
        fromEmail: '',
        subject : '',
        email: 'mrvvip10@gmail.com' };
        this.handleChangeContactName = this.handleChangeContactName.bind(this);
        this.handleChangecontactEmail = this.handleChangecontactEmail.bind(this);
        this.handleChangeSubject = this.handleChangeSubject.bind(this);
        this.handleChangeFeedback = this.handleChangeFeedback.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { t } = this.props;
        return (
            <form>
                <fieldset>
                    <div>
                        <label htmlFor="contactName">{t('FOOTER.FORM.NAME')} <span className="required">*</span></label>
                        <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChangeContactName} />
                    </div>

                    <div>
                        <label htmlFor="contactEmail">{t('FOOTER.FORM.EMAIL')} <span className="required">*</span></label>
                        <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChangecontactEmail} />
                    </div>

                    <div>
                        <label htmlFor="contactSubject">{t('FOOTER.FORM.SUBJECT')}</label>
                        <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChangeSubject} />
                    </div>

                    <div>
                        <label htmlFor="contactMessage">{t('FOOTER.FORM.MESSAGE')} <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={this.handleChangeFeedback}></textarea>
                    </div>

                    <div>
                        <button type="button" className="submit" onClick={this.handleSubmit} >{t('FOOTER.FORM.SUBMIT')}</button>
                        <span id="image-loader">
                            <img alt="" src="images/loader.gif" />
                        </span>
                    </div>
                </fieldset>
            </form>
        )
    }
    handleChangeFeedback(event) {
        this.setState({ feedback: event.target.value })
    }
    handleChangeContactName(event) {
        this.setState({ fromName: event.target.value })
    }
    handleChangecontactEmail(event) {
        this.setState({ fromEmail: event.target.value })
    }
    handleChangeSubject(event) {
        this.setState({ subject: event.target.value })
    }
    handleSubmit(event) {
        const templateId = 'template_EcEwSuv4';
        this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.fromName, to_name: this.state.name, from_email :this.state.fromEmail,subject: this.state.subject,  reply_to: this.state.email })
    }

    sendFeedback(templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!');
            alert("Send email success. I will reply soon! Thank you !")
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
}
export default withTranslation(FormSendMail);