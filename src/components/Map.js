import React from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
import { connect } from "react-redux"
import Comments from './Comments'
import Button from 'react-bootstrap/Button';

// or less ideally


Geocode.setApiKey("AIzaSyBMLTtCd0Zd6s1diqDLxHzQC7RXvXZnz_s");
Geocode.enableDebug();
class Map extends React.Component{

	constructor( props ){
		super( props );
		this.state = {
			address: '',
			city: '',
			area: '',
			state: '',
			mapPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			markerPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			}
		}
	}
	/**
	 * Get the current address from the default map position and set those values in the state
	 */
	componentDidMount() {
		Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
			response => {
				const address = response.results[0].formatted_address,
				      addressArray =  response.results[0].address_components,
				      city = this.getCity( addressArray ),
				      area = this.getArea( addressArray ),
				      state = this.getState( addressArray );

				console.log( 'city', city, area, state );

				this.setState( {
					address: ( address ) ? address : '',
					area: ( area ) ? area : '',
					city: ( city ) ? city : '',
					state: ( state ) ? state : '',
				} )
			},
			error => {
				console.error( error );
			}
		);
	};
	/**
	 * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
	 *
	 * @param nextProps
	 * @param nextState
	 * @return {boolean}
	 */
	shouldComponentUpdate( nextProps, nextState ){
		if (
			this.state.markerPosition.lat !== this.props.center.lat ||
			this.state.address !== nextState.address ||
			this.state.city !== nextState.city ||
			this.state.area !== nextState.area ||
			this.state.state !== nextState.state
		) {
			return true
		} else if ( this.props.center.lat === nextProps.center.lat ){
			return false
		}
	}
	/**
	 * Get the city and set the city input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getCity = ( addressArray ) => {
        let city = '';
        if (addressArray !== undefined) {
		for( let i = 0; i < addressArray.length; i++ ) {
			if ( addressArray[ i ].types[0] && 'administrative_area_level_2' === addressArray[ i ].types[0] ) {
				city = addressArray[ i ].long_name;
				return city;
			}
        }
    }

	};
	/**
	 * Get the area and set the area input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getArea = ( addressArray ) => {
        let area = '';
        if (addressArray !== undefined) {
		for( let i = 0; i < addressArray.length; i++ ) {
			if ( addressArray[ i ].types[0]  ) {
				for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
					if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] ) {
						area = addressArray[ i ].long_name;
						return area;
					}
				}
			}
		}}
	};
	/**
	 * Get the address and set the address input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getState = ( addressArray ) => {
        let state = '';
        if (addressArray !== undefined) {
		for( let i = 0; i < addressArray.length; i++ ) {
			for( let i = 0; i < addressArray.length; i++ ) {
				if ( addressArray[ i ].types[0] && 'administrative_area_level_1' === addressArray[ i ].types[0] ) {
					state = addressArray[ i ].long_name;
					return state;
				}
			}}
		}
	};
	/**
	 * And function for city,state and address input
	 * @param event
	 */
	onChange = ( event ) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	/**
	 * This Event triggers when the marker window is closed
	 *
	 * @param event
	 */
	onInfoWindowClose = ( event ) => {

	};

	/**
	 * When the marker is dragged you get the lat and long using the functions available from event object.
	 * Use geocode to get the address, city, area and state from the lat and lng positions.
	 * And then set those values in the state.
	 *
	 * @param event
	 */
	onMarkerDragEnd = ( event ) => {
		let newLat = event.latLng.lat(),
		  newLng = event.latLng.lng();

		Geocode.fromLatLng( newLat , newLng ).then(
			response => {
				const address = response.results[0].formatted_address,
				      addressArray =  response.results[0].address_components,
				      city = this.getCity( addressArray ),
				      area = this.getArea( addressArray ),
				      state = this.getState( addressArray );
				this.setState( {
					address: ( address ) ? address : '',
					area: ( area ) ? area : '',
					city: ( city ) ? city : '',
					state: ( state ) ? state : '',
					markerPosition: {
						lat: newLat,
						lng: newLng
					},
					mapPosition: {
						lat: newLat,
						lng: newLng
					},
				} )
			},
			error => {
				console.error(error);
			}
		);
	};

	/**
	 * When the user types an address in the search box
	 * @param place
	 */
	onPlaceSelected = ( place ) => {
        console.log( 'plc', place );
        if (place.formatted_address !== undefined) {
        const address = place.formatted_address,
      
              addressArray =  place.address_components,
              
		      city = this.getCity( addressArray ),
		      area = this.getArea( addressArray ),
		      state = this.getState( addressArray ),
		      latValue = place.geometry.location.lat(),
		      lngValue = place.geometry.location.lng();
        // Set these values in the state.
     
		this.setState({
			address: ( address ) ? address : '',
			area: ( area ) ? area : '',
			city: ( city ) ? city : '',
			state: ( state ) ? state : '',
			markerPosition: {
				lat: latValue,
				lng: lngValue
			},
			mapPosition: {
				lat: latValue,
				lng: lngValue
			},
		})}
	};


	render(){
		const AsyncMap = withScriptjs(
			withGoogleMap(
				props => (
					<GoogleMap google={ this.props.google }
					           defaultZoom={ this.props.zoom }
					           defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
					>
						{/* InfoWindow on top of marker */}
						<InfoWindow
							onClose={this.onInfoWindowClose}
							position={{ lat: ( this.state.markerPosition.lat + 0.0018 ), lng: this.state.markerPosition.lng }}
						>
							<div>
								<span style={{ padding: 0, margin: 0 }}>{ this.state.address }</span>
							</div>
						</InfoWindow>
						{/*Marker*/}
						<Marker google={this.props.google}
						        name={'Dolores park'}
						        draggable={true}
						        onDragEnd={ this.onMarkerDragEnd }
						        position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
						/>
						<Marker />
						{/* For Auto complete Search Box */}
						<Autocomplete
							style={{
								width: '100%',
								height: '40px',
								paddingLeft: '16px',
								marginTop: '2px',
								marginBottom: '500px'
							}}
                            onPlaceSelected={ this.onPlaceSelected }
                           
                           // types={['(regions)']}
                            // types={
                             
                            //                           '(accounting)',
                            //                    '(airport)',
                            //                    '(amusement_park)',
                            //                     '(aquarium)',
                            //                     '(art_gallery)',
                            //                     '(atm)',
                            //                     '(bakery)',
                            //                     '(bank)',
                            //                     '(bar)',
                            //                     '(beauty_salon)',
                            //                     '(bicycle_store)',
                            //                     '(book_store)',
                            //                    '(bowling_alley)',
                            //                     '(bus_station)',
                            //                     '(cafe)',
                            //                     '(campground)',
                            //                     '(car_dealer)',
                            //                     '(car_rental)',
                            //                    '(car_repair)',
                            //                     '(car_wash)',
                            //                     '(casino)',
                            //                     '(cemetery)',
                            //                     '(church)',
                            //                     '(city_hall)',
                            //                     '(clothing_store)',
                            //                     '(convenience_store)',
                            //                    '(courthouse)',
                            //                    '(dentist)',
                            //                    '(department_store)',
                            //                    '(doctor)',
                            //                     '(drugstore)',
                            //                    '(electrician)',
                            //                    '(establishment)',
                            //                     '(electronics_store)',
                            //                    '(embassy)',
                            //                     '(fire_station)',
                            //                    '(florist)',
                            //                     '(funeral_home)',
                            //                 '(furniture_store)',
                            //                    '(gas_station)',
                            //                     '(grocery_or_supermarket)',
                            //                    '(gym)',
                            //                   '(hair_care)',
                            //                    '(hardware_store)',
                            //                     '(hindu_temple)',
                            //                    '(home_goods_store)',
                            //                     '(hospital)',
                            //                    '(insurance_agency)',
                            //                    '(jewelry_store)',
                            //                    '(laundry)',
                            //                    '(lawyer)',
                            //                   '(library)',
                            //                     '(light_rail_station)',
                            //                     '(liquor_store)',
                            //                     '(local_government_office)',
                            //                   '(locksmith)',
                            //                    '(lodging)',
                            //                     '(meal_delivery)',
                            //                     '(meal_takeaway)',
                            //                    '(mosque)',
                            //                     '(movie_rental)',
                            //                     '(movie_theater)',
                            //                     '(moving_company)',
                            //                    '(museum)',
                            //                     '(night_club)',
                            //                     '(painter)',
                            //                 '(park)',
                            //                     '(parking)',
                            //                     '(pet_store)',
                            //                    '(pharmacy)',
                            //                     '(physiotherapist)',
                            //                     '(plumber)',
                            //                     '(police)',
                            //                     '(post_office)',
                            //                     '(primary_school)',
                            //                     '(real_estate_agency)',
                            //                     '(regions)',
                            //                    '(restaurant)',
                            //                     '(roofing_contractor)',
                            //                     '(rv_park)',
                            //                     '(school)',
                            //                     '(secondary_school)',
                            //                     '(shoe_store)',
                            //                     '(shopping_mall)',
                            //                    '(spa)',
                            //                     '(stadium)',
                            //                     '(storage)',
                            //                     '(store)',
                            //                     '(subway_station)',
                            //                    '(supermarket)',
                            //                     '(synagogue)',
                            //                     '(taxi_stand)',
                            //                    '(tourist_attraction)',
                            //                     'train_station',
                            //                    '(transit_station)',
                            //                     '(travel_agency)',
                            //                     '(university)',
                            //                     '(veterinary_care)',
                            //                     '(zoo)'
                            //                 }
						/>
					</GoogleMap>
				)
			)
		);
        let map;
        
		if( this.props.center.lat !== undefined ) {
          
			map = <div>
				{/* <div>
					<div className="form-group">
						<label htmlFor="">City</label>
						<input type="text" name="city" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.city }/>
					</div>
					<div className="form-group">
						<label htmlFor="">Area</label>
						<input type="text" name="area" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.area }/>
					</div>
					<div className="form-group">
						<label htmlFor="">State</label>
						<input type="text" name="state" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.state }/>
					</div>
					<div className="form-group">
						<label htmlFor="">Address</label>
						<input type="text" name="address" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.address }/>
					</div>
				</div> */}
     <Comments city={this.state.city} area={this.state.area} state={this.state.state} address={this.state.address} lat={this.state.markerPosition.lat} lng={this.state.markerPosition.lng}/>
{console.log(this.state.city, this.state.area, this.state.state, this.state.address, this.state.markerPosition.lat, this.state.markerPosition.lng)}
     <AsyncMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDCdArNxLRThnfwFpJg4yH-tQbMpgGGg8s&libraries=places"
     ///place/textsearch/
      loadingElement={
        <div style={{ height: `100%` }} />
    }
    containerElement={
        <div style={{ height: this.props.height }} />
    }
    mapElement={
        <div style={{ height: `100%` }} />
	}
	


	     // hi this is my map container , container 1 that holds the map you will choose from to save to topic


/>
</div>
} else {
map = <div style={{height: this.props.height}} />
}
return( map )
}
    
}


export default connect(store=>({topicz:store}))(Map)