import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(e){
        e.preventDefault()
        props.filterPlates(searchTerm)
    }

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' placeholder='Search by plate...'></input>
            <button type='submit'>Search</button>
            </form>
        </div>
        </>
    )
}

export default SearchBar;