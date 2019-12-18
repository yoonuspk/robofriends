import React from 'react';
import Card from './card';
const CardList = ({robots}) =>{

    const cardArr =
    robots.map((x,i)=>{
                return    <Card  key={i} id={x.id} name={x.name} email={x.email}/>
       
        })
    
    
    return ( 
        <> 
          
            {cardArr}
        </>
       
        
        );
    


}

export default CardList;