import './App.css';
import SearchForm from "./SearchForm";
import MainForecast from "./MainForecast";
import WeatherDetails from "./WeatherDetails";

function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="weather-app">
        <div className="row top-row">
        <div className="col-6">
              <p className="current-date">
                wednesday, april 28
                <br />
                9:31
              </p>
            </div>

            <div className="col-6">
              <SearchForm />
            </div>
        </div>
        <div className="row middle-row">
        <div className="col-6 left-side pe-5">
              <h1 id="main-city">Budapest</h1>
              <MainForecast />
            </div>
            <div className="col-6 right-side mt-5">
              <WeatherDetails />
            </div>
        </div>
      </div>
      <small className ="signature">
            <a href="https://github.com/brnnkva/react-weather-app" 
            target="_blank" rel="noreferrer">
            open-source code</a>  by <span>brnnkva</span>
          </small>
    </div>
    </div>
  );
}

export default App;
