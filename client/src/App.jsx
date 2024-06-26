import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { Services } from './pages/Services';
import { Partners } from './pages/Partners';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/partners' element={<Partners />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
