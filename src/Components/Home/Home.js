import React from 'react';
import './Home.css';
import Welcome from './Welcome.png';
import Cards from '../Cards/Cards';
import HorizontalCards from '../HorizontalCards/HorizontalCards';
class Home extends React.Component{
    render(){
        return (
            <div className="Home">
                <section className="Welcome">
                    <img className="img" src={Welcome} alt="Welcome"></img>
                </section>
                <section className="Houses">
                    <Cards/>
                </section>
                <section className="Activities">
                    <HorizontalCards/>
                </section>
                <section className="contact">Contact Us</section>
            </div>
        )
    }
}
export default Home;