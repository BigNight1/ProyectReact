import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const ItemsCart = ({ items }) => {
  return (
    <div style={{display: "flex",justifyContent: "space-evenly", flexWrap: "wrap", minHeight: "90hv", padding:"40px", }}>
      {items.map((elemento) => {
        return (
          <Card sx={{ width: 345, height: 350 }} key={elemento.id}>
            <CardMedia
              sx={{ height: 140 }}
              image={elemento.img}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {elemento.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {elemento.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span  style={{color: "blue", fontWeight: "700", fontSize: "1.5rem",}}>{elemento.price}</span>
              </Typography>
            </CardContent>
            <CardActions style={{display: "flex", justifyContent: "center"}}>
              <Button size="small">Comprar</Button>
              <Button size="small">Ver más</Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemsCart;
