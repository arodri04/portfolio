import React from 'react';
import './recent.css'
import Mataka from "../../../assets/mataka.png"


export default function Recent() {
  


  return (
      <div className="recentContainer">
        <div className="rGrid1">
            <a href="https://www.maramataka.com"><img src={Mataka}/></a>
        </div>

        <div className="rGrid2">
            <h2>
                Most Recent Project
            </h2>
            <p>
                The most recent notable project that I have been a part of was <a href="https://www.maramataka.com">Mara Mataka</a>. This 
                was a calendar application presented to us by a highschool coach who needed an app that could send out notifications 
                to all of his athletes automatically when they had something coming up. The coach would create a calendar and fill it with events
                and his students phone numbers. Then when an upcoming event was coming up he had the option to send it out to all the phone numbers 
                subscribed to the calendar.
            </p>
            <p>
                Largest Problem: Our scope was too big and we weren't able to polish out some features as well as we would have liked.
            </p>
            <p>Solution: Looking back, we could have maintained focus on the core features that we wanted. Once these core features were dealt with we could have started applying work to extra features.</p>
        </div>
      </div>

  );
}