import React from 'react';

const SearchItem=({searchItem ,searchNewItem})=>{
    return(
        <form className='searchForm' onSubmit={(e )=>e.preventDefault}>
            <label htmlFor="search">Search</label>
            <input
                autoFocus
                id="searchItems"
                type="text"
                role='searchbox'
                placeholder='searchItems'
                required
                value={searchItem}
                onChange={(e)=>{searchNewItem(e.target.value)}}
            />
            
            
        

        </form>

    )
}
export default SearchItem