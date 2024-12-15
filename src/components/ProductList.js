import React from "react";

const ProductList = ({ products }) => {
    return (
        <div>
            <h2>Product Results:</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {products.map((product, index) => (
                    <div
                        key={index}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            borderRadius: "5px",
                            width: "200px",
                            textAlign: "center",
                        }}
                    >
                        {/* Handle missing image gracefully */}
                        <img
                            src={product?.images?.[0]?.src || "https://via.placeholder.com/200"}
                            alt={product?.title || "No Title"}
                            style={{ width: "100%", height: "auto" }}
                        />
                        <h3>{product?.title || "No Title"}</h3>
                        <p>{product?.vendor || "Unknown Vendor"}</p>
                        <p>${product?.variants?.[0]?.price || "N/A"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
