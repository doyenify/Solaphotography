import React from 'react';
import { Card, Row, Col, Button} from "react-bootstrap";
import Banner from '../img/Banner.png';
import Scapethree from '../img/Scapethree.png';

const About = () => {
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
          <h4 style={{color:"#ffffff"}}>Get to know about me</h4>
          </Card.Title>
          </Card.ImgOverlay>
          </Card>
       </div>
       <div>
          <Row className="mt-5">        
            <Col>
            <img
               className="d-block w-100"
               width="" height=""
                src={Scapethree}
                alt="Nature"
                />
            </Col>
            <Col className="mt-3">
            <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minus culpa est nostrum officia commodi,
            aspernatur quas illo? Repudiandae porro nobis, quas culpa ducimus voluptatum vero? Deserunt quis aut quam?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque temporibus molestiae 
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero deserunt sed eaque, autem quidem 
            hic harum eos perspiciatis dignissimos consectetur laudantium fuga sunt, 
            atque quasi expedita natus odio iure numquam!
            </div>
            </Col>
          </Row>
        </div>
      </main>
    </div>
    </>
   
  )
}

export default About