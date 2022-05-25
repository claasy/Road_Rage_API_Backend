import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.onSearch(searchTerm)

    }
    console.log(props)
    useEffect(()=>{

    },[])

    return (
        <form onSubmit={handleSubmit}>
            <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} type='text' placeholder='Search by plate...'></input>
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchBar;