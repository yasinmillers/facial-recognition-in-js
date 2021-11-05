const mongoose = require("mongoose");


async function main() {
    await mongoose.connect("mongodb://localhost:27017/Employees");

    const ContactSchema = mongoose.Schema({
        phone: String,
        name: String
    });

    const contactModel = mongoose.model('Contact', ContactSchema);
    // Make sure you wait for db record
    const contacts = await contactModel.find();

    contacts.forEach((contact) => {
        console.log(`The name is: ${contact.name}`);
    });


    console.log("We are connected");
};

main();