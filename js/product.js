const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea2sem-4cc6.restdb.io/rest/ideelkaffe" + id, {
  method: "GET",
  headers: {
    "x-apikey": "aa88560dbdacc9fe1483666ecbb92483ec1f5",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showProducts(response);
  })
  .catch((err) => {
    console.error(err);
  });
function showProducts(product) {
  console.log(product);
  document.querySelector(".product-img").src = `${product.image}`;
  document.querySelector(".name").textContent = product.name;
  document.querySelector(".price span").textContent = product.price;
  document.querySelector(".about-product").textContent = product.description;
}
