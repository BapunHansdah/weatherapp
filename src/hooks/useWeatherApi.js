import {useState,useEffect} from 'react'
import axios from 'axios'
import {ERROR_TIME_OUT} from '../constants/const'


export default (city)=>{
 const [loading,setLoading]  = useState(false)
 const [error, setError] = useState(null);
 const [weatherInfo,setWeatherInfo] = useState({})
 const [showWeather,setShowWeather] = useState(false)


 function Api(byCity,lat,lon){
      let api; 

      const API_KEY =  import.meta.env.VITE_API_KEY

      if(byCity){
         return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      }else{
         return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      }       
      
    }

    async function fetchWeather(byCity,lat,lon){
        
       const api = Api(byCity,lat,lon)
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
                 fetchWeather(false,position.coords.latitude,position.coords.longitude)
              },
              (error) => {
                setError('Error getting geolocation: '+error?.message)
                console.error('Error getting geolocation:', error?.message);
                setTimeout(()=>{
                  setError(null)
                },ERROR_TIME_OUT)
              }
            );
      } else {
            console.error('Geolocation is not supported by this browser.');
            setError('Geolocation is not supported by this browser.')
            setTimeout(()=>{
               setError(null)
            },ERROR_TIME_OUT)
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

