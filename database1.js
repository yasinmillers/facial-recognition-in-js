const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

async function main() {
    try {
        await client.connect();

        const employeeDb = client.db("Employees");
        const contactsCollection = employeeDb.collection("contacts");

        const emma = await contactsCollection.insertOne({ name: "Musumba Emmanuel", phone: "25679485645" });
        console.log(`The name of employee is: ${emma.name}`);
        console.log(`Phone is: ${emma.phone}`);

        console.log("Reaching here means all above is okay");

    } catch (error) {
        console.log(error.stack);
    }
}

main();