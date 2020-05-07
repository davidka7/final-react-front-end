import React, {useEffect, useState} from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import RolePole from './RolePole'
 function LocationSearchInput() {
const [mappy, setMappy] = useState("")
const [mapper, setMapper] = useState({lat: 17.54, lng:16})

  const handleChange = e => {
    console.log(e)
     setMappy( e )
  };
  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => setMapper(latLng))
      .catch(error => console.error('Error', error));
  };
console.log(mapper.lat, mapper.lng, mappy)
    return (
      <div>
      <PlacesAutocomplete
        value={mappy}
        onChange={handleChange}
        onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <RolePole mappat={mapper.lat} mappnt={mapper.lng}/>
      </div>
    );
}
export default (LocationSearchInput)