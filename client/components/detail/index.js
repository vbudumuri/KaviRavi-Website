import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hero from '../hero';
import Nav from '../nav';
import myData from '../../../config/data.json';
import { Link, browserHistory } from 'react-router';
import ScrollToTop from 'react-scroll-up';
import Parser from 'html-react-parser';
import { StickyContainer, Sticky } from 'react-sticky';

export default class Detail extends Component {
  constructor(props, ...args) {
    super(props, ...args);

      this.state = {
        menuOpen: false,
        platform: 'mobile',
        filteredList: Object.keys(myData).filter(item => {
          if(myData[item].category === myData[this.props.params.item].category || this.props.params.category === 'all') {
            return myData[item];
          }
        }),
        currentIndex: 0
      }
  }

  componentWillMount() {
    this.setState({
      currentIndex: this.state.filteredList.indexOf(this.props.params.item)
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

  renderNextLink() {
    if(this.state.currentIndex+1 >= this.state.filteredList.length) {
      return(
        <div className='col-xs-4' style={{ display: 'inline-block' }}>
          <span></span>
        </div>
      );
    }
    return(
      <div className='col-xs-4' style={{ display: 'inline-block' }}>
        <span className='next' ref={(next) => { this.nextLinkRef = next; }} onClick={() => this.nextLink()} style={{ marginTop: 4, verticalAlign: 'super' }}>next</span>
        <span className='entypo-right-open-big' ref={(next) => { this.nextLinkArrow = next; }} style={{ fontSize: 32, marginLeft: 10 }}></span>
      </div>
    );
  }

  nextLink() {
    const nextIndex = this.state.currentIndex+1;
    if(nextIndex < this.state.filteredList.length) {
      const nextId = this.state.filteredList[this.state.currentIndex+1];
      this.setState({
        currentIndex: nextIndex
      });
      browserHistory.push(`/detail/${this.props.params.category}/${nextId}`)
    }
  }

  renderPrevLink() {
    if(this.state.currentIndex === 0) {
      return(
        <div className='col-xs-4' style={{ display: 'inline-block' }}>
          <span></span>
        </div>
      );
    }
    return(
      <div className='col-xs-4' style={{ display: 'inline-block' }}>
        <span className='entypo-left-open-big' ref={(prev) => { this.prevLinkArrow = prev; }} style={{ fontSize: 32, marginRight: 10 }}></span>
        <span className='prev' ref={(prev) => { this.prevLinkRef = prev; }} onClick={() => this.prevLink()} style={{ marginTop: 4, verticalAlign: 'super' }}>prev</span>
      </div>
    );
  }

  prevLink() {
    const prevIndex = this.state.currentIndex-1;
    if(prevIndex >= 0) {
      const prevId = this.state.filteredList[this.state.currentIndex-1];
      this.setState({
        currentIndex: prevIndex
      });
      browserHistory.push(`/detail/${this.props.params.category}/${prevId}`)
    }
  }

  setCategory(cat) {
    browserHistory.push(`/?category=${cat}`);
  }

  componentDidMount() {
    if(myData[this.props.params.item].hasLaptop) {
      const node = ReactDOM.findDOMNode(this.laptopRef);
      setTimeout(() => {node.classList.toggle('scrolling')}, 3000);
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
    const item = this.props.params.item;
    const _marg = item === 'leafage' ? 0 : 30;

    return(
      <section>
        <ScrollToTop showUnder={ 500 } style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          cursor: 'pointer',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'linear',
          transitionDelay: '0s'
          }}>
          <span className='entypo-up-open-big' style={{ fontSize: 32, marginRight: 10 }}></span>
        </ScrollToTop>
        <Hero className='detail-hero'>
          <Link to='/'>
            <img src={`../../client/images/${this.renderLogo()}.svg`} className='logo' />
          </Link>
          <Nav isOpen={ this.state.menuOpen } onOpen={ this.onOpen.bind(this) }/>
        </Hero>
        <section className='row top-of-page' style={{marginLeft: 20}}>
          <div>
            { /*<h4 className='breadcrumbs'>
              <Link to='/' style={{color: '#FFB7C9', textDecoration: 'none'}}>Portfolio</Link> / <a onClick={ () => this.setCategory(myData[item].category) } style={{color: '#FFB7C9', textDecoration: 'none', textTransform: 'capitalize', cursor: 'pointer'}}>{myData[item].category}</a> / {myData[item].title}
            </h4> */ }
          </div>
        </section>
        <div className='container'>
        <section className='row'>
          <div className="col-xs-12 col-sm-7">
            { myData[item].hasLaptop && <div
              ref={ (r) => { this.laptopRef = r } }
              className='laptop'
              style={{ marginBottom: 10, backgroundImage: `url('../../client/images/${myData[item].backgroundImage}')` }}
              >
              <img src={`../../client/images/2017_detail_laptop.png`} style={{maxWidth: '100%'}} />
            </div> }
              {
                myData[item].images.map((image, idx) => {
                  return (
                    <div key={idx} style={{marginBottom: _marg}}>
                      <img src={`../../client/images/${image}`} style={{maxWidth: '100%'}}/>
                      {
                        myData[item].captions[idx] && <p>{ myData[item].captions[idx] }</p>
                      }
                    </div>
                  );
                })
              }
          </div>
          <div className="col-xs-12 col-sm-5" style={{padding: '0 1em'}}>
            <div id='parappa'>
              <div>
                <h3 style={{ marginTop: 0 }}>{myData[item].title}</h3>
                <span>
                    { Parser( myData[item].text.body ) }
                </span>
                <h5>
                  Category:
                </h5>
                <h6 style={{ textTransform: 'capitalize' }}>{myData[item].category}</h6>
                <h5>
                  Date:
                </h5>
                <h6>
                  { myData[item].text.date }
                </h6>
              </div>
            </div>
            <div id='bottom-measure'></div>
          </div>
        </section>
        </div>
        <section className='detail-footer row'>
          { this.renderPrevLink() }
          <div className='col-xs-4'>
          </div>
          { this.renderNextLink() }
        </section>
      </section>
    );
  }
}
