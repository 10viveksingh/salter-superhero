import React, { useState } from 'react';

function SearchBar(props) {
    const { handleChange, searchText } = props;
    return (
        <div>
            <input
                id="search-bar"
                type="search"
                placeholder='Find Your SuperHero...'
                onChange={handleChange}
                value={searchText}
            />
        </div>
    );
}


export default SearchBar; 