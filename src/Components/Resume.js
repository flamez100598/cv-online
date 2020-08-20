import React, { Component } from 'react';
import { withTranslation } from 'react-multi-lang'

class Resume extends Component {
  render() {
    const { t } = this.props;
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{t('BODY.Graduated')} {education.graduated}</em></p>
          <p>{education.description}</p>
          <span>
            <b>{education.achievements.length > 0 ? 'Achievements' : ''}</b>
            <br />{education.achievements.map((achievement, idx) => (<p key={idx}><b>{t('BODY.Year')}: {achievement.year} {achievement.title} </b></p>))}
          </span>
        </div>
      })
      var work = this.props.data.work.map(function (work) {
        return (<div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>
            {work.description.map(des => (<p>{des}</p>))}
          </p>
        </div>)
      })
      var skills = this.props.data.skills.map(function (skill) {

        return (
          <div class="columns feature-item">
            <img class="skill" alt="Git" src={skill.img} />
            <h5>{skill.name}</h5>
            <p>{skill.description}</p>
          </div>
        )
      })
      var skillsPercent = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
      var languageDisplay = this.props.data.languages.map(language =>
        (
          <>
            <div className="three columns header-col" key={language.name}>
              <b><span style={{ color: 'black', fontSize: 24}}>{t(`BODY.${language.title}`)}</span></b>
            </div>
            <div className="nine columns main-col">
              <div className="bars">
                <ul className="bgrid-quarters s-bgrid-thirds cf">
                  {language.skills.map(skill => {
                    var className = 'bar-expand bar-expand-language ' + skill.name.toLowerCase();
                    return (
                      <li key={skill.name}><span style={{ width: skill.level }} className={className}></span><em>{t(`BODY.${skill.name}`)}</em></li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </>
        )
      )
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>{t('BODY.EDUCATION')}</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>
        {/* language */}
        <div className="row language">
          <div className="three columns header-col">
            <h1><span>{t('BODY.LANGUAGE')}</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {languageDisplay}
              </div>
            </div>
          </div>
        </div>
        <div className="row work">

          <div className="three columns header-col">
            <h1><span>{t('BODY.WORK')}</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}

          </div>
        </div>



        <div className="row skill">


          <div className="three columns header-col">
            <h1><span>{t('BODY.SKILLS')}</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>{skillmessage}
            </p>
            <div className="bars">
              <ul className="skills">
                {skillsPercent}
              </ul>
            </div>

          </div>
          <div className="bars">
            <ul className="bgrid-quarters s-bgrid-thirds cf">
              {skills}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslation(Resume);
