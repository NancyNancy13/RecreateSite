window.addEventListener("DOMContentLoaded", init);
function init() {
  loadData();
}
async function loadData() {
  const reponse = await fetch(
    "https://technancy.dk/bikewp/wp-json/wp/v2/bike?_embed"
  );
  console.log("reponse2", reponse);
  const bikeData = await reponse.json();

  displayBike(bikeData);
}
async function displayBike(bike) {
  // movie data
  //   let singleMovie = movie[0];
  //   console.log(singleMovie.duration);
  //   document.querySelector("h1").textContent = singleMovie.title.rendered;
}
