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
import { FaArrowAltCircleLeft } from "react-icons/fa";

export const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div style={{ height: "90vh", display: "flex", flexDirection: "column" }}>
      <div
        className="p-2"
        style={{ display: "flex", justifyContent: "center", flex: "1" }}
      >
        <div
          style={{
            alignSelf: "flex-start",
            marginLeft: "0.5rem",
            marginTop: "0.5rem",
            display:"flex"
          }}
        >
          <Link to="/">
            <FaArrowAltCircleLeft
              style={{ color: "black", fontSize: "2.3rem", margin: "0.5rem" }}
            />
          </Link>
        </div>
        <Card style={{ borderRadius: "15px" }} sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            sx={{ maxheight: 400 }}
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
            {product.stock > 0 ? (
              <CounterContainer
                stock={product.stock}
                onAdd={onAdd}
                initial={cantidadTotal}
              />
            ) : (
              <h3>no hay stock</h3>
            )}
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
