import "../scss/products.scss"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"


const Products = () => {
    const [products, setProducts] = useState([])
    const URL = "https://sophisticated-humane-dandelion.glitch.me/";

    useEffect(() => {
        const fetchData = async () => {
            try{
                const resp = await fetch(URL)
                const result = await resp.json()
                setProducts(result)
            } catch (error) {
                console.error("Error:", error)
            }
        }
        fetchData()
    }, [])


    
 const handleDelete = async (productId) => {
    try {
        const resp = await fetch(`${URL}/${productId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (resp.ok) {
            const updatedProducts = products.filter((product) => product.id !== productId);
            setProducts(updatedProducts);
        } else {
            console.log(`Error deleting ${productId}`);
        }
    } catch (error) {
        console.error(error);
    }
};

    return (
<>
<nav>
    <Link to='/'>Products</Link>
    <Link to='/form'>Form</Link>
</nav>
<section id="app" className="products">
    {products.map((product) => (
        <div className="product" key={product.id}>
            <img src={product.image} alt={product.title}/>
            <p>{product.title}</p>
            <p className="price">€{product.price}</p>
            <button onClick={() => handleDelete(product.id)} className="button">Ištrinti</button>
        </div>
        ))}
</section>
</>
    )
}

export default Products