import { useState } from "react";
import styles from "./adminForm.module.css";
import { useNavigate } from "react-router-dom";

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

const navigate = useNavigate();

// Funktion för att konvertera ett datum till svensk tid
const convertToSwedishTime = (date) => {
    const options = {
        timeZone: "Europe/Stockholm", // Svensk tidszon
        hour12: false, // Använd 24-timmars format
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    };
    const formatter = new Intl.DateTimeFormat("sv-SE", options);
    return formatter.format(date);
};

const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Om användaren ändrar publishDate (som nu inkluderar både datum och tid)
    if (name === "publishDate") {
        // Omvandla datum och tid till Unix-tidstämpel (sekunder)
        const unixTimestamp = Math.floor(new Date(value).getTime() / 1000);
        setFormData({
            ...formData,
            [name]: unixTimestamp, // Spara Unix-tidstämpeln
        });
    } else {
        setFormData({
            ...formData,
            [name]: value,
        });
    }
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
        .then(() => {
				setFormData({
                    productName: "", 
                    description: "", 
                    image: "", 
                    SKU: "", 
                    price: "", 
                    brand: "", 
                    publishDate: ""
                });

                navigate("/admin/adminproducts");

            })
            .catch(error => console.error("Error:", error));
        };
    


return (
    <>

    <h2 className={styles.Newh2}>Add New Product</h2>
    
    <form className={styles.adminForm} onSubmit={handleSubmit}>
        <label className={styles.adminLabel} htmlFor="productName">Product Name:
            <input type="text" className={styles.adminInput} name="productName" id="productName" value={formData.productName} onChange={handleInputChange} maxlength="25" required/></label>

            <label className={styles.adminLabel} htmlFor="description">Description:
            <input className={styles.adminInput} type="text" name="description" id="description" value={formData.description} onChange={handleInputChange}  required/></label>

            <label className={styles.adminLabel} htmlFor="image">Image:
            <input className={styles.adminInput} type="text" name="image" id="image" value={formData.image} onChange={handleInputChange} placeholder="URL" required/></label>

            <label className={styles.adminLabel} htmlFor="SKU">SKU:
            <input className={styles.adminInput} type="text" name="SKU" id="SKU" value={formData.SKU} onChange={handleInputChange}  pattern="[A-Z]{3}[0-9]{3}"
            title="Vänligen ange i formatet: XXXYYY (ex: ABC123)" required /></label>

            <label className={styles.adminLabel} htmlFor="price">Price:
            <input className={styles.adminInput} type="text" name="price" id="price" value={formData.price} onChange={handleInputChange} placeholder="Price in SEK" required/></label>

            <label className={styles.adminLabel} htmlFor="brand">Brand:
            <input className={styles.adminInput} type="text" name="brand" id="brand" value={formData.brand} onChange={handleInputChange}  required /></label>

            <label className={styles.adminLabel} htmlFor="publishDate">Publish Date:
            <input className={styles.adminInput} type="datetime-local" name="publishDate" id="publishDate" value={formData.publishDate
                        ? new Date(formData.publishDate * 1000)
                              .toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" }) // Konvertera till svensk tid
                              .replace(" ", "T") // Formatet för datetime-local kräver ett "T" istället för ett mellanslag
                        : ""} onChange={handleInputChange} placeholder="Publish Date" required /></label>

            
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