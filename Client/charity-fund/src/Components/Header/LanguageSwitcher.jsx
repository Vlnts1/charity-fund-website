import React from 'react';

const languages = [
    { code: 'en', name: 'English'},
    { code: 'ua', name: 'Українська'},
    { code: 'fr', name: 'Français'},
  ]
  
  const translations = {
    'en': {
      'text1': 'Choose your language:',
      'text2': 'Language'
    },
    'ua': {
      'text1': 'Виберіть мову:',
      'text2': 'Мова'
    },
    'fr': {
        'text1': 'Choisissez votre langue:',
        'text2': 'Langue'
      },

  }
  
  const getTranslation = (lang, text) => {
    return translations[lang][text];
  }
  
  class LanguageSwitcher extends React.Component {
    constructor(){
      super();
      this.state = { lang: 'en' };
      this.changeLanguageHandler = this.changeLanguageHandler.bind(this);
    }
    
    changeLanguageHandler(lang) {
      this.setState({ lang: lang });
    }
    
    render() {
      return (
        <div className="languageSwitcher">
          <p>
            {getTranslation(this.state.lang, 'text1')}
          </p>
          
          <LanguageSwitcherSelector 
            lang={this.state.lang}
            handleChangeLanguage={this.changeLanguageHandler}
          />
        </div>
      )
    }
  }
  
  class LanguageSwitcherSelector extends React.Component {
    constructor () {
      super();
      this.onChange = this.onChange.bind(this);
    }
    
    onChange (e) {
      this.props.handleChangeLanguage(e.target.value);
    }
    
    render() {
      const options = languages.map(language => {
        return <option value={language.code}>{language.name}</option>
      });
      
      return (
        <select 
          value={this.props.lang} 
          onChange={this.onChange}
        >
          {options}
        </select>
      )
    }
  }

  export default LanguageSwitcher;