


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductosCard({productos}) {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={productos.thumbnail} />
            <Card.Body>
                <Card.Title>{productos.title}</Card.Title>
                <Card.Text className='text-center'>
                    {productos.description}
                </Card.Text>
                <Card.Text className='text-center'>
                    {productos.price}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductosCard;