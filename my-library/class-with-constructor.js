async function getFibonacciResults() {
    try {
      const url =
        "http://localhost:5050/getFibonacciResults";
      
      const response = await fetch(url);
      const results = await response.json();

      return results.Search;
    } catch (e) {
      return [];
    }
  }