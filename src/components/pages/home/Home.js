import React from 'react'
import "./home.css"
import homeData from './homeData'
import {Link} from "react-router-dom"
const Home = () => {
  return (
   <>
   <div className='home-page-main-div'>
    <div className='home-img-div'>
    <img  src="./headerImages/web.png" className='home-img'/>
    </div>
    {/* {homeData.map((curElem)=>{
      return(
        <>
        <div className='home-map-div'>
        <h1 className='home-main-head'>{curElem.heading}</h1>
        <p className='home-desc'>{curElem.des}</p>
        <div className='education-div'>
        <h3>{curElem.sub1}</h3>
        <h4>{curElem.des1}</h4>
        <h6>{curElem.deg1}</h6>
        <p>{curElem.year1}</p>
        </div>
       
        
       
        </div>
        </>
      )
    })} */}
    <h1 className='home-main-head'>Know about me!</h1>
    <p className='home-desc'>I am a multidimensional person ,having interset in technology and emerging sciences. Desires employment as a Web developer (Mern Stack).I am responsible of producing high quality solutions for company and customers.Hard working with proficiency always provide excellent results.The growing industry of IT develop the interset of learning skills like (Html,Css,Javascript,React js,Express js, Node js, Mongo db</p>
 <img  className="home-img-data" src="./headerImages/roadmap.jpg" />
 <div>
 <h1 className='home-main-head'>Education</h1>
    <p className='home-desc'>Education can be thought of as the transmission of the values and accumulated knowledge of a society. In this sense, it is equivalent to what social scientists term socialization or enculturation. Children—whether conceived among New Guinea tribespeople, the Renaissance Florentines, or the middle classes of Manhattan—are born without culture. Education is designed to guide them in learning a culture, molding their behaviour in the ways of adulthood, and directing them toward their eventual role in society.</p>
    <ul>
      <li><h3>Bachelor in Computer Science</h3></li>
      <li>University of Enginnering and Technology lahore</li>
      <li>Computer Science</li>
      <li>2018-2022</li>
    </ul>
  

 </div>
 <div className='uni-projects'>
<h4 className='project-sub'>College Webpage</h4>
<iframe src="https://drive.google.com/file/d/1m6QZNk6tavcg17YpNwXqsDaXZv3FqLAk/preview" className="project-video" allow="autoplay"></iframe>
<h4 className='project-sub'>Radar System</h4>
<iframe src="https://drive.google.com/file/d/1nFTYamt56boij8TDbFsv25M8UnIglimW/preview" className="project-video" allow="autoplay"></iframe>
<Link to="/project" className="more-link" >More projects...</Link>
 </div>
 <div className='contact-div'>
 <h1 className='home-main-head'>Contact</h1>
 <p className='contact-email'><b>Email:</b> ayyanbazil000@gmail.com</p>
 <p className='contact-phone'><b>Phone:</b> 03214667901</p>
 <p className='contact-address'><b>Address:</b> House no:14,Street no:01,Shalamar Link Road Lahore</p>
 </div>
 <div className='skill-div'>
<h1 className='home-main-head'>MERN STACK </h1>
<p className='skill-head'>React js</p>
<img src="./headerImages/react.png" className='images-skill' />
<p className='skill-head'>Node js</p>
<img src="./headerImages/node.png" className='images-skill' />
<p className='skill-head'>Mongo Db</p>
<img src="./headerImages/mongo.png" className='images-skill' />
<p className='skill-head'>Express js</p>
<img src="./headerImages/express.png" className='images-skill' />

 </div>
 <hr/>
 
   </div>
   
   </>
  )
}

export default Home