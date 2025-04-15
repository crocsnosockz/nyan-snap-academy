// Made by Nyan
// Based on recent data by IRS and fueleconomy.gov, might become outdated with recent adminstration changes to tax credits :)

let cars = [
  {
    model: "Tesla Model Y",
    msrp: 48990,
    range: 327,
    seats: 5,
    image: "images/modely.png"
  },
  {
    model: "Tesla Model 3",
    msrp: 42490,
    range: 363,
    seats: 5,
    image: "images/model3.png"
  },
  {
    model: "Ford Mustang Mach-E",
    msrp: 36495,
    range: 320,
    seats: 5,
    image: "images/mache.png"
  },
  {
    model: "Acura ZDX",
    msrp: 64500,
    range: 313,
    seats: 5,
    image: "images/zdx.png"
  },
  {
    model: "Cadillac Lyriq",
    msrp: 58595,
    range: 326,
    seats: 5,
    image: "images/lyriq.png"
  },
  {
    model: "Cadillac Vistiq",
    msrp: 77395,
    range: 305,
    seats: 7,
    image: "images/vistiq.png"
  },
  {
    model: "Cadillac Optiq",
    msrp: 52895,
    range: 302,
    seats: 5,
    image: "images/optiq.png"
  }, {
    model: "Chevrolet Blazer EV",
    msrp: 44600,
    range: 334,
    seats: 5,
    image: "images/blazerev.png"
  },
  {
    model: "Chevrolet Equinox EV",
    msrp: 33600,
    range: 319,
    seats: 5,
    image: "images/equinox.png"
  },
  {
    model: "Chevrolet Silverado EV",
    msrp: 73100,
    range: 460,
    seats: 5,
    image: "images/silveradoev.png"
  },
  {
    model: "Ford F-150 Lightning",
    msrp: 62995,
    range: 320,
    seats: 5,
    image: "images/f150.png"
  },
  {
    model: "Honda Prologue",
    msrp: 47400,
    range: 308,
    seats: 5,
    image: "images/prologue.png"
  },
  {
    model: "Tesla Cybertruck",
    msrp: 69990,
    range: 350,
    seats: 5,
    image: "images/cybertruck.png"
  },
  {
    model: "Genesis Electrified GV70",
    msrp: 66950,
    range: 236,
    seats: 5,
    image: "images/gv70.png"
  },
  {
    model: "Kia EV6",
    msrp: 42600,
    range: 319,
    seats: 5,
    image: "images/ev6.png"
  },
  {
    model: "Kia EV9",
    msrp: 54900,
    range: 304,
    seats: 7,
    image: "images/ev9.png"
  },
  {
    model: "Jeep Wagoneer S",
    msrp: 65200,
    range: 300,
    seats: 7,
    image: "images/wagoneer.png"
  },
  {
    model: "Chrysler Pacifica PHEV",
    msrp: 51055,
    range: 33,
    seats: 8,
    image: "images/pacifica.png"
  }
];

function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";                     
  const templateCard = document.querySelector(".card");
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    const nextCard = templateCard.cloneNode(true);   
    editCardContent(nextCard, car);                  
    cardContainer.appendChild(nextCard);             
  }
}

function editCardContent(card, carData) {
  card.style.display = "block"; 

  card.querySelector("h2").textContent = carData.model;

  const cardImage = card.querySelector("img");
  cardImage.src = carData.image;
  cardImage.alt = carData.model + " Photo";

  // Set the bullet points
  const bulletPoints = card.querySelectorAll("li");
  bulletPoints[0].textContent = "Starting MSRP: $" + carData.msrp;
  bulletPoints[1].textContent = "Range: " + carData.range + " miles";
  bulletPoints[2].textContent = "Maximum Capacity: " + carData.seats;
}
document.addEventListener("DOMContentLoaded", showCards);

function sortByPrice() {
  cars.sort((a, b) => a.msrp - b.msrp);
  showCards();
}

function sortByRange() {
  cars.sort((a, b) => b.range - a.range);
  showCards();
}

function sortBySeats() {
  cars.sort((a, b) => b.seats - a.seats);
  showCards();
}

function hideExpensive() {
  cars = cars.filter(car => car.msrp <= 50000);
  showCards();
}