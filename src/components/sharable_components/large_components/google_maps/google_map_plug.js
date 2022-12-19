// import React, { useEffect } from "react";
// import GoogleMapReact from 'google-map-react';

// import './google_style.css'
// import { useDispatch, useSelector } from "react-redux";
// import { get_package_detail_view, get_package_location_pin } from "../../../../actions/packages_actions";
// import { useParams } from "react-router-dom";

// const AnyReactComponent = ({ text }) => 
//     <div>
//         <img
//             style={{width:"30px", height:"30px"}}
//             src="https://toppng.com/uploads/preview/blue-map-pin-blue-google-maps-marker-11562932235xpqssxaj3p.png"
//             alt={text}
//             />
//     </div>;

// export default function DestinationLocation(){

//     const dispatch = useDispatch()
//     const {id} = useParams()
//     useEffect(()=>{
//         dispatch(get_package_location_pin(id))
//         dispatch(get_package_detail_view(id))
//     }, [dispatch, id])

//     const package_pin = useSelector(state=>state.package_location_pin)
//     const package_detail_view = useSelector(state=>state.package_detail_view)

//   const defaultProps = {
//     center: package_pin,
//     zoom: 9
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div className="map_box">
//         <h3>
//             {package_detail_view.title} map
//         </h3>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={package_pin.lat}
//           lng={package_pin.lng}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }