fetch("https://kea2sem-4cc6.restdb.io/rest/ideelkaffe", {
  method: "GET",
  headers: {
    "x-apikey": "aa88560dbdacc9fe1483666ecbb92483ec1f5",
  },
})
  .then((res) => res.json())
  .then((Response) => {
    showProducts(response);
  })
  .catch((err) => {
    console.error(err);
  });
function showProducts(products) {
  console.log(product);
  //data.comments
  //grab the template
  const template = document.querySelector(
    ".single-product-template"
  ).textContent;
  //loop through data.comments
  products.forEach((product) => {
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
