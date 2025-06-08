
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes/routes';

const App = () => {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
