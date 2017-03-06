import React, { Component } from 'react';

export default class Hero extends Component {
  
  render() {
    return (
      <section className={`hero ${this.props.className}`}>
        { this.props.children }
      </section>
    );
  }
}
