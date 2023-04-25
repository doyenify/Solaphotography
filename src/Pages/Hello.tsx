import React from 'react';
import { Card, Row, Col, Button, Form} from "react-bootstrap";
import Banner from '../img/Banner.png';
import Contact from '../img/Contact.png';
import { Formik, } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = Yup.object().shape({
name: Yup.string().required(), 
email: Yup.string().email('Invalid email').required('Required'),
number: Yup.number().required().positive().integer(), 
message: Yup.string().required(), 
});

const Hello = () => {
const notify = () => toast("We have recieved your message, We would get back to you shortly!");
  
const handleSubmit=(name:string, email:string, number:string, message:string)=>{
      console.log(email)
      // e.preventDefault();
      const data ={
        Name:name,
        Email:email,
        Number:number,
        Message:message,
      }
        axios.post('https://sheet.best/api/sheets/01bed241-fce6-4ac3-8da4-c227f30cc851', data). then ((response)=>{
        console.log(response);
        }) 
      }
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
          <h4 style={{color:"#ffffff"}}>Get in touch with us</h4>
          </Card.Title>
          </Card.ImgOverlay>
          </Card>
         </div>
        <div>
      <Row className="mt-5">        
      <Col className="mt-5">
      <Formik
      validationSchema={schema}
      onSubmit={(values, actions) => handleSubmit(values.name, values.email, values.number, values.message)
      // console.log(values)
      }
      initialValues={{
        name: '',
        email: '',
        number: '',
        message: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,      
        errors,

      }) => (
    
      <Form noValidate onSubmit={handleSubmit} style={{color: "#020A0D"}}>
      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Full Name</Form.Label>
        <Form.Control 
         type="text"
         placeholder="Enter your fullname"
         name="name"
         value={values.name}
         onChange={handleChange}
         isInvalid={!!errors.name}
       />
       <Form.Control.Feedback type="invalid">
         {errors.name}
       </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
         type="text"
         placeholder="Enter your email address"
         name="email"
         value={values.email}
         onChange={handleChange}
         isInvalid={!!errors.email}
       />
       <Form.Control.Feedback type="invalid">
         {errors.email}
       </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control 
         type="text"
         placeholder="Enter your phone number"
         name="number"
         value={values.number}
         onChange={handleChange}
         isInvalid={!!errors.number}
       />
       <Form.Control.Feedback type="invalid">
         {errors.number}
       </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Message</Form.Label>
        <Form.Control 
        as="textarea" 
        placeholder="Write your message" 
        rows={5} 
        name="message"
        value={values.message}
        onChange={handleChange}
        isInvalid={!!errors.message}
       />
       <Form.Control.Feedback type="invalid">
         {errors.message}
       </Form.Control.Feedback>
      </Form.Group>
       <Button style={{ backgroundColor: "#000000"}}  type="submit" onClick={notify}>Submit </Button>
      {/* <Button variant="success" type="submit" onClick={notify}>Submit </Button> */}
      <ToastContainer />
    </Form>
    )}
    </Formik>
    </Col>
     <Col>
       <img
       className="d-block w-100"
       width="" height=""
       src={Contact}
       alt="Contact"
        />
       </Col>
       </Row>
      </div>
     </main>
    </div>
  </>
   
  )
}

export default Hello