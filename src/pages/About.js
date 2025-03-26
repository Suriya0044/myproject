import React from 'react';
import {CardBody,Card,CardTitle,CardText,CardHeader,CardImg,CardSubtitle,Button,CardGroup} from 'reactstrap';
import Base from '../components/Base';
import './About.css'


const About = () => {
    return (

        <Base>
        

        <div className='about'>
        <center><h1>ABOUT US</h1></center>
        <img src='about.jpg'width={1300}></img>
        <>
  <Card
    className="my-2"
    color="primary"
    inverse
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
    Option 1
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
      At Brain Technologies, we're passionate about empowering individuals to unlock their full potential. Our team of experts leverages cutting-edge technology and innovative methods to provide top-notch training and coaching services.

      </CardTitle>
     </CardBody>
  </Card>
  <Card
    className="my-2"
    color="secondary"
    inverse
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
    Option 2
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
Brain Technologies is a leading coaching centre dedicated to cognitive development, neuroplasticity, and brain-computer interface training. Our mission is to enhance lives through personalized training programs and expert guidance.
      </CardTitle>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="success"
    inverse
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
    Option 3
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
      Welcome to Brain Technologies, where innovation meets expertise. Our state-of-the-art training centre offers comprehensive programs in cognitive development, AI, and data science. Join us on a journey to unlock your potential.
      </CardTitle>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="danger"
    inverse
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
      Option 4
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
      At Brain Technologies, we believe in harnessing the power of technology to transform lives. Our experienced team delivers exceptional training and coaching services, focusing on cognitive growth, career advancement, and personal development.
      </CardTitle>
       </CardBody>
  </Card>
</>

<div className='free'>
    <h1>FREE COURSES</h1>
    <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="c.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        C
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Description
      </CardSubtitle>
      <CardText>
      C is a high-level, general-purpose programming language developed by Dennis Ritchie in 1972. It's a portable, efficient, and flexible language that provides low-level access to memory and hardware resources. C is widely used for operating systems, embedded systems, compilers, and games due to its performance, reliability, and compatibility. Its simplicity, readability, and versatility have made C a fundamental language in computer science, influencing many other programming languages, including C++, Java, and Python.
      </CardText>
      <Button color="success" outline type="submit" href='https://www.youtube.com/?app=desktop'>FREE</Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="pro.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        C++
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Description
      </CardSubtitle>
      <CardText>
      C++ is a high-level, general-purpose programming language developed by Bjarne Stroustrup as an extension of the C programming language. It was first released in 1985 and has since become one of the most popular programming languages in the world.
      </CardText>
      <Button color="success" outline type="submit" href='https://www.youtube.com/?app=desktop'>FREE</Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="cloud.webp"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Cloud Computing
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Description
      </CardSubtitle>
      <CardText>
      Cloud computing is a model of delivering computing services over the internet, where resources such as servers, storage, databases, software, and applications are provided as a service to users on-demand.
      </CardText>
      <Button color="success" outline type="submit" href='https://www.youtube.com/?app=desktop'>FREE</Button>
    </CardBody>
  </Card>
</CardGroup>
</div>

        </div>
        
        </Base>

    )
}

export default About;