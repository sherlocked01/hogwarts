import React from "react";
import './CourseDescryption.css';

const CourseDescryption = ({announcements, instructorName, instructorDesc, review1}) => {
    return(
        <div style={{height: '100%'}}>
            <section className="course">
                
            </section>
            <section style={{height:'30%', marginTop:'50px'}}>
                <p className="header">About this course</p>
                <p className="desc">
                  {announcements}
                </p>
                
            </section>
            <section className="prof">
                <p className="header">Instructor</p>
                <p className="name">{instructorName}</p>
                <p className="desc">
                    {instructorDesc}
                </p>
                
            </section>

            
            <section className="reviews">
                
            <article className="ba b--black-10 mw-100 w-50-m w-25-l shadow-5 center rw1" style={{maxWidth: '42rem', backgroundColor:'white'}}>
                <main className="black-80">
                    <p className="re_para">{review1}</p>
                    <p className="reviewer">-Harry Potter</p>
                </main>
                </article>

                <article className="ba b--black-10 mw-100 w-50-m w-25-l shadow-5 center rw1" style={{maxWidth: '42rem', backgroundColor:'white'}}>
                <main className="black-80">
                    <p className="re_para">{review1}</p>
                    <p className="reviewer">-Hermoine Granger</p>
                </main>
                </article>

                <article className="ba b--black-10 mw-100 w-50-m w-25-l shadow-5 center rw1" style={{maxWidth: '42rem', backgroundColor:'white'}}>
                <main className="black-80">
                    <p className="re_para">{review1}</p>
                    <p className="reviewer">-Ron Weasely</p>
                </main>
                </article>
            </section>
        
        </div>
    )
}

export default CourseDescryption;