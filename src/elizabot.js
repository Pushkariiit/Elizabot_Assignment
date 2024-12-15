class ElizaBot {
    constructor() {
      // Initial message to start the conversation
      this.initialMessage = "Hello, I'm Eliza! How can I help you today?";
      
      // Basic responses for simple keywords
      this.responses = {
        hello: "Hi there! How can I assist you today?",
        buy: "Sure, I can help you find products to buy. What are you looking for?",
        product: "I can help you search for products. Please provide more details.",
        help: "I'm here to assist! Could you tell me more about what you need?",
        "don’t know": "No problem! Just tell me a bit more, and we can figure it out together.",
        default: "I'm not sure I understand. Could you rephrase or provide more details?",
      };
    }
  
    /**
     * Get the initial message to greet the user.
     */
    getInitial() {
      return this.initialMessage;
    }
  
    /**
     * Transform the user input into a response.
     * This is a simplified response logic based on keyword matching.
     * @param {string} input - The user's input.
     * @returns {string} The bot's response.
     */
    transform(input) {
      // Normalize input to lowercase for matching
      const normalizedInput = input.toLowerCase();
  
      // Match the input with the predefined responses
      for (const keyword in this.responses) {
        if (normalizedInput.includes(keyword)) {
          return this.responses[keyword];
        }
      }
  
      // Default response if no keywords are matched
      return this.responses.default;
    }
  }
  
  export { ElizaBot };
  