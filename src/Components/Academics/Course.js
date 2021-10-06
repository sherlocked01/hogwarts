import React from 'react';
import './Academics.css';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const courseLink = `/${props.name}`;
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 center" style={{maxWidth: '50rem'}}>
            <main className="black-80">
                <img src={props.src} style={{height:'330px', width:'698px'}}/>
                    <section style={{height: '50px'}}>
                        <h2 className="cName" style={{float:'left', marginTop:'10px', marginLeft:'20px'}}>{props.name}</h2>
                        <Link to={courseLink}>
                            <button class="ui right floated button" style={{marginTop:'10px', marginRight:'20px'}}>Open Course</button>
                        </Link>
                    </section>
                    <section className="description">
                    <p style={{marginTop:'15px', marginLeft:'15px', fontSize:'15px'}}>
                        {props.description}
                    </p>
                    </section>
            </main>
        </article>
    );
}

export default Course;