import React from 'react';
import person from '../../assets/person.png'
import "./opening.css"




export default function Opening() {
  

  return (
    <div className="openingGridContainer">
        <div className="oGrid1">
            <img src={person} />
        </div>

        <div className="oGrid2">
            <h2>
                Who Am I?
            </h2>
            <p>
                Hello, my name is Sam and I am a software developer. I have spent several years learning to code
                both in college and as part of a team. I enjoy being challenged by the projects that I work on and
                love to find interesting ways to solve problems. Although my real passion is with JavaScript, I am no
                stranger to working with other languages. I am also a quick learner, and always looking for more languages
                to add to my bag of tricks.
            </p>
        </div>
    </div>
  );
}