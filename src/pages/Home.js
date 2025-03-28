import React from 'react';
import Base from '../components/Base';
import './Home.css';
import { CardHeader,Toast,ToastHeader,ToastBody,Card,CardBody,CardImg,Button
  ,CardSubtitle,CardTitle,CardGroup,CardText
 } from 'reactstrap';

const Home= () => {
  return (
    <Base>
    <div className='color'>
    <card>
      <CardHeader>
        <div className='brain'><marquee><h1>Welcome to brain technologies</h1></marquee></div>
    <div className="slider">
      <figure>
        <div className="slide">            
          <h1>let's Join Us Learning</h1>
          <img src="discuss.jpg" alt="" />
        </div>
        <div className="slide">
          <h1>Focus On Your Goal</h1>
          <img src="book.avif" alt="" />
        </div>
      </figure>
    </div>
    </CardHeader>
    <cardbody>
      <div className='ss'>
    <center><h1>About AS</h1></center></div>

    <div className="p-3 bg-success my-4 rounded">
    <Toast>
      <ToastHeader>
        OUR Technologies
      </ToastHeader>
      <ToastBody>
      Empowering individuals to unlock their full potential through cutting-edge brain training and coaching techniques.To become a leading coaching centre for cognitive development, neuroplasticity, and brain-computer interface training
        
      </ToastBody>
    </Toast>
  </div>
    <div className="p-3 bg-info my-4 rounded">
    <Toast>
      <ToastHeader>
        Features
      </ToastHeader>
      <ToastBody>
        State-of-the-art equipment and software.Expert coaches and trainers.Personalized training plans.Small group sessions for optimal learning. Continuous progress monitoring and feedback.

      </ToastBody>
    </Toast>
  </div>
  <div className="p-3 bg-warning my-2 rounded">
    <Toast>
      <ToastHeader>
        Target Audience
      </ToastHeader>
      <ToastBody>
     Students seeking academic improvement. Professionals looking to enhance cognitive performance. Individuals with neurological disorders or injuries. Seniors seeking cognitive maintenance. Anyone interested in brain development and optimization.

      
      </ToastBody>
    </Toast>
    </div>
    <div className='courses'> 
    <center><h1>ALL COURSES</h1></center></div>

    <div classname='all'>

    <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="python-fullstack.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        PYTHON FULL-STACK
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h5"
      >
        Description
      </CardSubtitle>
      <CardText>
      A Python Full Stack Developer is a professional who has expertise in both front-end and back-end development using Python programming language. They are responsible for designing, developing, testing, and deploying web applications, web services, and mobile applications.
  <p><img src='rupees.png'width={50}></img>35,000/-</p>
  <p><img src='clock.avif'width={50}></img>Duration-4 Months</p>
  </CardText>
  <Button color="success" outline type="submit" href='/About1'>Know More</Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="java.jpeg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Java-Full Stack
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Description
        </CardSubtitle>
      <CardText>
      Java Full Stack refers to the development of web applications using Java programming language, encompassing both front-end and back-end development.

        <p><img src='rupees.png' width={50}></img>37,000/-</p>
        <p><img src='clock.avif' width={50}></img>Duration-4 Months</p>
      </CardText>
      <Button color="success" outline type="submit" href='/About2'>Know More</Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="data-science.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Data Science
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Description
      </CardSubtitle>
      <CardText>
      Data Science is a multidisciplinary field that combines elements of computer science, statistics, and domain-specific knowledge to extract insights and knowledge from data. It involves using various techniques, tools, and algorithms to analyze and interpret complex data sets, often to inform business decisions or solve real-world problems.
        <p><img src='rupees.png'width={50}></img>25,000/-</p>
        <p><img src='clock.avif'width={50}></img>Duration-2 Months</p>
      </CardText>
      <Button color="success" outline type="submit" href='/About3'>Know More</Button>
    </CardBody>
  </Card>
</CardGroup>
    </div>
    <div className='off'>
    <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="devops.webp"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        DEVOPS
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Description
      </CardSubtitle>
      <CardText>
      DevOps is a set of practices, principles, and cultural philosophies that aims to improve the collaboration and communication between software development (Dev) and IT operations (Ops) teams. The primary goal of DevOps is to shorten the system development life cycle while delivering features, fixes, and updates frequently and reliably.
        <p><img src='rupees.png'width={50}></img>22,000/-</p>
        <p><img src='clock.avif'width={50}></img>Duration-2 Months</p>
      </CardText>
      <Button color="success" outline type="submit" href='/About4'>Know More</Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="AWS.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        AWS
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Description
      </CardSubtitle>
      <CardText>
        AWS (Amazon Web Services) is a comprehensive cloud computing platform provided by Amazon that offers a wide range of services for computing, storage, databases, analytics, machine learning, and more. With AWS, individuals, businesses, and governments can leverage Amazon's scalable and flexible technology infrastructure to build, deploy, and manage applications and workloads in a secure, reliable, and cost-effective manner.
        <p><img src='rupees.png'width={50}></img>20,000/-</p>
        <p><img src='clock.avif'width={50}></img>Duration-2 Months</p>
      </CardText>
      <Button color="success" outline type="submit" href='/About5'>Know More</Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="cyber.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Cyber Security
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Description
      </CardSubtitle>
      <CardText>
      A cybersecurity course is an educational program that teaches individuals how to protect computer systems, networks, and sensitive information from unauthorized access, use, disclosure, disruption, modification, or destruction. The course covers various aspects of cybersecurity, including:
        
        <p><img src='rupees.png'width={50}></img>28,000/-</p>
        <p><img src='clock.avif'width={50}></img>Duration-3 Months</p>
      </CardText>
      <Button color="success" outline type="submit" href='/About6'>Know More</Button>
    </CardBody>
  </Card>
</CardGroup>
      
    </div>
  <div className='one'>

  </div>

    
    </cardbody>
    </card>
</div>

<div classname='demo'>
  <div className='our'>
<center><h1>OUR Technologies Benefits</h1></center>

</div>
  <center><img src='free.png'width={100}></img><p>Free Demo Classes</p>
  <img src='train.webp'width={100}></img><p>100% Hands of Training</p>
  <img src='count.jpg'width={100}></img><p>Career Counselling</p>
  <img src='price.jpg'width={100}></img><p>Affordable Fee</p>
  <img src='cate.jpg'width={100}></img><p>Certificate Providing
</p></center>
</div>



    </Base>
  );
};



export default Home;
