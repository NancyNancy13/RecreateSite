window.addEventListener("DOMContentLoaded", init);

function init(event) {
  loadData();
}
async function loadData() {
  const reponse = await fetch(
    "https://technancy.dk/bikewp/wp-json/wp/v2/bike?categories=4&_embed"
  );
  //   console.log("reponse2", reponse);
  const bikeData = await reponse.json();

  displayBike(bikeData);
}
function displayBike(bike) {
  console.log(bike);
  //   bike.forEach((bike) => {
  //     console.log(bike.title.rendered);
  bike.forEach((bike) => {
    // let singleBike = bike[3];
    //   grap the template
    const template = document.querySelector("#myTemplate").content;
    // copying the template
    const copy = template.cloneNode(true);
    //   console.log(
    //     "singleBike image search",
    //     singleBike._embedded["wp:featuredmedia"][0].media_details.sizes.medium
    //       .source_url
    //   );
    copy.querySelector(".bikeimages").src = bike.featured_media;
    //   bike._embedded[
    //     "wp:featuredmedia"
    //   ][3].media_details.sizes.medium.source_url
    copy.querySelector("#brand").textContent = bike.brand;
    copy.querySelector("#name").textContent = bike.title.rendered;
    copy.querySelector(".price").textContent = bike.price;
    copy.querySelector(".color").textContent = bike.colours;
    copy.querySelector(".stock").textContent = bike.stock;

    const parent = document.querySelector("main");

    parent.appendChild(copy);
  });
}
