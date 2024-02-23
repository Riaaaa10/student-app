import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Adds from './components/Adds';
import Views from './components/Views';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path='/Adds' element={<Adds method='post' data={{name:'',age:'',department:''}}/>}></Route>
      <Route path='/Views' element={<Views/>}/></Routes>
    </div>
  );
}

export default App;
