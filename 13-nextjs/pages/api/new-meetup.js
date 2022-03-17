import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://<user>:<password>@cluster0.hpooo.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    await meetupsCollection.insertOne(data);
    client.close();

    res.status(201).json({message: 'success'});
  }
}

export default handler;
