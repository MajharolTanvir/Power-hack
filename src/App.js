import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from 'react-query';
import Loading from './Shared/Loading';

function App() {
  const { data: bills, isLoading, refetch } = useQuery('bills', () => fetch('https://power-pump.herokuapp.com/billing-list').then(res => res.json()))

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="App">
      <Navbar
        bills={bills}
        refetch={refetch}
      ></Navbar>
      <Routes>
        <Route path='/' element={<Home
          bills={bills}
          isLoading={isLoading}
          refetch={refetch}
        ></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
