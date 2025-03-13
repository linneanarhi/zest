
function AdminForm() {


//state-variabeln "formData" är ett objekt 
//som innehåller attribut för samtliga fält i formuläret
//objekt är en samling av flera värden (egenskaper attribut variabler)
//variabel är ett namn på nånting där du sparar nånting
const [formData, setFormData] = useState ( {
    productName: "", 
    description: "", 
    image: "", 
    SKU: "", 
    price: "", 
    brand: "", 
    publishDate: ""
});

return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name</label>
            <input type="text" id="productName" value={formData.productName} onChange={handleInputChange} placeholder="Product Name"></input>

            <label htmlFor="description">Description</label>
            <input type="text" id="description" value={formData.description} onChange={handleInputChange} placeholder="Description"></input>

            <label htmlFor="image">Image</label>
            <input type="text" id="image" value={formData.image} onChange={handleInputChange} placeholder="URL"></input>

            <label htmlFor="sku">SKU</label>
            <input type="text" id="sku" value={formData.SKU} onChange={handleInputChange} placeholder="SKU"></input>

            <label htmlFor="price">Price</label>
            <input type="text" id="price" value={formData.price} onChange={handleInputChange} placeholder="Price in SEK"></input>

            <label htmlFor="brand">Brand</label>
            <input type="text" id="brand" value={formData.brand} onChange={handleInputChange} placeholder="Brand"></input>

            <label htmlFor="publishDate">Publish Date</label>
            <input type="text" id="publishDate" value={formData.publishDate} onChange={handleInputChange} placeholder="Publish Date"></input>

            //value är attribut för state-variabeln
            //onChange hanterar när man skriver något i input "ändringen av inputfältet".
        
    </form>
);

}

export default AdminForm; 