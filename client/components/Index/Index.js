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
import { Slide } from 'react-slideshow-image';

const data = [
  {
    id         : "slide1",
    imagePath  : "client/images/raja40.jpg",
    imageAlt   : "Slide 1 Image",
  },
  {
    id         : "slide2",
    imagePath  : "client/images/raja43.jpg",
    imageAlt   : "Slide 2 Image",
  },
  {
    id         : "slide3",
    imagePath  : "client/images/raja28.jpg",
    imageAlt   : "Slide 3 Image",
  },
];

const Slideshow = ({ currentSlide, togglePrev, toggleNext, toggleSlide }) => (
    <div className="slideshow">
        <div>
        <Controls
            togglePrev={togglePrev}
            toggleNext={toggleNext}
            currentSlide={currentSlide}
        />
    </div>
        <Pagination
            toggleSlide={toggleSlide}
        />
    </div>
  );

const Slides = ({ currentSlide }) => {
var slidesNodes = data.map(function (slideNode, index) {
var isActive = currentSlide === index;
  return (
    <div className={isActive ? 'slide--active slide' : 'slide'}>
      <img
          src={slideNode.imagePath}
          alt={slideNode.imageAlt}
          style={{ maxWidth: '100%', maxHeight: '100%'}}
      />
    </div>
  );
});
return (
  <div className="slides">
    {slidesNodes}
  </div>
);
}

const Controls = ({ togglePrev, toggleNext, currentSlide }) => {
  return (
    <div className="controls" style={{ display: 'flex' }}>
      <div className="toggle toggle--prev" onClick={() => togglePrev()}>Prev</div>
      <Slides
          currentSlide={currentSlide}
      />
      <div className="toggle toggle--next" onClick={() => toggleNext()}>Next</div>
    </div>
  );
}

const Pagination = ({ toggleSlide }) => {
    var paginationNodes = data.map(function (paginationNode, index) {
      return (
        <span className="pager" onClick={() => toggleSlide(paginationNode.id)}>{paginationNode.title}</span>
      );
    });
    return (
      <div className="pagination">
        {paginationNodes}
      </div>
    );
  }

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


  toggleNext() {
    var current = this.state.currentSlide;
    var next = current + 1;
    if (next > data.length - 1) {
      next = 0;
    }
    this.setState({ currentSlide: next });
  }

  togglePrev() {
    var current = this.state.currentSlide;
    var prev = current - 1;
    if (prev < 0) {
      prev = data.length - 1;
    }
    this.setState({ currentSlide: prev });
  }

  toggleSlide(id) {
    var index = data.map(function (el) {
      return (
        el.id
      );
    });
    var currentIndex = index.indexOf(id);
    this.setState({ currentSlide: currentIndex });
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
        <section style={{ marginBottom: 120 }}>
          <Hero className='detail-hero'>
            <Nav onOpen={ this.onOpen.bind(this) }/>
          </Hero>
        </section>
        <div>
            <img src={'client/images/raja40.jpg'} style={{ maxHeight: '100%', maxWidth: '100%' }} />
        </div>
        <div className='bottom-section' id='about'>
          <section className='container'>
            <div className='row' style={{ justifyContent: 'center' }}>
                <h3 >About Us</h3>
            </div>

            <div style={{ justifyContent: 'center' }}>{DummyText()}</div>
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
            <Slideshow
                currentSlide={this.state.currentSlide}
                toggleNext={this.toggleNext}
                togglePrev={this.togglePrev}
                toggleSlide={this.toggleSlide}
            />
          </section>
        </div>
        <div className='bottom-section' id='bigday'>
          <section className='container'>
            <Slide
              images={images}
              duration="5000"
              transitionDuration="1000"
            />
          </section>
        </div>
        <div className='bottom-section' id='comments'>
          <section className='container'>
            <div className='row' style={{ justifyContent: 'center' }}>
                <h3 >Comments</h3>
            </div>
          </section>
          <div style={{ justifyContent: 'center' }}>{DummyText()}</div>
        </div>
      </div>
    );
  }
}
