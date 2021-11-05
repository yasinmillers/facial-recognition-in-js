const mongoose = require("mongoose");
async function main() {
    await mongoose.connect("mongodb://localhost:27017/Employees");

    const ContactSchema = new mongoose.Schema({
        phone: String,
        name: String
    });
    const ContactModel = mongoose.model("Employee", ContactSchema);
    const ContactInstance = new ContactModel();
    const contacts = await ContactInstance.find();

    contacts.forEach((contacts) => {
        console.log(`the name is ${contact.name}`);
    });

};
main();