import React, { useState, useEffect } from "react";
import ChatBox from "./components/ChatBox";
import ProductList from "./components/ProductList";
import { ElizaBot } from "./elizabot";

const App = () => {
  const [eliza, setEliza] = useState(null);
  const [messages, setMessages] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const bot = new ElizaBot();
    console.log("ELIZA initialized:", bot);
    setEliza(bot);

    // Set initial ELIZA message
    const initialMessage = bot.getInitial();
    setMessages([{ sender: "eliza", text: initialMessage }]);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://freakins.com/products.json?limit=30&page=1"
        );
        const data = await response.json();
        console.log("Fetched products:", data.products);
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleUserInput = (input) => {
    console.log("User input:", input);
    if (!eliza) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    const elizaResponse = eliza.transform(input);

    const searchKeywords = input.toLowerCase().split(" ");
    const matchedProducts = products.filter((product) =>
      searchKeywords.some((keyword) =>
        product.title.toLowerCase().includes(keyword)
      )
    );

    console.log("Matched products:", matchedProducts);
    setFilteredProducts(matchedProducts);

    setMessages((prev) => [...prev, { sender: "eliza", text: elizaResponse }]);
  };

  return (
    <div>
      <ChatBox messages={messages} onUserInput={handleUserInput} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
