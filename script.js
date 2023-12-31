const poems = [
  {
    author: "Cece",
    poem: "Roses are red \n Violets are blue \n Sunflowers are yellow \n I bet you were expecting something romantic but no -- these are just gardening facts.",
    image: "sunflower.jpeg",
  },
  {
    author: "Anvit",
    poem: "Roses are red \n Pizza sauce is too \n I ordered a large \n None of it is for you ",
    image: "pizza.jpeg",
  },
  {
    author: "Ernie",
    poem: "Roses re red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2",
    image: "bee.jpeg",
  },
  {

    author:"george" ,
    poem:"Roses are red Violets are blue,Sugar is sweet And so are you.",
    image:"random images"
  },
  {
    author: "Abdullah",
    poem: "Roses are red \n Violets are blue \n  I'm here coding with my crew!!!",
    image: "coding.jpeg",
  },

  // YOUR CODE HERE: Add an object containing two key value pairs: author and poem. Set the author property as equal to a string with your first name. Set the poem property as equal to a short "roses are red" poem. Use the new line character as in the example when you would like a line break.
  {

    author: 'amr',
    poem: 'roses are red \n violets are blue \n idk what im doin \n but the sky is blue',
    image: 'image.jpeg'
  },

  { author: "Zachary",
    poem: "Roses are red \n Violets are blue \n poopoo peepee \n peepee poopoo",
    image: "horror.PNG"

  }
];

let displayPoems = (array) => {
  let html = "";
  let poemDiv = document.getElementById("poems");

  poemArray = array.forEach((poem) => {
    html += `
    <div class="poem">
        <img class="poem__image" src="./assets/${poem.image}"/>
        <div class="poem__author">
            Author: ${poem.author}
        </div>
        <div class="poem__content">
            ${poem.poem}
        </div>
    </div>
    `;
  });

  poemDiv.innerHTML = html;
};

displayPoems(poems);
