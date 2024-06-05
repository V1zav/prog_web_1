const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let contacts = [];

app.post('/contacts', (req, res) => {
  const contactData = req.body;
  const contactWithId = { ...contactData, id: uuidv4() };
  contacts.push(contactWithId);
  res.json(contactWithId);
});

app.get('/contacts', (req, res) => {
  res.json(contacts);
});

app.get('/contacts/:id', (req, res) => {
    console.log("Contacts array:", contacts); 
    const contactId = req.params.id;
    console.log("Requested contact ID:", contactId);
    if (Array.isArray(contacts) && contacts.length > 0) {
      const contact = contacts.find(contact => contact.id === contactId);
      if (contact) {
        res.json(contact);
      } else {
        res.status(404).send('Contact not found');
      }
    } else {
      res.status(404).send('Contacts list is empty');
    }
  });

app.delete('/contacts/:id', (req, res) => {
  const contactId = req.params.id;
  const index = contacts.findIndex(contact => contact.id === contactId);
  if (index !== -1) {
    console.log('Deleting contact:', contacts[index]);
    contacts.splice(index, 1);
    res.status(200).send('Contact deleted successfully');
  } else {
    res.status(404).send('Contact not found');
  }
});


app.put('/contacts/:id', (req, res) => {
  const contactId = req.params.id;
  console.log("Requested contact ID for editing:", contactId);
  const updatedContactData = req.body;
  let contactIndex = contacts.findIndex(contact => contact.id === contactId);
  if (contactIndex !== -1) {
    contacts[contactIndex] = { ...contacts[contactIndex], ...updatedContactData };
    res.json(contacts[contactIndex]);
  } else {
    res.status(404).send('Contact not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
