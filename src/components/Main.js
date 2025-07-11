import CurrentWeather from './CurrentWeather'
import '../styles/components/Main.scss'

const Main = () => {
    return (
        <div className="main">
            <CurrentWeather />
            {/* <Forecast type="hourly" title="Hourly Forecast" />
            <Forecast type="daily" title="21 Days Forecast" /> */}
        </div>
    )
}

export default Main