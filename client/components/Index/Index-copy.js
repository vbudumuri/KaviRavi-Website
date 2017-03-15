import React, { Component } from 'react';
import Hero from '../hero';
import Nav from '../nav';
import CategoryNav from '../categoryNav';
import Thumb from '../thumb';
import myData from '../../../config/data.json';

export default class IndexComponent extends Component {
  constructor(props, ...args) {
    super(props, ...args);

    this.state = {
      menuOpen: false,
      platform: 'mobile',
      category: 'all',
      filteredContent: []
    }
  }

  filterContent(category) {
    this.setState({
      category: category
    });
  }

  onOpen(msg) {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
    if( msg && msg === 'desktop') {
      this.setState({
        platform: msg
      })
    }
  }

  renderLogo() {
    if(this.state.platform === 'desktop') {
      return 'ts_logo';
    } else if(this.state.platform === 'mobile' && this.state.menuOpen) {
      return 'ts_logo_lite';
    } else {
      return 'ts_logo';
    }
  }


  render() {
    return (
      <div>
        <section style={{ marginBottom: 120 }}>
          <Hero className='detail-hero'>
            <img src={`client/images/${this.renderLogo()}.svg`} className='logo' />
            <Nav isOpen={ this.state.menuOpen } onOpen={ this.onOpen.bind(this) }/>
          </Hero>
        </section>
        <section style={{ marginBottom: 20 }}>
          <CategoryNav setCategory={ (evt) => this.filterContent(evt) } currentCategory={ this.state.category }/>
        </section>
        <section className='container'>
          <div className='row'>
            { Object.keys(myData).map((item, idx) => {
                if(~myData[item].category.indexOf(this.state.category) || this.state.category === 'all') {
                  return (
                    <Thumb key={ idx } counter={ idx+1 } { ...myData[item] } detail={ item } />
                  );
                }
              }) }
          </div>
        </section>
        <div className='bottom-section' id='about'>
          <section className='container'>
            <div className='row'>
              <div className='col-xs-12 col-sm-12 col-lg-4'>
                <h3>About Me</h3>
                <p>
                  With over 10 years of experience, I have designed a great many things. Snowboards, hang tags, textile-patterns, websites, you name it, I have probably designed it at some point in my career.
                </p>
                <p>
                  My current focus is on creating functional and aesthetically beautiful digital experiences.
                </p>
                <div>
                  <p>Wanna get ahold of me?</p>
                  <a href={"mailto:info@tiffanysmithdesign.com?subject=Request for contact"} style={{display: 'inline-block', marginTop: 10, fontSize: 16, padding: ' 14px 20px', borderRadius: 3, border: 'none', color: '#fff', backgroundColor: '#FFB7C9', fontFamily: 'Quicksand', textDecoration: 'none'}}>Email me</a>
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-lg-4'>
                <h3>Pixel-Pushing</h3>
                  <ul>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Sketch</li>
                    <li>HTML/CSS</li>
                    <li>Digital</li>
                    <li>Print</li>
                    <li>Office</li>
                  </ul>
              </div>
              <div className='col-xs-12 col-sm-6 col-lg-4'>
                <h3>Biz-ness</h3>
                  <ul>
                    <li>10+ years of experience working for in-house brand teams.</li>
                    <li>Ability to work alone and with groups.</li>
                    <li>Honest and clear communication.</li>
                    <li>Strong organizational (love those spreadsheets!) and communication skills.</li>
                    <li>The occasional well placed joke, for levities sake.</li>
                    <li>Strong customer centered design.</li>
                    <li>Working with stakeholders to achieve business goals.</li>
                  </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
