import React from 'react';
import { Button, Row, Col} from "react-bootstrap";
import Imageheader from '../img/Imageheader.png';
import Scapeone from '../img/Scapeone.png';
import Scapetwo from '../img/Scapetwo.png';
import Scapethree from '../img/Scapethree.png';
import Scapefour from '../img/Scapefour.png';
import Scapefive from '../img/Scapefive.png';

const Home = () => {
  return (
    <> 
    <div>
        <main> 
            <div style={{backgroundColor:"#E9FDFB"}}>
                <Row className="mt-5">
                    <Col className="mt-5 px-5">
                        <h1 className = "mt-5"></h1>                                               
                        <h1>
                         Capturing <br/>
                         the <br/>
                         moments <br/>
                         <h1 style={{ color:"#14574F"}}> that captivate your <br/> heart </h1>  
                         </h1>
                    </Col>
                    <Col className="mt-5 px-5"> 
                        <img
                        className="d-block w-100"
                        width="" height=""
                        src={Imageheader}
                        alt="Headerone"
                        />
                    </Col>
                </Row>
            <div className="text-left roundec">
             <Button href="" style={{ backgroundColor:"#FFD600"}}>
             <h5 style={{color:"#14574F"}}> Book Me </h5> </Button> 
             </div>
            </div>
            <div className='text-center mt-5'>
                <h4>Gallery</h4>
                <h2>Our Latest Moments</h2>
            </div>
            <div>
                <Row className="mt-5">
                    <Col>
                    <img
                        className="d-block w-100"
                        src={Scapeone}
                        alt="Headerone"
                        />
                    </Col>
                    <Col>
                    <img
                        className="d-block w-100"
                        src={Scapetwo}
                        alt="Headerone"
                        />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                    <img
                        className="d-block w-100"
                        src={Scapethree}
                        alt="Headerone"
                        />
                    </Col>
                    <Col>
                    <img
                        className="d-block w-100"
                        src={Scapefour}
                        alt="Headerone"
                        />
                    </Col>
                    <Col>
                    <img
                        className="d-block w-100"
                        src={Scapefive}
                        alt="Headerone"
                        />
                    </Col>
                </Row>
            </div>
        </main>
    </div>
    </>
  )
}
export default Home

