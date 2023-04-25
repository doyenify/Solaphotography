import React from 'react';
import { Card, Row, Col, Button} from "react-bootstrap";
import Banner from '../img/Banner.png';
import Nature from '../img/Nature.png';
import City from '../img/City.png';
import Building from '../img/Building.png';
import Documentary from '../img/Documentary.png';
import Environment from '../img/Environment.png';
import Road from '../img/Road.png';
import Marketplace from '../img/Marketplace.png';
import Gym from '../img/Gym.png';
import School from '../img/School.png';

const Portfolio = () => {
  return (
    <>
    <div>
      <main>
        <div>
        <Card className="mt-5">
        <img src={Banner} alt="fluid" width="" height="200" className="rounded"/>
        <Card.ImgOverlay>
        <br></br>
        <Card.Title className="text-center"> <br /> <br />
        <h4 style={{color:"#ffffff"}}>Amazing Pictures</h4>
        </Card.Title>
        </Card.ImgOverlay>
        </Card>
        </div>
        <div>         
          <Row  className="mt-5">
            <Col>
            <img
               className="d-block w-100"
                src={Nature}
                alt="Nature"
                />
                <br />
            <h4>Nature</h4>
            </Col>
            <Col>
            <img
               className="d-block w-100"
                src={City}
                alt="City"
                />
                <br />
            <h4>City</h4>
            </Col> 
            <Col>
            <img
               className="d-block w-100"
                src={Building}
                alt="Building"
                />
                <br />
            <h4>Building</h4>
            </Col> 
          </Row>
        </div>
        <div>
          <Row className="mt-5">
            <Col>
            <img
               className="d-block w-100"
                src={Documentary}
                alt="Documentary"
                />
                <br />
            <h4>Documentary</h4>
            </Col>
            <Col>
            <img
               className="d-block w-100"
                src={Environment}
                alt="Environment"
                />
                <br />
            <h4>Environment</h4>
            </Col>
            <Col>
            <img
               className="d-block w-100"
                src={Road}
                alt="Road"
                />
                <br />
            <h4>Road</h4>
            </Col>
          </Row>
        </div>
        <div>
          <Row className="mt-5">
            <Col>
            <img
               className="d-block w-100"
                src={Marketplace}
                alt="Marketplace"
                />
                <br />
            <h4>Marketplace</h4>
            </Col>
            <Col>
            <img
               className="d-block w-100"
                src={Gym}
                alt="Gym"
                />
                <br />
            <h4>Gym</h4>
            </Col>
            <Col>
            <img
               className="d-block w-100"
                src={School}
                alt="School"
                />
                <br />
            <h4>School</h4>
            </Col>
          </Row>
        </div>
      </main>
    </div>
    </>
  )
}

export default Portfolio