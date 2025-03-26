import React from 'react';
import Base from '../components/Base';
import { Button } from 'reactstrap';
import './About1.css';

const about2 = () => {
    return (

        <Base>          
        
        <div className='myfile'>
        <h1>JAVA Full Stack </h1>
        <img src='java.jpeg'width={1000}></img>

        <p>Java Full Stack refers to the development of web applications using Java programming language, encompassing both front-end and back-end development.
<h3>
Front-end (Client-side):</h3>

<ul><li> HTML/CSS: Structure and styling of web pages</li><li>
JavaScript: Client-side scripting for dynamic interactions</li><li>
Angular/React/Vue.js: Popular JavaScript frameworks for building UI components</li><li>
Bootstrap/Material-UI: UI libraries for responsive design</li></ul>

<h3>Back-end (Server-side):</h3>

<ul><li>Java: Programming language for server-side logic</li><li>
Spring Framework: Popular Java framework for building enterprise-level applications</li><li>
Hibernate: ORM (Object-Relational Mapping) tool for database interactions</li><li>
MySQL/PostgreSQL/Oracle: Relational databases for data storage</li><li>
RESTFUL APIs: API design for communication between client and server</li></ul>

<h3>Key Skills for Java Full Stack Developer:</h3>

<ul><li>Proficiency in Java programming language</li><li>
Understanding of front-end technologies (HTML, CSS, JavaScript, Angular/React)</li><li>
Experience with Spring Framework and Hibernate</li><li>
Knowledge of database management systems (MySQL, PostgreSQL, Oracle)</li><li>
Familiarity with API design principles and RESTful APIs</li><li>
Understanding of security practices and authentication mechanisms</li><li>
Experience with version control systems (Git)</li><li>
Knowledge of testing frameworks (JUnit, TestNG)</li></ul>

<h3>Responsibilities of Java Full Stack Developer:</h3>

<ul><li>
Design and develop scalable web applications</li><li>
Implement front-end and back-end logic</li><li>
Integrate databases and APIs</li><li>
Ensure security and authentication mechanisms</li><li>
Test and debug applications</li><li>
Collaborate with cross-functional teams</li><li>
Maintain and update existing applications</li>
    </ul>

<h3>Career Prospects:</h3>

<ul><li>Full Stack Developer</li><li>
Senior Java Developer</li><li>
Technical Lead</li><li>
Software Architect</li><li>
DevOps Engineer</li>
</ul>
<ul>
    <h3>DURATION</h3>
    
    <li>
        oneday class - 2 or 3 hours</li><li>
        Practices - 1 hours</li><li>
        Total Duration - 4 Months 
        </li></ul>
</p>
        </div>
        <Button color="success" outline type="submit" href='/Instagram'>Join Now</Button>
        </Base>

    )
}

export default about2;