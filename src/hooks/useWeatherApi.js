import {useState,useEffect} from 'react'
import axios from 'axios'
import {ERROR_TIME_OUT} from '../constants/const'
const API_KEY = "676bbf8e8687ef020228e3af4faae26a"

export default (city)=>{
 const [loading,setLoading]  = useState(false)
 const [error, setError] = useState(null);
 const [weatherInfo,setWeatherInfo] = useState({})
 const [currentLocation,setCurrentLocation] = useState(null)
 const [showWeather,setShowWeather] = useState(false)


 function Api(byCity){
      let api; 

      if(byCity){
         return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      }else{
         return `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.lat}&lon=${currentLocation.lon}&appid=${API_KEY}&units=metric`
      }       
      
    }

    async function fetchWeather(byCity){
        
       const api = Api(byCity)
       setLoading(true)
      try{
         await axios.get(api).then(res=>{
            console.log(res.data)
            setWeatherInfo(res.data)
            setLoading(false)
            setShowWeather(true)
         })
      }catch(e){
         console.log(e)
         setError(e.response.data.message)
         setLoading(false)
         setTimeout(()=>{
            setError(null)
         },ERROR_TIME_OUT)
      }
    }

    

   async function getCurrentLocation(){
      if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setCurrentLocation({
                  lat: position.coords.latitude,
                  lon: position.coords.longitude,
                });
              fetchWeather(false)
              },
              (error) => {
                console.error('Error getting geolocation:', error);
              }
            );
      } else {
            console.error('Geolocation is not supported by this browser.');
      }
    }


 return {
         loading,
         error,
         weatherInfo,
         setWeatherInfo,
         showWeather,
         setShowWeather,
         fetchWeather,
         getCurrentLocation
         }
}

