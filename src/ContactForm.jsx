import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Button, Container } from 'react-bootstrap';
const ContactForm = ({ contact }) => {
  const { firstName, lastName, email, dob, gender } = contact;
  return (
    <>
      <Container>
        <Form className="form-container">
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={firstName}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              value={lastName}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={email}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date Of Birth</Form.Label>
            <DatePicker value={dob} />
          </Form.Group>

          <Form.Group className="mb-3 red">
            <Form.Label>Gender</Form.Label>
            <Form.Select>
              <option></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default ContactForm;
