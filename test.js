// function Car() {
//   this.shake = "Lamborghini";
//   return "fe";
// }

// const myCar = new Car();
// console.log(myCar);
const data = {
  books: {
    "The Great Gatsby": {
      author: "F. Scott Fitzgerald",
      reviews: {
        review1: { rating: 5, comment: "Great book!" },
        review2: { rating: 4, comment: "Good read." },
        review3: { rating: 3, comment: "Not bad." },
      },
    },
    "To Kill a Mockingbird": {
      author: "Harper Lee",
      reviews: {
        review1: { rating: 5, comment: "One of my favorites!" },
        review2: { rating: 5, comment: "Amazing book." },
        review3: { rating: 4, comment: "Really enjoyed it." },
      },
    },
    "test book": {
      author: "someone",
      reviews: {
        review1: { rating: 5, comment: "ahsfkd..." },
        review2: { rating: 5, comment: "......" },
      },
    },
  },
};
//Rewiews
function hey(data) {
  const ans = Object.entries(data.books).sort((a, b) => {
    const aArr = Object.values(a[1].reviews);
    const bArr = Object.values(b[1].reviews);
    const aVal = aArr.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0);
    const bVal = bArr.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0);
    return bVal / bArr.length - aVal / aArr.length;
  });
  console.log(ans);
}
hey(data);
