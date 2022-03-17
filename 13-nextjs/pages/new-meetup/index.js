import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (data) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/json'
      }
    });

    if(response.status === 201) {
      router.push('/');
    }


  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage;