fetch("https://kea2sem-4cc6.restdb.io/rest/ideelkaffe", {
  method: "GET",
  headers: {
    "x-apikey": "60b8c65d318a330b62f58a37",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showProduct(response);
  })
  .catch((err) => {
    console.error(err);
  });
function showProduct(product) {
  console.log(product);
  //data.comments
  //grab the template
  const template = document.querySelector(".single-product-template").content;
  //loop through data.comments
  product.forEach((product) => {
    console.log(product);
    const copy = template.cloneNode(true);
    copy.querySelector("img").src = `${product.image}`;
    copy.querySelector("img").alt = `${product.name}`;
    copy.querySelector("p span").textContent = product.price;
    copy.querySelector("h2").textContent = product.name;
    copy.querySelector("a").href = `product.html?id=${product._id}`;
    document.querySelector("section").appendChild(copy);
  });
}
