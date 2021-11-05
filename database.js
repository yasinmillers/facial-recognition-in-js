const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

try {
    client.connect();
    console.log("server connected");
    const employeedb = client.db("Employees");

    const contactsCollection = employeedb.collection("contacts");
    const allContacts = contactsCollection.find();

    allContacts.forEach(function(contact) {
        console.log(contact.name)
    })

} catch (error) {
    console.log(error.stack);
}