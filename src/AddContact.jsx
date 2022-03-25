import ContactForm from './ContactForm';

import { Container } from 'react-bootstrap';

const AddContact = ({ contact }) => {
  return (
    <>
      <Container>
        <h1 className="mt-5 mb-5 text-center">Add Contact</h1>
        <ContactForm contact={contact} />
      </Container>
    </>
  );
};

export default AddContact;
