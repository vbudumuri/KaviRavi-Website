import React, { Component } from 'react';


export default class CategoryNav extends Component {

  setCategory(newCategory) {
    this.props.setCategory(newCategory);
  }

  render() {
    
    return(
      <section className='category-nav'>
        <h2>Portfolio</h2>
        <div className='row'>
          <div className="col-xs-2 off-xs-2">
            <a href="#" onClick={() => this.setCategory('all')}>All</a>
            <div
              className='categoryIndicator'
              style={{backgroundColor: '#FFB7C9', visibility: (this.props.currentCategory === 'all' ? 'visible' : 'hidden')}}>
            </div>
          </div>
          <div className="col-xs-2">
            <a href="#" onClick={() => this.setCategory('digital')}>Digital</a>
            <div
              className='categoryIndicator'
              style={{backgroundColor: '#3BE2CA', visibility: (this.props.currentCategory === 'digital' ? 'visible' : 'hidden')}}>
            </div>
          </div>
          <div className="col-xs-2">
            <a href="#" onClick={() => this.setCategory('print')}>Print</a>
            <div
              className='categoryIndicator'
              style={{backgroundColor: '#B8A3D3', visibility: (this.props.currentCategory === 'print' ? 'visible' : 'hidden')}}>
            </div>
          </div>
          <div className="col-xs-2">
            <a href="#" onClick={() => this.setCategory('misc')}>Misc</a>
            <div
              className='categoryIndicator'
              style={{backgroundColor: '#FFE9AC', visibility: (this.props.currentCategory === 'misc' ? 'visible' : 'hidden')}}>
            </div>
          </div>
        </div>
        <div className="liner"></div>
      </section>
    );
  }
}
