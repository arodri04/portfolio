import React, { useState } from 'react';
import "./languages.css"
import CustomCardSlide from '../Carousel/CustomCardSlide'
import jssnake from '../../assets/jssnake.png'
import java from '../../assets/java.png'
import html from '../../assets/html.png'
import less from '../../assets/less.png'
import python from '../../assets/python.jpeg'
import cp from '../../assets/cp.jpeg'

export default function Languages() {
    const [lang, setlang] = useState([
     {language:'Java', description:'Java was the first language that I learned how to create back ends in. It is an old yet robust language that I enjoy using.', image:java, imageTitle:"Java", link:"https://github.com/arodri04/java-schoolpagesswagger"},
     {language:'JavaScript', description:'Most of my programming expirience comes from JavaScript. Most notable frameworks that I use regularly are React and Node.js', image:jssnake, link:"https://github.com/Lambda-School-Labs/school-calendar-fe"},
     {language:'HTML', description:'HTML is a backbone of most of my web applications. Being able to understand and write this language has broadened my abilities dramatically.', image:html, link:"https://github.com/arodri04/Preprocessing-II"},
     {language:'CSS', description:'I use CSS in almost every one of my projects. I am also able to work with preprocessors like SaSS and Less.', image:less, link:"https://github.com/arodri04/Preprocessing-II"},
     {language:'C', description:'Although not typically used for web development, C is a powerful language that I picked up during my college career.', image:cp},
     {language:'Python', description:"Python is a clear and concise language. Although I haven't used it in any web applications, I have used it for normal applications.", image:python}])

    return (
        <div className="langContainer">
            <div className="customCardCont">
                {lang.map(el => {return (
                    <CustomCardSlide props={el}/>
                )})}
            </div>
            <div className="lGrid2">
                <h2>
                    Language Proficiencies
                </h2>
                <p>
                    Through school and my own study I have picked up a miriad of programming
                    languages. Although I do prefer doing front end projects, I am more than 
                    capable of doing more. Also I am a quick study and can learn any language
                    necessary for the tech stack. 
                </p>
            </div>
        </div>
    )
}