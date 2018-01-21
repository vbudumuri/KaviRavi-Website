import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
const scrollIntoView = require('scroll-into-view');

export default class Nav extends Component {
  constructor(props, ...args) {
    super(props, ...args);
  }

  componentDidMount() {
    if(screen.width > 768) {
      this.props.onOpen('desktop');
    }
  }


  render() {

    return (
      <div className="nav-outer">
        <img src={'client/images/elephantReverse.jpg'} style={{ marginTop: '-30px', width: '100px', marginBottom: '-40px' }} />
        <img src={'client/images/elephant.jpg'} style={{ marginTop: '-30px', width: '100px', marginBottom: '-40px', float: 'right' }} />
        <section style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <div>
            <Link to="/#about">About Us</Link>
          </div>
          <div>
            <Link to="/#journey">Journey</Link>
          </div>
          <div>
            <Link to="/#photos">Photos</Link>
          </div>
          <div>
            <Link to="/#bigday">The Big Day</Link>
          </div>
          <div>
            <Link to="/#comments">Comments</Link>
          </div>
        </section>
      </div>
    );
  }
}
