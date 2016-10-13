import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
	key:1,
	name: 'Reinis',
	phone: '225234443'
},
{	
	key:2,
	name: 'Jack',
	phone: '500493992'
},
{	
	key:3,
	name: 'Flint',
	phone: '123444343'
}]

class App extends React.Component {
	render () {
		return (
			<div>
				<h1> Contacts List</h1>
				<ContactsList contacts={this.props.contacts}/>
			</div>
			)
	}
}

render(<App contacts={contacts}/>, document.getElementById('app'))
