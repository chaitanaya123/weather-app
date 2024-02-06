import { useState,useEffect } from "react"
import axios from "axios";

export default function Card(props) {
    const [main, setMain] = useState({});
    const [weather, setWeather] = useState({});
    const [name, setName] = useState('');
    const title = props.title ;
    useEffect(() => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${title}&units=metric&appid=eedd52cc943dd9174f2c65178d154bdd`
          )
          .then((res) => {
            setMain(res.data.main);
            setWeather(res.data.weather[0]);
            setName(res.data.name);
            console.log(res.data.weather[0]);
          });
      }, [title]);
    
      const icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    
  return (
    <div style={{ backgroundColor: 'black', borderRadius: '10px', margin: '20px', padding: '10px', textAlign: 'center', color: '#646464', boxShadow: '0px 0px 20px #fff8cd' }}>
    <div style={{ fontWeight: 'bold', fontSize: '30px' }}>{name}</div>

    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
      <div style={{ textAlign: 'left', paddingLeft: '25px' }}>
        <div>MAX</div>
        <div>{main.temp_max} &#8451; </div>
      </div>
      <div style={{ textAlign: 'right', paddingRight: '25px' }}>
        <div>MIN</div>
        <div>{main.temp_min}&#8451; </div>
      </div>
    </div>

    <div>
      <div>{weather.main}</div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
        <img style={{ height: '80px', width: '80px' }} src={icon} alt="weather icon" />
      </div>
    </div>

    <div style={{ fontWeight: 'bold', fontSize: '30px' }}>
      {main.temp}&#8451;
      <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', paddingLeft: '50px', paddingRight: '50px' }}>
        <span>Feels Like </span>
        <span>{main.feels_like}&#8451; </span>
      </div>
    </div>
  </div>
  )
}
