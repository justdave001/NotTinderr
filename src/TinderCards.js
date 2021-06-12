import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';
function TinderCards() {
    
    const [people, setPeople] = useState([]);
      

    //code that runs based on condition (fast conditionals for react)
    useEffect(() => {
        database
        .collection('people')
        .onSnapshot((snapshot) => 
          setPeople(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);
    

    //stressful way of pushing to array
    // const people = [];
    //people.push('dave', 'sam')

    //Easy way(react way)
    //setPeople([...people, 'dave', 'sam'])
    // the "...people" stores data from original array and appends other recently inputed data
    
    return(
        <div>
            <h1> Cards </h1>
            <div className = "tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                  className = "swipe"
                  key = {person.name}
                  preventSwipe = {['up', 'down']}
                >
                  <div 
                      style={{ backgroundImage: `url(${person.url})` }}
                      className = "card">
                      <h3>{person.name}</h3>
                  </div>
                </TinderCard>
            ))}
        </div>
    </div>
    );
}
export default TinderCards