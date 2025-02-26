import {Link} from 'react-router';

function ProductList ({ products }) {
    //Returnerar JSX
    return (
        <div>
            <h1>Produkter</h1>
            <span>Du har {products.length} produkter i korgen</span>
            <div>
                {products.map((product) => (
                    <div>
                    key={product.id} 
                    <h2>{product.productName}</h2>
                    <Link to={`/productdetails/${products.id}`}> <img src={product.image}></img></Link>
                    <span>{product.description}</span>
                    <span>{product.brand}</span>
                    <span>{product.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList; 