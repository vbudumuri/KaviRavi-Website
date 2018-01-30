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
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
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
    if (this.props.location.query.category) {
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
    if (msg && msg === 'desktop') {
      this.setState({
        platform: msg
      })
    }
  }

  renderLogo() {
    if (this.state.platform === 'desktop') {
      return 'ts_logo';
    } else if (this.state.platform === 'mobile' && this.state.menuOpen) {
      return 'ts_logo_lite';
    } else {
      return 'ts_logo';
    }
  }


  render() {
    const thumbnails = Object.keys(myData).map((item, idx) => {
      if (~myData[item].category.indexOf(this.state.category) || this.state.category === 'all') {
        return (
          <Thumb navCategory={this.state.category} key={idx} counter={idx + 1} { ...myData[item]} detail={item} />
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
                <Nav onOpen={this.onOpen.bind(this)} />
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
                <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    fontSize: '20px',
                    fontFamily: 'cursive',
                    textAlign: 'justify'
                  }}>{DummyText()}</div>
                  <img src={'client/images/dividingLoveLine.png'} className="image-style" />
                </div>
              </div>
            </div>
          </section>
        </div>




        <div className='bottom-section' id=''>
          <span className="anchor" id="journey"></span>
          <section className='container'>
            <div className='row' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 >Our Journey</h3>
              <div className="card" style={{ backgroundColor: 'turquoise' }}>
                <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
                  <VerticalTimeline>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="Oct 2014"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<img src={'client/images/firstmet.jpg'} style={{ maxHeight: '100%', maxWidth: '100%' }} />}
                      position={'right'}
                    >
                      <div>
                        <h3 className="vertical-timeline-element-title">First Met</h3>
                        <h4 className="vertical-timeline-element-subtitle">A Mountain</h4>
                        <img src={'client/images/timeline/a_mountain.jpg'} className="journeyImage" />
                      </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="Jan 2015"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<img src={'client/images/happynewyear.png'} style={{ maxHeight: '100%', maxWidth: '100%' }} />}
                      position={'left'}
                    >
                      <h3 className="vertical-timeline-element-title">First new year together</h3>
                      <h4 className="vertical-timeline-element-subtitle">where it all started!!</h4>
                      <img src={'client/images/timeline/newyear2015.jpg'} className="journeyImage" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="Jul 2015"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<img src={'client/images/proposal.jpg'} style={{ maxHeight: '100%', maxWidth: '100%' }} />}
                      position={'right'}
                    >
                      <h3 className="vertical-timeline-element-title">The Proposal</h3>
                      <h4 className="vertical-timeline-element-subtitle">Griffith Observatory</h4>
                      <img src={'client/images/timeline/griffith.jpg'} className="journeyImage" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="May 2016"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<img src={'client/images/grad.jpg'} style={{ maxHeight: '100%', maxWidth: '100%' }} />}
                      position={'left'}
                    >
                      <h3 className="vertical-timeline-element-title">Graduated together</h3>
                      <h4 className="vertical-timeline-element-subtitle">Arizona State University</h4>
                      <img src={'client/images/timeline/graduated.jpg'} className="journeyImage" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="May 2016"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<img src={'client/images/date.png'} style={{ maxHeight: '100%', maxWidth: '100%' }} />}
                      position={'right'}
                    >
                      <h3 className="vertical-timeline-element-title">Date and Dinners</h3>
                      <h4 className="vertical-timeline-element-subtitle">Different Pointe of View</h4>
                      <img src={'client/images/timeline/date.jpg'} className="journeyImage" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="Jan 2017"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<img src={'client/images/family.jpg'} style={{ maxHeight: '100%', maxWidth: '100%' }} />}
                      position={'left'}
                    >
                      <h3 className="vertical-timeline-element-title">All Happies</h3>
                      <h4 className="vertical-timeline-element-subtitle">Family accepted</h4>
                      <img src={'client/images/raja40.jpg'} className="journeyImage" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="Nov 2017"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<img src={'client/images/engaged.jpg'} style={{ maxHeight: '100%', maxWidth: '100%' }} />}
                      position={'right'}
                    >
                      <h3 className="vertical-timeline-element-title">Finally Engaged</h3>
                      <h4 className="vertical-timeline-element-subtitle">Zion National Park, Utah</h4>
                      <img src={'client/images/timeline/engaged.jpg'} style={{ maxHeight: '100%', maxWidth: '100%' }} />
                    </VerticalTimelineElement>
                  </VerticalTimeline>
                  <img src={'client/images/marriageIndian.png'} style={{ maxHeight: '300px', maxWidth: '300px' }} />
                  <img src={'client/images/dividingLoveLine.png'} className="image-style" />
                </div>
              </div>
            </div>
          </section>
        </div>




        <div className='bottom-section' id='photos' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <section className='container'>
            <div className='row' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <h3>Pictures</h3>
            </div>
          </section>
          <div className='card'>
            <div className='photo-slider'>
              <Fade
                images={images}
                duration="5000"
                transitionDuration="1000"
              />
              <div className='divider-wrapper'>
                <img src={'client/images/dividingLoveLine.png'} className="image-style" />
              </div>
            </div>

          </div>
        </div>



        <div className='bottom-section' id='bigday'>
          <section className='container'>
            <div className='row' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <h3>The Big Day</h3>
              <div className="card">
                <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src={'client/images/weddingcard.png'} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                  <img src={'client/images/dividingLoveLine.png'} className="image-style" />
                </div>
              </div>
            </div>
          </section>
        </div>



        <div className='bottom-section' id='comments'>
          <section className='container'>
            <div className='row' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <h3>Comments</h3>
            </div>
          </section>
        </div>

        <center>
          <div className="fb-comments" data-href="http://www.kaviravi.me" data-numposts="5"></div>
        </center>


      </div>
    );
  }
}
