import Base from '../components/Base';
import {CardHeader,CardBody,CardTitle,CardText,Card} from 'reactstrap';
import './service.css';

const Services = ()=> {
    return(
        <Base>
           <div className='service'>
           <center><h1>Services</h1></center>
           <img src='service.webp'width={1300}></img>

           <>
  <Card
    className="my-2"
    color="primary"
    outline
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
    Cognitive Development Services
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Description
      </CardTitle>
      <CardText>
      - Brain-Computer Interface Training
- Neuroplasticity Enhancement Programs
- Cognitive Coaching and Mentoring
- Personalized Brain Development Plans
      </CardText>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="secondary"
    outline
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
    Artificial Intelligence Services

    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Description
      </CardTitle>
      <CardText>
      - AI-Powered Data Analysis
- Machine Learning Model Development
- Natural Language Processing Solutions
- Predictive Analytics and Modeling
      </CardText>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="success"
    outline
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
    Training and Development Services
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Description
      </CardTitle>
      <CardText>
      - AI and Data Science Training Programs
- Cognitive Development Workshops
- Leadership Coaching and Mentoring
- Team Building and Facilitation
      </CardText>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="danger"
    outline
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
    Software Development Services
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Description
      </CardTitle>
      <CardText>
        
- Custom Software Solutions
- Web and Mobile Application Development
- Cloud-Based Software Solutions
- Maintenance and Support Services

      </CardText>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="warning"
    outline
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
    Consulting Services
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Description
      </CardTitle>
      <CardText>
      - IT Consulting and Implementation
- Business Process Optimization
- Digital Transformation Consulting
- Technology Strategy Development
      </CardText>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="info"
    outline
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
    Data Analytics Services
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Description
      </CardTitle>
      <CardText>
      - Data Analysis and Visualization
- Business Intelligence Solutions
- Predictive Analytics and Modeling
- Data Management and Integration
      </CardText>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="light"
    outline
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
    Innovation Services
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Description
      </CardTitle>
      <CardText>
      - Innovation Workshops and Ideation
- Product Development and Prototyping
- Design Thinking and Strategy
- Innovation Consulting and Coaching
      </CardText>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="dark"
    outline
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
    Other Services
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Description
      </CardTitle>
      <CardText>
      - Cybersecurity Solutions
- IT Support and Management
- Digital Marketing Services
- Graphic Design and Branding
      </CardText>
    </CardBody>
  </Card>
</>

        </div>
        </Base>
    )
}

export default Services;