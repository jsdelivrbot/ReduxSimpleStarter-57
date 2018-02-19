
import React from 'react';
//import Component from 'react';



export const SearchBar = ({onSearchTermChange,value}) => 
<div className="search-bar">
	<input 
	value={value}
	onChange={event => onSearchTermChange(event.target.value)} />
	</div>