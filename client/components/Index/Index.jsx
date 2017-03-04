import React, { Component } from 'react';

class IndexComponent extends Component {
  render() {
    
    return (
      <section>
        <ul className="index-list">
          {this.props.items.map((item, index) => {
            return (<li key={index}>item {item}</li>);
          })}
        </ul>
      </section>
    );
  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
