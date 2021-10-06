import React from 'react';
import './Library.css';
import Proclaim1 from './proclaim1.jpg'
class Library extends React.Component{
    render()
    {
        return(
            <div>
                
                <section className="books">
                    <section style={{backgroundColor:'salmon'}} id="welcome">
                        <p className="para">Welcome to Hogwart's Library</p>
                    </section>

                    <div class="ui four column grid">
                        <div class="column">
                            <div class="ui fluid card">
                            <div class="image1">
                                
                            </div>
                            <div class="content">
                                <a class="header">Magic Dark and Strange</a>
                            </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui fluid card">
                            <div class="image2" style={{width:'185.083', height:'281.617'}}>
                                
                            </div>
                            <div class="content">
                                <a class="header">One word changes</a>
                            </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui fluid card">
                            <div class="image3">
                                
                            </div>
                            <div class="content">
                                <a class="header">The royal road to card Magic</a>
                            </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="ui fluid card">
                            <div class="image4">
                                
                            </div>
                            <div class="content">
                                <a class="header">A wizard of earthsea</a>
                            </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui fluid card">
                            <div class="image5">
                                
                            </div>
                            <div class="content">
                                <a class="header">The night circus</a>
                            </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui fluid card">
                            <div class="image6">
                                
                            </div>
                            <div class="content">
                                <a class="header">Lord of the rings</a>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </section>
            </div>
        )
    }
}
export default Library;