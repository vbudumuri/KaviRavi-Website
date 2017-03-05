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
      category: 'print',
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
        <section>
          <Hero>
            <img src={`client/images/${this.renderLogo()}.svg`} className='logo' />
            <Nav isOpen={ this.state.menuOpen } onOpen={ this.onOpen.bind(this) }/>
          </Hero>
        </section>
        <section style={{ marginBottom: 20 }}>
          <CategoryNav setCategory={ (evt) => this.filterContent(evt) } currentCategory={ this.state.category }/>
        </section>
        <section className='row'>
          { Object.keys(myData).map((item, idx) => {
              if(myData[item].category === this.state.category || this.state.category === 'all') {
                return (
                  <Thumb key={ idx } { ...myData[item] } />
                );
              }
            }) }
        </section>
      </div>
    );
  }
}
