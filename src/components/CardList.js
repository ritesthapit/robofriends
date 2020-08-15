import React from 'react';
import Card from './Card';

//destructuring robots passed from index.js file
const CardList = ({robots}) => {
    //Deliberately throwing error 
    // if(true){
    //     throw new Error('ERRORRRRR!');
    // }
    return (
        <div> 
            {
            // curly brackets for js 
            //looping through robots array and map so that it can return the list
                robots.map((user, idx) => {
                return (
                    <Card 
                    // unique key while doing a loop --- always to keep track of any items that gets deleted
                        key={idx} 
                        id={robots[idx].id} 
                        name={robots[idx].name} 
                        email={robots[idx].email}/>
                    );
                })
            } 
        </div>
    );
}
export default CardList;