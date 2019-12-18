import React from 'react';

const SearchBox = ({searchChanges})=>{
    return (
        <div className="pa2">
             <input className="tc bg-light-grey dib br2  pa2 ma2 "
        type="search" 
        placeholder="seach robots" 
        onChange ={searchChanges}/>
        </div>
       
        
    );

}



export default SearchBox;