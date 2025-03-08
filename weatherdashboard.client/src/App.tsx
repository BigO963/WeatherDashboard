import TimeAndLocation from './components/TimeAndLocation';


/*import { useEffect, useState } from 'react';*/

/*interface Forecast {
    id: number;
    date: string;
    temperatureC: number;
    summary: string;
    temperatureF: number;
    location: string;
}*/

function App() {
    /*const [forecasts, setForecasts] = useState<Forecast[]>();*/

    /*useEffect(() => {
        populateWeatherData();
    }, []);*/

   /* const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>TempC</th>
                    <th>Summary</th>
                    <th>TempF</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.id}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.summary}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.location}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tableLabel">Weather List</h1>
            <p>This component demonstrates fetching weather data from the server.</p>
            {contents}
        </div>
    );

    async function populateWeatherData() {
        try {
            const response = await fetch('weatherforecasts');
            const data = await response.json();

            console.log("API Response:", data);

            setForecasts(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }*/

    return <TimeAndLocation />
}

export default App;