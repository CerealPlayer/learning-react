import { MongoClient, ObjectId } from "mongodb";

import MeetupItemDetails from "../../components/meetups/MeetupItemDetails";

const MeetupDetails = (props) => {
  const meetup = props.meetupData;

  return (
    <MeetupItemDetails
      title={meetup.title}
      image={meetup.image}
      address={meetup.address}
      description={meetup.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://<user>:<password>@cluster0.hpooo.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetupsIds = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetupsIds.map((meetup) => ({
      params: { meetUpId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetUpId;
  const client = await MongoClient.connect(
    "mongodb+srv://<user>:<password>@cluster0.hpooo.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const currMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

  client.close();

  return {
    props: {
      meetupData: {
        id: currMeetup._id.toString(),
        title: currMeetup.title,
        address: currMeetup.address,
        image: currMeetup.image,
        description: currMeetup.description
      }
    }
  }
}

export default MeetupDetails;
