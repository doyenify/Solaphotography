import React from "react";
import { Button, Row, Col} from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <div>
     <main role="main" className="container">
       <div className="mt-5" style={{backgroundColor: "#14574F"}}>
       <div className="my-3 p-3 rounded shadow-sm">
         <Row className="mt-5 mb-5">
          <Col className="px-5"> <div style={{color:"#ffffff"}}> the Sola <br/> Photography</div></Col>
          <Col> <div style={{color:"#ffffff"}}>  Home </div> </Col> 
          <Col> <div style={{color:"#ffffff"}}>  Portfolio </div> </Col> 
          <Col> <div style={{color:"#ffffff"}}>  About </div> </Col>  
          <Col> <Button href="" style={{ backgroundColor:"#FFD600"}}>
          <h5 style={{color:"#14574F"}}> Hire Me </h5> </Button></Col>         
        </Row>
      </div>
     </div>
    </main>
    </div>   
  );
};
export default Footer;
