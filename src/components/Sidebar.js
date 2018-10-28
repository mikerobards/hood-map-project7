import React, { Component } from 'react';
import VenueList from './VenueList';

export default class Sidebar extends Component {

  render() {
    return (<div>
      <form className="form-inline mt-4 mb-4">
        <i className="fa fa-search" aria-hidden="true"></i>
          <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search Venues" aria-label="Search" />
      </form>
      <VenueList {...this.props} />
    </div>);
  }
}
