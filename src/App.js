import Home from './Home';
import Search from './Search';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/search/:search' exact Component={Search} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}
export default App;
 