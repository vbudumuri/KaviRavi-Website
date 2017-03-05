import React, { Component } from 'react';


export default class Thumb extends Component {
  render() {
    const props = this.props;
    return(
      <div className='thumb-wrapper col-xs-12 col-sm-6 col-lg-4' style={{ backgroundImage: `url(client/images${props.poster})`, height: props.height }}>
        <h4>
          {props.title}
        </h4>
      </div>
    );
  }
}
