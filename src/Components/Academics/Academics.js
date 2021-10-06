import React from 'react';
import './Academics.css';
import classRoom from './classroom.jpg';
import astronomy from './astronomy.jpg';
import alchemy from './alchemy.jpg';
import ancientRunes from './ancientRunes.jpg';
import ancientStudies from './ancientStudies.jpg';
import charms from './charms.jpg';
import dada from './dada.png';
import Course from './Course.js';


class Academics extends React.Component{

    

    render()
    {
        return(
            <div className="academics">
                <section className="first">
                    <img className="image_class" src={classRoom} alt="Welcome"></img>
                </section>
                <section className="second">
                    <Course 
                        src={astronomy} 
                        name='Astronomy'
                        description='All year one lesson has been published. Start date of the course is 12th November. Only 40 seats are left. Application fee is $200.'
                    />
                    <Course 
                        src={alchemy} 
                        name='Alchemy'
                        description='All year one lesson has been published. Start date of the course is 10th November. Only 42 seats are left. Application fee is $250.'
                    />
                    <Course 
                        src={ancientRunes} 
                        name='Ancient_Runes'
                        description='All year one lesson has been published. Start date of the course is 25th October. Only 50 seats are left. Application fee is $200.'
                    />
                    <Course 
                        src={ancientStudies} 
                        name='Ancient_Studies'
                        description='All year one lesson has been published. Start date of the course is 12th November. Only 09 seats are left. Application fee is $300.'
                    />
                    
                    <Course 
                        src={charms} 
                        name='Charms'
                        description='All year one lesson has been published. Start date of the course is 18th October. Only 35 seats are left. Application fee is $350.'
                    />
                    <Course 
                        src={dada} 
                        name='Defence_Against_Dark_Arts'
                        description='All year one lesson has been published. Start date of the course is 12th November. Only 24 seats are left. Application fee is $150.'
                    />
                </section>
            </div>
            
        )
    }
}
export default Academics;