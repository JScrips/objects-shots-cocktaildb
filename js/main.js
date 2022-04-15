//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + choice;
  console.log(url);
  console.log(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
  );

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.drinks);
      let random = Math.floor(Math.random() * data.drinks.length);
      console.log(data.drinks[random].strDrinkThumb);
      document.querySelector("img").attributes.src.value =
        data.drinks[random].strDrinkThumb;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
