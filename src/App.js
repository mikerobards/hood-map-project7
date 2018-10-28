import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import foursquareAPI from './API';
import Sidebar from './components/Sidebar';


class App extends Component {
  componentDidMount(){
    foursquareAPI.search({
      near: "Atlanta, GA",
      query: "pizza",
      limit: 10
    }).then(results => console.log(results));
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
