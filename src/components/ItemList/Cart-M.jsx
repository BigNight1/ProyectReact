import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cartstyles.css";

const ItemsCart = ({ items }) => {
  return (
    <div className="row">
      {items.map((elemento) => {
        return (
          <div  className="col-6 col-md-6 col-lg-4 p-5 " key={elemento.id}>
            <Card className="cartita" style={{ borderRadius: "15px", height: 600, }} >
              <div>
              <CardMedia
                style={{height: 300,  objectFit: "cover",margin: "1rem" }}
                image={elemento.img}
                title={elemento.title}
                />
                </div>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <span
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontSize: "1.5rem",
                    }}
                  >
                    <span className="small">$</span>
                    {elemento.price}
                  </span>
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {elemento.title}
                </Typography>
                <Typography variant="h7" color="text.secondary" >
                  {elemento.description}
                </Typography>
              </CardContent>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link to={`/itemDetail/${elemento.id}`}>
                  <Button variant="contained" size="small" style={{fontWeight:"700"}}>
                    Ver más
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsCart;
