import React, { Component } from 'react';


export default class Thumb extends Component {
  render() {
    const props = this.props;
    return(
      <div className='thumb-wrapper col-xs-12 col-sm-6 col-lg-4'>
        <div className='thumb-inner' style={{ backgroundImage: `url(client/images${props.poster})` }}>
          <h4>
            {props.title}
          </h4>
        </div>
      </div>
    );
  }
}
