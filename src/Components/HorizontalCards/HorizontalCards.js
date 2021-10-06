import React from 'react';
import './HorizontalCards.css';
import GreatHall from './Great_Hall.jpg';
import Quidditch from './Quidditch.jpg';
import Triwizard from './Triwizard_Cup.png';
class HorizontalCards extends React.Component{
    render(){
        return(
            <div>
                <article className="br3 ba b--black-10 mv4  w-50-m w-25-l shadow-5 center" style={{width: '86%', display: 'flex', height:'350px'}}>
                <main className="pa4 black-80" style={{ width:'30%'}}>
                    <div className="measure">
                        <img src={GreatHall} alt="Great Hall" className="img1"></img>
                        <p style={{display:'flex', justifyContent: 'center', fontSize: '25px', marginTop:'5px'}}>Great Hall</p>
                    </div>
                </main>
                <div className="content">
                    The Great Hall is a large hall with four long tables where students of each House sat during the day and at mealtimes. 
                    The staff table is at the front, where the entire Hogwarts staff sat. There is a throne-like chair in the centre of the table where the 
                    current Headmaster or Headmistress sits. The ceiling of the Great Hall is covered with candles and it is enchanted to look like the sky 
                    above.
                </div>
                </article>

                <article className="br3 ba b--black-10 mv4  w-50-m w-25-l shadow-5 center" style={{width: '86%', display: 'flex', justifyContent:'right', height:'350px'}}>
                <div className="content">
                Quidditch is a wizarding sport played on broomsticks.
                It is the most popular game and most well-known game among wizards and witches, and, according to Rubeus Hagrid, 
                the equivalent to Muggles' passion for football. The object of the game was to score more points than your opponents. 
                Each goal is worth ten points and catching the Golden Snitch is worth one-hundred and fifty points. 
                The game ends when the Snitch is caught or an agreement is reached between the captains of both teams. 
                Some games could go on for many days if the Snitch is not caught. 
                </div>
                <main className="pa4 black-80" style={{ width:'30%', display: 'flex', alignItems:'center', justifyContent:'center'}}>
                    <div className="measure">
                        <img src={Quidditch} alt="Great Hall" className="img1"></img>
                        <p style={{display:'flex', justifyContent: 'center', fontSize: '25px', marginTop:'5px'}}>Quidditch</p>
                    </div>
                </main>
                
                </article>

                <article className="br3 ba b--black-10 mv4  w-50-m w-25-l shadow-5 center" style={{width: '86%', display: 'flex', height:'350px'}}>
                <main className="pa4 black-80" style={{ width:'30%'}}>
                    <div className="measure">
                        <img src={Triwizard} alt="Great Hall" className="img1"></img>
                        <p style={{display:'flex', justifyContent: 'center', fontSize: '25px', marginTop:'5px'}}>Triwizard Cup</p>
                    </div>
                </main>
                <div className="content">
                The Triwizard Tournament is a magical contest held between the three largest wizarding schools of Europe: 
                Hogwarts School of Witchcraft and Wizardry, Durmstrang Institute, and Beauxbatons Academy of Magic, 
                each school being represented by one Champion. Selected Champions compete in three tasks - traditionally judged 
                by the Headmasters or Headmistresses of the competing schools - designed to test magical ability, intelligence and 
                courage. Champions compete for the honour and glory of winning the Tournament and for the Triwizard Cup and a monetary 
                prize. The first Tournament was held in 1294.
                </div>
                </article>

            </div>
        )
    }
}
export default HorizontalCards;