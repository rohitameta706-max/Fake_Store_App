 let content = document.getElementsByClassName("container");
 let allContent = document.getElementById("CardContainer");


 

async function newData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("API failed");

    }

    const users = await response.json();

    users.forEach((user) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${user.image}" alt="${user.title}">
    <h3>${user.title}</h3>
    <p class="price">₹${user.price}</p>
    <p>${user.category}</p>
  `;

  allContent.appendChild(card);
});

//for confirming data in console
    for (let user of users) {
      console.log(user.id);
      console.log(user.price);  
    }
  } catch (err) {
    console.log("error", err);
  }
}

newData();   

    const menu = document.getElementById("menu");
    const btn = document.getElementById("btn");

    function toggleMenu() {
      if (menu.style.display === "flex") {
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
      }
    }

    function checkWidth() {
      if (window.innerWidth < 600) {
        menu.style.display = "none";
        btn.style.display = "block";
      } else {
        menu.style.display = "flex";
        btn.style.display = "none";
        menu.style.flexDirection = "row";
      }
    }

    window.addEventListener("resize", checkWidth);
    checkWidth();


