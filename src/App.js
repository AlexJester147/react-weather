import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = '4c4edf0a2984921551244f62f35d8c1e';


class App extends React.Component{

  state = {
temp:undefined,
city:undefined,
weather:undefined,
wind:undefined,
lat:undefined,
lon:undefined,
country:undefined,
pressure:undefined,
error:undefined,
message:undefined
  }



  gettingWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {

    const API_URL = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&lang=ru&appid=' + API_KEY +'&units=metric');
    const data = await API_URL.json()
console.log(data)
if (data.name){
    this.setState({
      temp:Math.ceil(data.main.temp),
      city:data.name,
      weather:data.weather[0].description,
      wind:Math.ceil(data.wind.speed),
      lat:data.coord.lat.toFixed(2),
      lon:data.coord.lon.toFixed(2),
      country:data.sys.country,
      pressure:data.main.pressure,
      error:undefined,
      img:data.weather[0].icon,
      message:data.message
    })
}

else if (data.message){
  this.setState({
    temp:undefined,
    city:undefined,
    weather:undefined,
    wind:undefined,
    lat:undefined,
    lon:undefined,
    country:undefined,
    pressure:undefined,
    error:undefined,
    img:undefined,
    message:'Город не найден :('
  })
}
          
  } else {
    this.setState({
      temp:undefined,
      city:undefined,
      weather:undefined,
      wind:undefined,
      lat:undefined,
      lon:undefined,
      country:undefined,
      pressure:undefined,
      error:'Введите название города',
      message:undefined
    })
  }

  }
  


  render(){
    return (
      <div>
        <Info/>
        <Form weatherMethod={this.gettingWeather}/>
        <Weather
        temp={this.state.temp}
        city={this.state.city}
        weather={this.state.weather}
        wind={this.state.wind}
        lat={this.state.lat}
        lon={this.state.lon}
        country={this.state.country}
        pressure={this.state.pressure}
        error={this.state.error}
        message={this.state.message}
        img={"https://openweathermap.org/img/w/"+this.state.img+".png"}
        />
      </div>
    );
  }
}

export default App;