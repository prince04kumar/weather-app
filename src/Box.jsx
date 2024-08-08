import WaterIcon from "@mui/icons-material/Water";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Box.css";
export default function Box({ info }) {
  return (
    <>
      <div className="box">
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            sx={{ height: 140 }}
            image="https://images.unsplash.com/photo-1553018622-b3e38e625798?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             <WaterIcon/> {info.city}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              <div>
                <p>temp: {info.temp - 273}^C</p>
                <p>feels_like: {info.feels_like - 273}</p>
                <p>grnd_level: {info.grnd_level}</p>
                <p>humidity: {info.humidity}</p>
                <p>pressure: {info.pressure}</p>
                <p>sea_level: {info.sea_level}</p>
               
              </div>
            </Typography>
          </CardContent>
         
        </Card>
      </div>
    </>
  );
}
