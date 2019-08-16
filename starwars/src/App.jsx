
// Import dependencies and lib's
import React, {useState, useEffect} from 'react';
import axios from 'axios';
// Importing styles
import './App.css';
// Importing Components needed
import Cards from  './components/Cards'

const App = () => {

  //Declaring state to be used for the app
	const [characters, setCharacters] = useState();

	// calling use effect and syncing to any change in state for this component.
	// On first render make an axios call and set state, this will cause a rerender in the coponent with updated state.
	useEffect(() => {
		axios('https://swapi.co/api/people/')
		.then(res => {

		// Capturing the api request data we are interested in and setting it to state, the data is an array of objects.
		const apiData = res.data.results
		setCharacters(apiData);
	})
	}, []);

	// If characters does NOT evaluate to true display a loading text
	if(!characters) return <h1 className="loadingText">Loading...</h1>

	// Once state has updated with a new value we will display this content since or conditional logic is no longer met.
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
			<Cards/>
    </div>
  );
}

export default App;
