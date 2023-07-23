import Input from '../components/ui/Input'
import Button from '../components/ui/Button';
import {TextWithIcon,Text} from '../components/ui/Text';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Pointer from '../assets/icons/pointer.svg';
import Thermometer from '../assets/icons/thermometer.svg';
import Drop from '../assets/icons/drop.svg';
import Grid from '../components/ui/Grid';
import Cloud from '../assets/icons/cloud.svg';
import {useState,useEffect} from 'react'


export default function Index({city,weatherInfo}){

	return(
		<>
		  <div className="weatherView">
				<img src={ `http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png` ||Cloud} width={"100px"}/>
				<Text text={`${weatherInfo.main.temp}°C`} textSize={"40px"} fontWeight="bold"/>
				<Text text={weatherInfo.weather[0].description} fontWeight={"400"} />
	            <TextWithIcon text={`${weatherInfo.name},${weatherInfo.sys.country}`} fontWeight={"400"} iconSize={"13px"} size={"10px"} icon={Pointer}/>
          </div>
          <Grid>
		        <TextWithIcon paragraph={"feels like"} fontWeight={"600"} icon={Thermometer} text={`${weatherInfo.main.feels_like}°C`} iconSize="30px"/>
		        <TextWithIcon paragraph={"Humidity"} fontWeight={"600"} icon={Drop} text={weatherInfo.main.humidity} iconSize="30px"/>
          </Grid>
	      </>
		)
}