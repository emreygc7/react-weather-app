import Header from './components/Header';
import Weather from './components/Weather';
import { Toaster } from 'react-hot-toast'

function App() {

  
  return (
    <>
      <Toaster position='top-right' /> 
      <Header />
      <Weather />
    </>

  );
}

export default App;
