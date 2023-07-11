document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const quote = document.querySelector("blockquote h1");
  const author = document.querySelector("blockquote h3");

  async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quote.textContent = data.content;
      author.textContent = data.author;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }
  // call updateQuote once when page load
  updateQuote();

});
