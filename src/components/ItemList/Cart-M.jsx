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
import "./cartstyles.css"

const ItemsCart = ({ items }) => {
  return (
    <div className="row">
      {items.map((elemento) => {
        return (
          <div className="col-6 col-md-6 col-lg-4 p-5" key={elemento.id}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 250 }}
                image={elemento.img}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {elemento.title}
                </Typography>
                <Typography variant="h7" color="text.secondary">
                  {elemento.description}
                </Typography>
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
              </CardContent>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link to={`/itemDetail/${elemento.id}`}>
                  <Button variant="contained" size="small">
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
