import React from "react";
import CourseDescryption from "./CourseDescryption";


export default function CourseName({name}){
    const details = {
        'astronomy' : {
            'announcements' : `How are astronomers approaching their search for life in the universe? 
            What have we learned from the surge of exoplanets discoveries? How likely is it that Earth does not host the only life in the Universe? In this course we explore the field of astrobiology, an emerging multidisciplinary field. Progress in astrobiology is driven by telescopes on the ground and in space, and by new insights on how life emerged on Earth and its diversity. 
            The topics in this course range from the science of how exoplanets are detected, to the chemistry that supports the argument that the ingredients for life are common in the Universe. We will follow the analyses of experts in chemistry, astronomy, geology and archaeology to build a strong foundation of understanding.  By the final assignment, students will be equipped with the knowledge necessary to identify what makes a planet habitable, and how likely it is that life exists there. 
            Students will graduate from this course informed about one of the most exciting fields in all of science, and ready to discuss the current exoplanet news stories and discoveries.`,
            'instructorName': `Professor Robert Plump`,
            'instructorDesc': `He was born in Toronto, Canada, on June 27, 1968. Both his parents are Muggles and he has no siblings. At the age of 8 he became fascinated with astronomy and he devoured all the astronomy books in the Toronto Public Library. 
             In 1979, at the age of 11, he was invited to study at Hogwarts. He declined the invitation because Voldemort was running things in Britain. Instead he studied in Muggle schools, graduating from secondary school with top grades in mathematics and physics, grades ranging from good (in chemistry) to mediocre (in history) and the second-lowest grade in his class in physical training; the only boy who got a lower grade was being punished for bad behaviour. 
             He then studied mathematics, physics, and astronomy at the University of Toronto and earned his PhD in astronomy in 1992. If you have any questions about the course, or just want to converse with him, feel free to send him an owl. `,
            'review1': `I have had been happier since I discovered this course. I particularly enjoyed the style of teaching. The courses and knowledge helped me become more comfrotable and confident.` 
        },
        'alchemy' : {
            'announcements' : `Would you like to learn about everlasting life? Would you like to understand how to tap into your spiritual psyche? 
            Alchemy is a branch of magic that assists the Witch or Wizard in transmuting base metals into noble metals.
            Alchemy is based off the ancient magic that some have read about. We will learn about famous alchemists such as Nicolas Flamel; and attempt 
            to follow in his footsteps as well as open up your spiritual awareness while fulfilling your inner desires. Please make sure you keep concise notes to help yourself when studying. Everything that's posted does not have to be rewritten; 
            it is best to use shorthand or condense your notes so you can summarize the important points in each lesson. If you run out of parchment, see the desk located in the back. It is supplied with parchment to suit your needs.`,
            'instructorName': `Professor Rosenquist`,
            'instructorDesc': `Professor Serafina Rosenquist is from Malmö, Sweden. She attended Durmstrang Institute for Magical Learning and shortly after graduation, she decided to travel the world to study alchemy in different societies. After years of traveling and researching, she took up a position as Alchemy Professor at Hogwarts School of Witchcraft and Wizardry. Professor Rosenquist can often be found helping students in the Alchemy Laboratory, hoarding desserts in the Great Hall, or playing a board game in the Library. Speaking of games, Professor Rosenquist has been recently designing new magical games for the Department of Magical Games and Sports on the side and even contributes occasionally as a magical game historian. Games are her overall favorite pastime and she is almost as passionate about them as she is about alchemy.`,
            'review1': `I have had been happier since I discovered this course. I particularly enjoyed the style of teaching. The courses and knowledge helped me become more comfrotable and confident.` 
            
        },
        'ancientRunes' : {
            'announcements' : `Have you ever come across strange markings in old, worn books and wondered what they said? Do you have a love for languages and writing? Would you like to learn some of the world’s oldest magic? The study of Ancient Runes is a course concerning itself with ancient magical scripts from around the world, their history, their linguistics, and the spells they were used to compose. 
            This year, prepare to enter the world of the Nords, the councils of the magi, and the halls of Valhalla..`,
            'instructorName': `Professor Wessex`,
            'instructorDesc': `Venita Wessex is the youngest member of the now nearly-defunct, formerly royal, House of Wessex. In her years at Hogwarts, she bided her time in Slytherin until her graduation with top marks in History of Magic, Ancient Runes, Ancient Studies and Charms. Her first year after Hogwarts immediately brought her to far-off lands including Syria, Egypt and Peru, to name a few. Working for the British Museum of Magic, 
            she enjoyed the privilege of collaborating with some of the most eminent names in the curse-breaking and magiarchaeology circles, 
            which is how she and former Ancient Runes professor, Mathilda Stevens, came to be in contact. After finishing her most recent project in Egypt, she returned to her native country, England, to take the interim Ancient Runes position at Hogwarts and was asked to stay permanently after her predecessor's leave was extended.`,
            'review1': `I have had been happier since I discovered this course. I particularly enjoyed the style of teaching. The courses and knowledge helped me become more comfrotable and confident.` 
        },
        'ancientStudies' : {
            'announcements' : `To any confused students:

            With my Professor Morgan's recent retirement, there may be some slightly confusing references to her in the lesson. I solely serve as the temporary steward for this course as I am well versed in many of its topics. In the meantime, you may see some of the references disappear in order to diminish the amount of work the new professor will need to do. `,
            'instructorName': `Professor Robert Plump`,
            'instructorDesc': `Venita Wessex is the youngest member of the now nearly-defunct, formerly royal, House of Wessex. In her years at Hogwarts, she bided her time in Slytherin until her graduation with top marks in History of Magic, Ancient Runes, Ancient Studies and Charms. Her first year after Hogwarts immediately brought her to far-off lands including Syria, Egypt and Peru, to name a few. Working for the British Museum of Magic, 
            she enjoyed the privilege of collaborating with some of the most eminent names in the curse-breaking and magiarchaeology circles, 
            which is how she and former Ancient Runes professor, Mathilda Stevens, came to be in contact. After finishing her most recent project in Egypt, she returned to her native country, England, to take the interim Ancient Runes position at Hogwarts and was asked to stay permanently after her predecessor's leave was extended.`,
             'review1': `I have had been happier since I discovered this course. I particularly enjoyed the style of teaching. The courses and knowledge helped me become more comfrotable and confident.` 
        },
        
        'charms' : {
            'announcements' : `Year One of Charms presents an overview of the basics of spellcasting. Beginning with essential wizarding laws and touching briefly upon wandlore, we then discuss the components that are present within spells. Along the way you’ll learn of and practice the basic spells that all beginning witches and wizards should know. We’ll explore how such basic spells as the Severing Charm, the Levitation Charm and the Sunlight Charm demonstrate these fundamental aspects of spellcasting.`,
            'instructorName': `Professor Virneburg`,
            'instructorDesc': `As the only child of a university professor and his wife, 
            Cassandra was surrounded with books from the moment she was born. Yet her parents were not people to encourage any belief in supernatural 
            phenomena, and are still critical about magic to this very day - which is why her Hogwarts letter was the biggest surprise that she has ever received.
            After graduating from Hogwarts, Cassandra was at a loss what to do. Interested in many things, she didn’t want to settle down directly - yet going for a year-long trip and exploring the world seemed like a useless thing to do. In the end, she decided to enrol in a muggle university, 
            while working on research to complete a Charms mastery.`,
            'review1': `I have had been happier since I discovered this course. I particularly enjoyed the style of teaching. The courses and knowledge helped me become more comfrotable and confident.` 
        },
        'dada' : {
            'announcements' : `Defense Against the Dark Arts Year One will serve as an introduction that will set the foundation for your magical education and properly prepare you for future work in Defense Against the Dark Arts.
            Here, we will explore what the Dark Arts are, some basic defensive and offensive spells, and low ranking dark creatures that will allow you to develop an understanding about how we discuss and defend against dark creatures.
            A few final notes. There is no textbook for this course. All information that you need can either be found within the lesson or can be reasoned using logic based on what you have learned. Simply giving me information that comes word for word from the lesson will not suffice and will result in the response being rejected if it is a short answer response or being given a 1% if it is a response to an essay. The only equipment you need is your wand.`,
            'instructorName': `Professor Penrose`,
            'instructorDesc': `Born in 1972 to Dimitri and Susan Penrose, Jericho knew from a young age that he was not normal. Perhaps it was the odd occurrences that he experienced whenever he became angry at his two brothers, but Jericho knew something was not right. He attended Muggle 
             school in his hometown of London, England; he spent most of his primary years hoping his weirdness would not show and trying to prevent it at any cost.
             He had just returned from a mission in the United States and collapsed in his chair, exhausted and wanting nothing more than a few days of sleep when he noticed a letter on his desk. Thinking it was another mission, he opened it with a heavy heart. He was pleasantly surprised to find that the missive was from Professor Melanie Silvers, a friend of his whom he had not spoken to in many years. The letter was a request that he come back to Hogwarts to help her teach Defense Against the Dark Arts. He debated for a few days,
            a debate which involved a lengthy discussion with the Head Auror, before finally deciding that he would join Professor Silvers.`,
            'review1': `I have had been happier since I discovered this course. I particularly enjoyed the style of teaching. The courses and knowledge helped me become more comfrotable and confident.` 
        }
    }
    if(name==='Astronomy'){
        return(
            <div>
                <CourseDescryption 
                    announcements={details.astronomy.announcements}
                    instructorName={details.astronomy.instructorName}
                    instructorDesc={details.astronomy.instructorDesc}
                    review1={details.astronomy.review1}
                    
                />
            </div>
        );
    }
    else if (name==='Alchemy'){
        return(
            <div>
                <CourseDescryption 
                    announcements={details.alchemy.announcements}
                    instructorName={details.alchemy.instructorName}
                    instructorDesc={details.alchemy.instructorDesc}
                    review1={details.alchemy.review1}
                />
            </div>
        );
    }
    else if (name==='Ancient_Runes'){
        return(
            <div>
                <CourseDescryption 
                    announcements={details.ancientRunes.announcements}
                    instructorName={details.ancientRunes.instructorName}
                    instructorDesc={details.ancientRunes.instructorDesc}
                    review1={details.ancientRunes.review1}
                />
            </div>
        );
    }
    else if (name==='Ancient_Studies'){
        return(
            <div>
                <CourseDescryption 
                    announcements={details.ancientStudies.announcements}
                    instructorName={details.ancientRunes.instructorName}
                    instructorDesc={details.ancientRunes.instructorDesc}
                    review1={details.ancientStudies.review1}
                />
            </div>
        );
    }
    
    else if (name==='Charms'){
        return(
            <div>
                <CourseDescryption 
                    announcements={details.charms.announcements}
                    instructorName={details.charms.instructorName}
                    instructorDesc={details.charms.instructorDesc}
                    review1={details.charms.review1}
                />
            </div>
        );
    }
    else if (name==='Defence_Against_Dark_Arts'){
        return(
            <div>
                <CourseDescryption 
                    announcements={details.dada.announcements}
                    instructorName={details.dada.instructorName}
                    instructorDesc={details.dada.instructorDesc}
                    review1={details.dada.review1}
                />
            </div>
        );
    }
    
}