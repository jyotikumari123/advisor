import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import Rating from '@material-ui/lab'
import LocationOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'

import useStyles from './styles';
const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');    

    return (
       
        <MapContainer center={[20.5937, 78.9629]} zoom={13} margin={[50,50,50,50]} options={''} onChange={''} onchildClick={''}>
        {/* OPEN STREEN MAPS TILES */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=IsPLOno9smuErX5FulT8"
        />
      </MapContainer>
      
    );
}
export default Map;