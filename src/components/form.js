import React from "react";

class Form extends React.Component{
  render(){
    return (
      <form className="weather-form" onSubmit = {this.props.weatherMethod}>
        <input className="weather-input" type="text" name="city"/>
        <button className="weather-button">Узнать погоду</button>
      </form>
    );
  }
}

export default Form