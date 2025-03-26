import Base from '../components/Base';
import { Progress } from 'reactstrap';
import './Instagram.css';


const Instagram= ()=> {
    return(
        <Base>
        <div className='Contact'>
        <center><h1>CONTACT AS</h1></center>
            <img src='Contact.jpg'width={1300} height={500}></img>
               <Progress
        className="my-3"
        multi>
            <Progress animated 
                bar value="25">CONTACT</Progress>
            <Progress
            animated
            bar
            color="success"
            
            value="25">E-MAIL</Progress>
        <Progress
        animated
        bar
        color="warning"
        value="25">WHATSAPP</Progress>
         <Progress
        animated
        bar
        color="danger"
        value="25">ADDRESS</Progress>
        </Progress></div>
        <div className='detail'>
   <p><img src='calll.png'width={100}></img>
            +91 9965135919</p>
    <p><img src='email.jpg'width={100}></img>
    <a href="mailto:braintechnologies433@gmail.com">braintechnologies433@gmail.com</a></p>
    <p><img src='images.jpeg'width={100}></img>
            +91 7871678490</p>
    <p><img src='map.png'width={100}></img>
    115/2, 4rd cross, Gandhi Nagar, Electronic City Phase 2, Electronic City, Bengaluru, Karnataka 560100,
    INDIA</p>

       </div>


   </Base>
    )
}

export default Instagram;
