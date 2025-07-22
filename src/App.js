
import './App.css';
import './components/Header.jsx'
import Header from './components/Header.jsx';
import WeatherData from './components/WeatherData.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <WeatherData/>
    </div>
  );
}

export default App;
