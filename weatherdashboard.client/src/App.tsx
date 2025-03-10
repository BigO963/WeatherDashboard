import TimeAndLocation from './components/TimeAndLocation';
import Summary from './components/Summary';
import FiveDayForecast from './components/FiveDayForecast';
import HourlyForecast from './components/HourlyForecast';

function App() {
  

    return (
        <div className="Wrapper w-100 m-0 gradient-custom">
            <div className="Top w-100 h-50 justify-content-center">
                <TimeAndLocation />
                <Summary />     
            </div>
            <div className="Top w-100 h-50 justify-content-center mt-5">
                <FiveDayForecast />
                <HourlyForecast />
            </div>
        </div>
    )
   
}

export default App;