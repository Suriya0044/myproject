import React from 'react';
import Base from '../components/Base';
import { Button } from 'reactstrap';
import './About1.css';

const about5 = () => {
    return (

        <Base>
        

        <div className='myfile'>
        <h1>AWS</h1>
        <img src='AWS.jpg'width={1000}></img>
        <p>AWS (Amazon Web Services) is a comprehensive cloud computing platform provided by Amazon that offers a wide range of services for computing, storage, databases, analytics, machine learning, and more. With AWS, individuals, businesses, and governments can leverage Amazon's scalable and flexible technology infrastructure to build, deploy, and manage applications and workloads in a secure, reliable, and cost-effective manner.
</p>
<ul><h3>
Some key features and services of AWS include:</h3><li>

Compute Services: EC2 (virtual servers), Lambda (serverless computing), Elastic Beanstalk (managed platform)</li><li>

Storage Services: S3 (object storage), EBS (block storage), Elastic File System (file storage)</li><li>

Database Services: Relational Database Service (RDS), DynamoDB (NoSQL database), DocumentDB (document-oriented database)</li><li>

Security, Identity, and Compliance: IAM (identity and access management), Cognito (user identity), Inspector (security assessment)</li><li>

Analytics: Redshift (data warehousing), QuickSight (fast, cloud-powered business intelligence)</li><li>

Machine Learning: SageMaker (build, train, deploy ML models), Comprehend (natural language processing)</li><li>

Application Services: API Gateway (API management), Elastic Transcoder (media transcoding)</li><li>

Deployment Services: CloudFormation (infrastructure as code), CodeDeploy (application deployment)</li></ul>

<ul><h3>AWS provides various benefits, including:</h3>
<li>
Scalability and flexibility</li><li>
Cost-effectiveness</li><li>
Reliability and uptime</li><li>
Security and compliance</li><li>
Faster time-to-market</li></ul>

<ul><h3>AWS is widely used across industries, including:</h3>

<li>Web and mobile applications</li><li>
Enterprise IT</li><li>
Gaming</li><li>
Healthcare</li><li>
Finance</li><li>
Government</li><li>
Education</li><li>
Media and entertainment</li></ul>
<p>
If you have specific questions about AWS or need help with a particular service, feel free to ask!</p>
<ul>
    <h3>DURATION</h3>
    
    <li>
        oneday class - 2 or 3 hours</li><li>
        Practices - 1 hours</li><li>
        Total Duration - 2 Months 
        </li></ul> 
  
        </div>
        <Button color="success" outline type="submit" href='/Instagram'>Join Now</Button>
        </Base>

    )
}

export default about5;