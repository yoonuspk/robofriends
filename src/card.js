import React from 'react';

const Card = ({id,name,email})=>{
    return (
        <div className="tc bg-light-green dib br2 shadow-5 pa2 ma2 grow">
            <img alt="robojohn" src={`https://robohash.org/${id}?100*100`}/>
            <h2 >{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;