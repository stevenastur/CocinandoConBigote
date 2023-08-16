import { Card, Button } from "react-bootstrap";

const Item = ({ id, nombre, descripción, precio, verProducto, textButton }) => {
  return (
    <>
      <Card key={id}>
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text> {descripción}</Card.Text>
          <Card.Text>$ {precio}</Card.Text>

          <Button variant="secondary" onClick={verProducto}>
            {textButton}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export { Item };
