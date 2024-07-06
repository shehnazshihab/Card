// import React,{ useEffect, useState } from 'react'
// import axios from "axios"
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const Cardcreate = () => {
//     var[output,setOutput]=useState([])
//     useEffect(()=>{
//         axios.get("https://fakestoreapi.com/products")
//         .then((res)=>{
//             console.log(res.data);
//             setOutput(res.data);
//         })
//         .catch((error)=>{
//             console.log(error);
//         });
//     },[])
//   return (
//     <div style={{display:'flex',flexWrap:'wrap',gap:'20px'}}>
//       {output.map((value,i)=>(
//          <Card sx={{ maxWidth: 345 }}>
//          <CardMedia
//            sx={{ height: 140 }}
//            image={value.image}
//            title={value.title}
//          />
//          <CardContent>
//            <Typography gutterBottom variant="h5" component="div">
//              {value.title}
//            </Typography>
//            <Typography variant="body2" color="text.secondary">
//              {value.description}
//            </Typography>
//          </CardContent>
//          <CardActions>
//            <Button size="small">Share</Button>
//            <Button size="small">Learn More</Button>
//          </CardActions>
//        </Card>
//       ))}
//     </div>
//   )
// }

// export default Cardcreate
