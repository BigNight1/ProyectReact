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

export const ItemDetail = ({ product }) => {
  return (
    <div className="p-4">
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          sx={{ height: 155 }}
          image={product.img}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Price: {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/">
            <Button variant="contained" size="small" className="mx-2">
              Volver
            </Button>
          </Link>
          <Button variant="contained" size="small" className="mx-2">
            Buy
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
