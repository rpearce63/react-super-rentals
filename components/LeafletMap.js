import React, { Component } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import axios from "axios";

const accessToken =
  "pk.eyJ1IjoicnBlYXJjZTYzIiwiYSI6ImNqcTAya3pjYjBpYzc0M254NHZudHR3bnYifQ.Dpjr-sa9S0LFl24O_elqbQ";
const tilesUrl = `https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${accessToken}`;
const attributionText =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const mapCenter = [39.9528, -75.1638];
const zoomLevel = 13;
export default class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: [39.9528, -75.1638]
    };
  }
  async componentDidMount() {
    const encodedQuery = encodeURIComponent(this.props.location);
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedQuery}.json?access_token=${accessToken}`
    );
    if (response.data.features.length > 0) {
      this.setState({
        coords: [
          response.data.features[0].center[1],
          response.data.features[0].center[0]
        ]
      });
    }
  }
  render() {
    return (
      <div id={`map-${this.props.id}`}>
        <Map center={this.state.coords} zoom={zoomLevel}>
          <TileLayer attribution={attributionText} url={tilesUrl} />
          <Marker position={this.state.coords} />
        </Map>
      </div>
    );
  }
}
