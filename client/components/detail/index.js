import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hero from '../hero';
import Nav from '../nav';
import myData from '../../../config/data.json';
import { Link, browserHistory } from 'react-router';

export default class Detail extends Component {
  constructor(props, ...args) {
    super(props, ...args);

    this.state = {
      menuOpen: false,
      platform: 'mobile',
      filteredList: Object.keys(myData).filter(item => {
        if(myData[item].category === myData[this.props.params.item].category) {
          return myData[item];
        }
      }),
      currentIndex: 0
    }  
  }

  componentWillMount() {
    console.log(`called willMount`);
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

  nextLink() {
    const nextIndex = this.state.currentIndex+1;
    if(nextIndex <= this.state.filteredList.length) {
      const nextId = this.state.filteredList[this.state.currentIndex+1];
      this.setState({
        currentIndex: nextIndex
      });
      browserHistory.push(`/detail/${nextId}`)
    }    
  }

  prevLink() {
    const prevIndex = this.state.currentIndex-1;
    if(prevIndex >= 0) {
      const prevId = this.state.filteredList[this.state.currentIndex-1];
      this.setState({
        currentIndex: prevIndex
      });
      browserHistory.push(`/detail/${prevId}`)
    }
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this.laptopRef);
    setTimeout(() => {node.classList.toggle('scrolling')}, 3000);
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

    return(
      <section>
        <Hero className='detail-hero'>
          <img src={`../client/images/${this.renderLogo()}.svg`} className='logo' />
          <Nav isOpen={ this.state.menuOpen } onOpen={ this.onOpen.bind(this) }/>
        </Hero>
        <section className='row top-of-page' style={{marginLeft: 20}}>
          <div>
            <h4 className='breadcrumbs'>
              <Link to='/' style={{color: '#FFB7C9', textDecoration: 'none'}}>Portfolio / {myData[item].category}</Link> / {item}
            </h4>
          </div>
        </section>
        <section className='row'>
          <div className="col-xs-12 col-sm-7">
            <div
              ref={ (r) => { this.laptopRef = r } }
              className='laptop'
              style={{ marginBottom: 10, backgroundImage: `url('../client/images/${myData[item].backgroundImage}')` }}
              >
              <img src={`../client/images/2017_detail_laptop.png`} style={{maxWidth: '100%'}} />
            </div>
              {
                myData[item].images.map((image, idx) => {
                  return (
                    <div key={idx} style={{marginBottom: 30}}>
                      <img src={`../client/images/${image}`} style={{maxWidth: '100%'}}/>
                    </div>
                  );
                })
              }
          </div>
          <div className="col-xs-12 col-sm-5">
            <h3 style={{ marginTop: 0 }}>{myData[item].title}</h3>
            <p>{ myData[item].text.body }</p>
            <h5>
              Category:
            </h5>
            <h5>{myData[item].category}</h5>
            <h5>
              Date:
            </h5>
            <h5>
              { myData[item].text.date }
            </h5>
          </div>
        </section>
        <section className='detail-footer row'>
          <div className='col-xs-4'>
            <span onClick={() => this.prevLink()}>prev</span>
          </div>
          <div className='col-xs-4'>
            <Link to='/'>all</Link>
          </div>
          <div className='col-xs-4'>
            <span onClick={() => this.nextLink()}>next</span>
          </div>
        </section>
      </section>
    );
  }
}
