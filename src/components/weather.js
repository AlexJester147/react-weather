import React from "react";

class Weather extends React.Component{
  render(){
    return(
    <div>
      {this.props.city &&
      <div>
      <p>Местоположение : {this.props.city}, {this.props.country}</p>
      <p>Широта : {this.props.lat}, долгота : {this.props.lon}</p>
       <p>Погода : {this.props.weather}</p>
       <p>Давление : {this.props.pressure}</p>   
       <div className="weather-temp__wrap">
       <img src={this.props.img}/>   
       <p>{this.props.temp} °С</p>
       </div>  
     </div>
    } 
    <p>{this.props.message}</p>   
<p>{this.props.error}</p>
    </div>
    )
  }
    
}

export default Weather