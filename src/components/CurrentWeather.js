import { getCurrentWeather } from "../api"
import '../styles/components/CurrentWeather.scss'

const CurrentWeather = () => {
    const data = getCurrentWeather();
    const {
        cloud_cover,
        feels_like,
        humidity,
        icon_num,
        precipitation,
        summary,
        temperature,
        uv_index,
        visibility,
        wind,
    } = data

    const otherInfoWidgets = [
        {
            id: 0,
            icon: 'droplet',
            name: 'Precipitation',
            value: Math.round(precipitation.total),
            unit: "in/h"
        },
        {
            id: 1,
            icon: 'wind',
            name: 'Wind',
            value: Math.round(wind.speed),
            unit: "mph"
        },
        {
            id: 2,
            icon: 'moisture',
            name: 'Humidity',
            value: Math.round(humidity),
            unit: "%"
        },
        {
            id: 3,
            icon: 'sunglasses',
            name: 'UV index',
            value: Math.round(uv_index),
            unit: ""
        },
        {
            id: 4,
            icon: 'clouds-fill',
            name: 'Clouds cover',
            value: Math.round(cloud_cover),
            unit: "%"
        },
        {
            id: 5,
            icon: 'eye',
            name: 'Visibility',
            value: Math.round(visibility),
            unit: "in/h"
        },
    ]

    return (
        <div className="CurrentWeather">
            <div className="temperature">
                <div className="weather-icon">
                    <img
                        src={`${process.env.PUBLIC_URL}/dist/weather_icons/set01/big/${icon_num}.png`}
                        alt={summary}
                    />
                </div>
                <div className="value">
                    <div className="real">{temperature} ºF</div>
                    <div className="feels_like">Feels like {feels_like} ºF</div>
                </div>
                <div className="summary">{summary}</div>
            </div>
            <div className="other-infos">
                {otherInfoWidgets.map(({ id, icon, name, value, unit }) => {
                    return (
                        <div className="widget" key={id}>
                            <div className="widget-container">
                                <div className="info">
                                    <div className="icon">
                                        <i className={`bi bi-${icon}`}></i>
                                    </div>
                                    <div className="value>">{value} {unit}</div>
                                </div>
                                <div className="name">{name}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CurrentWeather