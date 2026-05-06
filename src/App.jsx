import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getProductListing = async () => {
    const url = "https://api.freeapi.app/api/v1/public/randomproducts/product/random";
    const options = { method: "GET", headers: { accept: "application/json" } };

    try {
      setLoading(true);
      setError("");
      // Clear previous products to trigger loading animation cleanly
      setProducts([]); 

      const productRequest = Array.from({ length: 12 }, async () => {
        const response = await fetch(url, options);
        const productData = await response.json();
        return productData.data;
      });

      const fetchProduct = await Promise.all(productRequest);
      setProducts(fetchProduct);
    } catch (error) {
      console.error(error);
      setProducts([]);
      setError("Failed to load the product catalog.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductListing();
  }, [page]);

  return (
    <div className="app-container">
      <header className="header">
        <span className="brand-tag">Chai aur Code</span>
        <h1 className="main-title">Storefront UI</h1>
        <p className="subtitle">Hanji, let's explore some premium products.</p>
      </header>

      {error && <div className="error-badge">{error}</div>}

      <div className="product-grid">
        {loading ? (
          /* Loading Skeletons */
          Array.from({ length: 12 }).map((_, idx) => (
            <div key={`skeleton-${idx}`} className="product-card skeleton-card">
              <div className="skeleton-img"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text short"></div>
            </div>
          ))
        ) : (
          /* Actual Product Cards */
          products.map((product, index) => (
            <div className="product-card" key={product?.id || index}>
              <div className="image-wrapper">
                <img 
                  src={product?.thumbnail || 'https://via.placeholder.com/300'} 
                  alt={product?.title || "Product"} 
                />
              </div>
              <div className="card-content">
                <h3 className="product-title">{product?.title}</h3>
                <div className="price-tag">
                  <span className="currency">₹</span>
                  <span className="amount">{product?.price}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="action-container">
        <button 
          className="refresh-btn" 
          onClick={() => setPage((prev) => prev + 1)}
          disabled={loading}
        >
          {loading ? "Fetching..." : "Load New Catalog"}
        </button>
      </div>
    </div>
  );
}

export default App;