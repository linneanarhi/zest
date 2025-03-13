import { useState } from "react";
import styles from "./adminForm.module.css";

function AdminForm() {



const [formData, setFormData] = useState ({
    productName: "", 
    description: "", 
    image: "", 
    SKU: "", 
    price: "", 
    brand: "", 
    publishDate: ""
});

const handleInputChange = (event) => {
	const {name, value} =event.target;
	
	setFormData({
	...formData,
	[name]: value,
	});
};

const handleSubmit = (event) => {

	event.preventDefault();
	
	const products = { ...formData };  
	
	fetch("/api/products", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(products),
        })
        .then(resp => {
				setFormData({
                    productName: "", 
                    description: "", 
                    image: "", 
                    SKU: "", 
                    price: "", 
                    brand: "", 
                    publishDate: ""
                });
            })
            .catch(error => console.error("Error:", error));
        };
    


return (
    <>
    
    <form className={styles.adminForm} onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name</label>
            <input type="text" className={styles.adminInput} name="productName" id="productName" value={formData.productName} onChange={handleInputChange} placeholder="Product Name" />

            <label htmlFor="description">Description</label>
            <input className={styles.adminInput} type="text" name="description" id="description" value={formData.description} onChange={handleInputChange} placeholder="Description" />

            <label htmlFor="image">Image</label>
            <input className={styles.adminInput} type="text" name="image" id="image" value={formData.image} onChange={handleInputChange} placeholder="URL" />

            <label htmlFor="SKU">SKU</label>
            <input className={styles.adminInput} type="text" name="SKU" id="SKU" value={formData.SKU} onChange={handleInputChange} placeholder="SKU" />

            <label htmlFor="price">Price</label>
            <input className={styles.adminInput} type="text" name="price" id="price" value={formData.price} onChange={handleInputChange} placeholder="Price in SEK" />

            <label htmlFor="brand">Brand</label>
            <input className={styles.adminInput} type="text" name="brand" id="brand" value={formData.brand} onChange={handleInputChange} placeholder="Brand" />

            <label className={styles.adminLabel} htmlFor="publishDate">Publish Date</label>
            <input className={styles.adminInput} type="text" name="publishDate" id="publishDate" value={formData.publishDate} onChange={handleInputChange} placeholder="Publish Date" />

            
            {/*state-variabeln "formData" är ett objekt 
            som innehåller attribut för samtliga fält i formuläret
            objekt är en samling av flera värden (egenskaper attribut variabler)
            variabel är ett namn på nånting där du sparar nånting*/}
            {/*value är attribut för state-variabeln. onChange hanterar när man skriver något i input "ändringen av inputfältet".*/}

            <button className={styles.adminButton} type="submit">Submit</button>
        
    </form>
    
    </>
);

}

export default AdminForm; 