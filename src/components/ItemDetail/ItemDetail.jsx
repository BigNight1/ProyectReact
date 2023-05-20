import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CounterContainer from "../Counter/CounterContainer";

export const ItemDetail = ({ product , onAdd , cantidadTotal}) => {
  return (
    <div className="p-4" style={{display: "flex",
    justifyContent:"center", }}>
      <Card style={{borderRadius:"15px"}} sx={{ maxWidth: 450 }}>
        <CardMedia
          component="img"
          sx={{ maxheight: 250 }}
          image={product.img}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {product.description}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Stock: {product.stock}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Price: {product.price}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {
            product.stock > 0 ? <CounterContainer stock={product.stock} onAdd={onAdd} initial={cantidadTotal}/> : <h3>no hay stock</h3>
          }
          
          <Link to="/">
            <Button variant="contained" size="small" className="mx-2">
              Volver
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
