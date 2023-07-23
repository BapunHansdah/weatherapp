import UserInput from './UserInput';
import Weather from './Weather'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import {TextWithIcon} from '../components/ui/Text';
import Back from '../assets/icons/back.svg';
import {useState} from 'react'
import useWeatherApi from '../hooks/useWeatherApi'
import Loading from '../components/Loading';

export default function Index(){
	const [city, setCity] = useState("");

    const {loading,error,showWeather,setShowWeather,weatherInfo,fetchWeather,getCurrentLocation} = useWeatherApi(city) 
   
    function goBack(){
 		setShowWeather(false)
 		setCity("")
    }

	async function getWeather(e,city){
		e.preventDefault()
		if(city){
     		await fetchWeather(city)
		}else{
		    await getCurrentLocation()
		}
	}


	return(
		 <Container>

		   {loading && 

		    <div className="overlay">
		    	<Loading/>
		    </div>
		   
		   }

			<Card  width={"350px"}>
			    
			    <div style={{padding:"10px 20px 10px 20px"}}>
			      <TextWithIcon onClick={goBack} icon={showWeather ? Back :null } iconSize={showWeather ? "20px" :null} text={"Weather App"} fontWeight={"900"} color={"#43ADFB"} textSize={"20px"}/>			    
			    </div>

			    <hr style={{borderTop: "1px solid hsl(260deg 13.24% 44.63% / 50%)"}}/>
				
				{
					showWeather ? 
					<Weather weatherInfo={weatherInfo} />
					:
				    <UserInput  error={error} getWeather={getWeather} setCity={setCity}/>
				}
			</Card>


		</Container>
		)
}