import Input from '../components/ui/Input'
import {TextWithHorizontalLine} from '../components/ui/Text';
import Button from '../components/ui/Button';
import Form from '../components/ui/Form';
export default function UserInput({city,setCity,getWeather,error,currentLocation}){

	function handleChange(e){
		setCity(e.target.value)
	}

	return(
		   <>
		   <Form onSubmit={(e)=>getWeather(e,true)}>
			    <Input error={error} onChange={handleChange} placeholder={"Enter city name"}/>
		   </Form>
		   <TextWithHorizontalLine text="or"/>
		   <Button onClick={(e)=>getWeather(e,false)} text="Get Device Location"/>
		  </>
		)
}