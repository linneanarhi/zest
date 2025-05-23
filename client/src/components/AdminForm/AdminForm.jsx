import { useState } from "react";
import styles from "./adminForm.module.css";
import { useNavigate } from "react-router-dom";

function AdminForm() {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    image: "",
    SKU: "",
    price: "",
    brand: "",
    publishDate: "",
    category: "Lighting",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Hanterar förändringar i input
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "publishDate") {
      const unixTimestamp = Math.floor(new Date(value).getTime() / 1000);
      setFormData({ ...formData, [name]: unixTimestamp });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Hanterar submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Återställer formuläret
      setFormData({
        productName: "",
        description: "",
        image: "",
        SKU: "",
        price: "",
        brand: "",
        publishDate: "",
        category: "Lighting",
      });

      navigate("/admin/adminproducts");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <h2 className={styles.Newh2}>Add New Product</h2>

      <form className={styles.adminForm} onSubmit={handleSubmit}>
        <label className={styles.adminLabel} htmlFor="productName">
          Product Name:
          <input
            type="text"
            className={styles.adminInput}
            name="productName"
            id="productName"
            value={formData.productName}
            onChange={handleInputChange}
            maxLength="25"
            required
          />
        </label>

        <label className={styles.adminLabel} htmlFor="description">
          Description:
          <input
            className={styles.adminInput}
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className={styles.adminLabel} htmlFor="image">
          Image:
          <input
            className={styles.adminInput}
            type="text"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="URL"
            required
          />
        </label>

        <label className={styles.adminLabel} htmlFor="SKU">
          SKU:
          <input
            className={styles.adminInput}
            type="text"
            name="SKU"
            id="SKU"
            value={formData.SKU}
            onChange={handleInputChange}
            pattern="[A-Z]{3}[0-9]{3}"
            title="Vänligen ange i formatet: XXXYYY (ex: ABC123)"
            required
          />
        </label>

        <label className={styles.adminLabel} htmlFor="price">
          Price:
          <input
            className={styles.adminInput}
            type="text"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price in SEK"
            required
          />
        </label>

        <label className={styles.adminLabel} htmlFor="brand">
          Brand:
          <input
            className={styles.adminInput}
            type="text"
            name="brand"
            id="brand"
            value={formData.brand}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className={styles.adminLabel} htmlFor="category">
          Category:
          <select
            className={styles.adminInput}
            name="category"
            id="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="Lighting">Lighting</option>
            <option value="Interior">Interior</option>
            <option value="Furniture">Furniture</option>
          </select>
        </label>

        <label className={styles.adminLabel} htmlFor="publishDate">
          Publish Date:
          <input
            className={styles.adminInput}
            type="datetime-local"
            name="publishDate"
            id="publishDate"
            value={
              formData.publishDate
                ? new Date(formData.publishDate * 1000)
                    .toISOString()
                    .slice(0, 16)
                : ""
            }
            onChange={handleInputChange}
            required
          />
        </label>

        <button className={styles.adminButton} type="submit">
          Submit
        </button>
        <div className={styles.error}>
          {errorMessage && <p>{errorMessage}</p>} 
        </div>
      </form>
    </>
  );
}

export default AdminForm;
