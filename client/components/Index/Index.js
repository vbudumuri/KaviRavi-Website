import React, { Component } from 'react';
import autobind from 'react-autobind';
import Hero from '../hero';
import Nav from '../nav';
import CategoryNav from '../categoryNav';
import Thumb from '../thumb';
import myData from '../../../config/data.json';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import DummyText from './DummyText';
import { Fade } from 'react-slideshow-image';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

export default class IndexComponent extends Component {
  constructor(props, ...args) {
    super(props, ...args);

    autobind(this);
    this.state = {
      menuOpen: false,
      platform: 'mobile',
      category: 'all',
      filteredContent: [],
      currentSlide: 0,
      data: [],
    }
  }
  componentWillMount() {
    if(this.props.location.query.category) {
      this.filterContent(this.props.location.query.category);
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
    const thumbnails = Object.keys(myData).map((item, idx) => {
      if(~myData[item].category.indexOf(this.state.category) || this.state.category === 'all') {
        return (
          <Thumb navCategory={this.state.category} key={ idx } counter={ idx+1 } { ...myData[item] } detail={ item } />
        );
      }
    });

    const images = [
      'client/images/raja40.jpg',
      'client/images/raja43.jpg',
      'client/images/raja28.jpg'
  ];

    return (
      <div>
        <section>
         <StickyHeader
            header={
              <Hero className='detail-hero'>
                <Nav onOpen={ this.onOpen.bind(this) }/>
              </Hero>
            }
          >
              <div className='header-image'>
                <img src={'client/images/raja40.jpg'} style={{ maxHeight: '100%', maxWidth: '100%' }} />
              </div>
          </StickyHeader>
        </section>
       
        <div className='bottom-section' id='about'>
          <section className='container'>
            <div className='row' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 >About Us</h3>
                <div className="card">
                    <div className="container">
                        {DummyText()}
                    </div>
                </div>
            </div>

          </section>
        </div>
        <div className='bottom-section' id='journey'>
          <section className='container'>
            <div className='row' style={{ justifyContent: 'center' }}>
                <h3 >Our Journey</h3>
            </div>
          </section>
          <div style={{ justifyContent: 'center' }}>{DummyText()}</div>
        </div>
        <div className='bottom-section' id='photos'>
          <section className='container'>
            <div className='row' style={{ justifyContent: 'center' }}>
                <h3 >Our Pictures</h3>
            </div>
            <div style={{ justifyContent: 'center' }}>{DummyText()}</div>
          </section>
        </div>
        <div className='bottom-section' id='bigday'>
          <section className='container'>
            <div className='row' style={{ justifyContent: 'center' }}>
                <h3 >Big Day</h3>
            </div>
          </section>
          <Fade
            images={images}
            duration="5000"
            transitionDuration="1000"
          />
        </div>
        <div className='bottom-section' id='comments'>
          <section className='container'>
            <div className='row' style={{ justifyContent: 'center' }}>
                <h3 >Comments</h3>
            </div>
            <div className="fb-comments" data-href="http://localhost:3000" data-numposts="5"></div>
          </section>
          <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={''}
                position={'right'}
              >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <img src={'client/images/raja40.jpg'} style={{ maxHeight: '100%', maxWidth: '100%' }} />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={''}
                position={'left'}
              >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
              </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}
