import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.filterPlates(searchTerm)
    }

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
            <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} type='text' placeholder='Search by plate...'></input>
            <button type='submit'>Search</button>
            </form>
        </div>
        </>
    )
}

export default SearchBar;