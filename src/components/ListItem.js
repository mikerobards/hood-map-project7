import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    return (<li className="list-group-item"
    onClick={() => this.props.listItemClick(this.props)}>
      {this.props.name}
    </li>);
  }
}
