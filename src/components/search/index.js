import React from "react";

const Header = ({ name, numVenues }) => {
    return (
        <div className={ClassNames({ 'header': true, 'transition-animation-3': true, 'header-short': this.state.animated_classes.header, 'header-invisible': this.state.is_header_invisible })}>
  
          <div className={ClassNames({ 'header-content': true, 'header-content-short': this.state.animated_classes.content })}>
  
            <div className={ClassNames({ 'header-logo': true, 'transition-animation-3': true, 'header-logo-short': this.state.animated_classes.logo })}>
              <img src={require('../assets/images/logos/' + this.state.logo)} alt="Logo" />
            </div>
  
            <div className={ClassNames({ 'header-form': true, 'box-sizing': true })}>
  
              <div className={ClassNames({ 'header-form-texts': true, 'header-form-texts-short': this.state.animated_classes.form_texts })}>
                <div className="header-form-main-text">Lorem ipsum dolor sit</div>
                <div className="header-form-sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>
  
              <div className="header-form-inputs">
  
                <div className="header-form-input-col">
                  <input type="text" className="text-input box-shadow-black box-sizing" placeholder="I'm looking for" name="eating" value={this.state.form_data.eating} onChange={this.on_input_change.bind(this)} />
                </div>
  
                <div className="header-form-input-col">
                  <input type="text" className="text-input box-shadow-black box-sizing" placeholder="Place" name="place" value={this.state.form_data.place} onChange={this.on_input_change.bind(this)} />
                </div>
  
                <div className="header-form-input-col">
                  <button className="button box-shadow-black box-sizing" onClick={this.search_venue.bind(this)}>
                    <img src={require('../assets/images/icons/search.png')} alt="Search" />
                  </button>
                </div>
                
              </div>
  
            </div>
  
          </div>
  
        </div>
      );
    }


export default Header;