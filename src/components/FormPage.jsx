import "../scss/form.scss"
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useState } from "react";



const FormPage = () => {

    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const URL = "https://sophisticated-humane-dandelion.glitch.me/";
    const navigate = useNavigate()

     // Input info išsaugojimas į state
     const handleChange = (event) => {
        const {id, value} = event.target

        switch(id) {
            case "image": setImage(value);
            break;
            case "title": setTitle(value);
            break;
            case "price": setPrice(Number(value));
            break;
        }
    }

        const handleSubmit = async (e) => {
            e.preventDefault()
    
    if(!image || !title || !price) return alert("Užpildykite visus laukelius")

    console.log("Values:", { image, title, price })

    try {
        const resp = await fetch(URL, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({ image, title, price })
        })

        console.log("Response:", resp)

        if(resp.ok) {
            const result = await resp.json()
            console.log(result)
            alert("Success")
            navigate("/")
        }
        } catch(error) {
            console.log(error)
        }
    }

    return (
    <>
    <nav>
        <Link to='/'>Products</Link>
        <Link to='/form'>Form</Link>
    </nav>
    <h1>Pridėti prekę</h1>
    <form onSubmit={handleSubmit}>
<input id="image" onChange={handleChange} type="url" placeholder="img" />
<input id="title" onChange={handleChange} type="text" placeholder="title" />
<input id="price" onChange={handleChange} type="number" step="0.01" placeholder="price" />


        <button>Submit</button>
    </form>
    </>
    )
}

export default FormPage