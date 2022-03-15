import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';
import Counter from './components/Counter';


function App() {
  const isAuth = useSelector(state => state.auth.isAuth)
  return (
    <Fragment>
      <Header />
      {isAuth && <UserProfile />}
      {!isAuth && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
