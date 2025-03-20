import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }){
    let INIT_URL = "https://media.istockphoto.com/id/1325033552/photo/cloudscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=E7vfDzaC5CJEqdMXkLrEoT7yZAQ5j1NUsXZDKNCS-sc=";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const HOT_URL = "https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.webp?a=1&b=1&s=612x612&w=0&k=20&c=TD95uCJmBIrWzvqYSoG5v1bb0gbaUXof4RN8xWop_qg=";
    const RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
    console.log(info.feelslike);
   
    return (
     <div className='InfoBox'>
      <br /> <br />
       <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
               image={info.humidity >80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
               title="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity >80 ?<ThunderstormIcon /> : info.temp>15 ? < WbSunnyIcon /> : <AcUnitIcon />}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temperature : {info.temp}&deg;C</p>
                <p>Humidity : {info.humidity}</p>
                <p>Min temp : {info.tempMin}&deg;C</p>
                <p>Max Temp : {info.tempMax}&deg;C</p>
                <p>The weather can be describe as <b> {info.weather} </b> and  feels like : {info.feelsLike}&deg;C</p>
            </Typography>
         </CardContent>
     
        </Card>
       </div>

      </div>
    )
}