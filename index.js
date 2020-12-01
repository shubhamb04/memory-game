window.addEventListener("DOMContentLoaded", (event) => {
  const cardArray = [
    {
      name: "elephant",
      image: "Img/elephant.jpg",
    },
    {
      name: "elephant",
      image: "Img/elephant.jpg",
    },
    {
      name: "kumfu",
      image: "Img/kumfu.png",
    },
    {
      name: "kumfu",
      image: "Img/kumfu.png",
    },
    {
      name: "pig",
      image: "Img/pig.png",
    },
    {
      name: "pig",
      image: "Img/pig.png",
    },
    {
      name: "scooby",
      image: "Img/scooby.png",
    },
    {
      name: "scooby",
      image: "Img/scooby.png",
    },
    {
      name: "superman",
      image: "Img/superman.jpg",
    },
    {
      name: "superman",
      image: "Img/superman.jpg",
    },
    {
      name: "sword",
      image: "Img/sword.png",
    },
    {
      name: "sword",
      image: "Img/sword.png",
    },
  ];

  const grid = document.querySelector(".grid");

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "Img/blank2.png");
      card.setAttribute("data-id", i);
      grid.appendChild(card);
    }
  }

  createBoard();
});
