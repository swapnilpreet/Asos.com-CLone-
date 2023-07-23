import './App.css';
import AllRoutes from './Pages/AllRoutes';
import Loader from './components/Loader';
import { useSelector } from 'react-redux';

function App() {
  const {loading} =useSelector(state=>state.loaders)
  return (
        <>
        {/* <Loader/> */}
        {loading && <Loader/>}
        <AllRoutes/>
        </>
  );
}

export default App;
