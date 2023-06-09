import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const MapComponent = () => {
  const position = [8.8796312, 7.2272022]; // Your location coordinates

  return (
    <MapContainer style={{height:'400px', width:'400px'}} center={position} zoom={13} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>Kuje, Abuja.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
