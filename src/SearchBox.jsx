import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let API_URL = "http://api.openweathermap.org/data/2.5/weather";
    let API_Key = "e4c0eaf8320369cdc15bfd2e8534d244"
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    let getWeatherInfo = async () =>{
     try{
        let response =    await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`); //units=metric means temp indeg celcious
        let jsonResponse = await response.json();
        
        // console.log(jsonResponse);
        let result = {
           city : city,
           temp : jsonResponse.main.temp,
           tempMin : jsonResponse.main.temp_min,
           tempMax : jsonResponse.main.temp_max,
           humidity : jsonResponse.main.humidity,
           feelsLike : jsonResponse.main.feels_like,
           weather : jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
     }
     catch(err){
        throw err;
     }
    }

    let handleChange = (event) =>{
        setCity(event.target.value);
    };
    let handleSubmit = async (event) =>{
       try{
        event.preventDefault();
        console.log(city);
        setCity("");
       let newInfo = await getWeatherInfo();
       updateInfo(newInfo);
       setError(false);
       }
       catch(err){
        setError(true);
       }
    }
    return(
        <div className='SearchBox'>
          
            <form action="" onSubmit={handleSubmit}>
             <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange} value={city} />
             <br /><br />
             <Button variant="contained" type='submit' >Search</Button>
             {error && <p style={{color: "red"}}>No such place exists !</p>}
            </form>
            
        </div>
    )
}