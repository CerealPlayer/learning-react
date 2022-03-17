import Image from "next/image";

import { MongoClient } from "mongodb";
import { Fragment } from "react/cjs/react.production.min";

import MeetUpList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Image src="/vercel.svg" height={100} width={100}></Image>
      <MeetUpList meetups={props.meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://<user>:<password>@cluster0.hpooo.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const fetchedMeetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: fetchedMeetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
  };
}

export default HomePage;
