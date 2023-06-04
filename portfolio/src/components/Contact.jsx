import React from "react";
import { Input, Form, FormGroup, Label, Button } from "reactstrap";

export const Contact = () => {
  return (
    <div className="contact">
      <Form
        className="form"
        action="https://formspree.io/f/xwkjjnpq"
        method="POST"
      >
        <FormGroup>
          <Label for="name">Name</Label>
          <Input id="name" name="name" placeholder="Enter your name" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="_replyto"
            placeholder="Enter your email"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label className="message">Message</Label>
          <Input
            id="message"
            name="message"
            type="textarea"
            placeholder="Enter your message"
          />
        </FormGroup>
        <Button className="button" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
