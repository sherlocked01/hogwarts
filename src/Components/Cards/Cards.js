import React from 'react';
import './Cards.css';
import Slytherin from './slytherin.png';
import Hafflepuff from './Hafflepuff.png';
import Gryffindor from './Gryffindor.png';
import Ravenclaw from './Ravenclaw.png';
class Cards extends React.Component{
    render(){

        return(
            <div class="ui four column grid">
                <div class="column">
                    <div class="ui fluid card">
                    <div class="image">
                        <img src={Gryffindor} alt="Slytherin" className="img"/>
                    </div>
                    <div class="content">
                        <a class="header">Gryffindor</a>
                    </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui fluid card">
                    <div class="image">
                        <img src={Hafflepuff}/>
                    </div>
                    <div class="content">
                        <a class="header">Hafflepuff</a>
                    </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui fluid card">
                    <div class="image">
                        <img src={Slytherin}/>
                    </div>
                    <div class="content">
                        <a class="header">Slytherin</a>
                    </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui fluid card">
                    <div class="image">
                        <img src={Ravenclaw}/>
                    </div>
                    <div class="content">
                        <a class="header">Ravenclaw</a>
                    </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Cards;