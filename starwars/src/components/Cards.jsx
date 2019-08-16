// Import lib's
import React from 'react'
// Import Components
import {Card} from 'semantic-ui-react';

function Cards(props) {
	return (

		// Styled components used from SemanticUI 
		// https://react.semantic-ui.com/usage
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>Gender: {props.gender}</Card.Meta>
        <Card.Description>
				Hair Color: {props.hairColor}<br/>
				Skin Color: {props.skinColor}<br/>
				Birth Year: {props.birthYear}
				</Card.Description>
      </Card.Content>
    </Card>
	)
}

export default Cards;