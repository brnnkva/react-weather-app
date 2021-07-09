import './App.css';
import SearchForm from "./SearchForm";

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
      </div>
    </div>
    </div>
  );
}

export default App;
