let array = ["audi", "bmw", "chevrolet"];
const nav = document.querySelector("nav");
const btnAdd = document.getElementById("btnAdd");
const input = document.querySelector('input[type="text"]');
const deleteLis = document.getElementById("btnDelete");
const panier = document.querySelector(".panier");

let array2 = [];
const remove = () => {
  let lis = document.querySelectorAll("li");
  lis.forEach((li) => {
    li.remove();
  });
};
remove();

const addItem = () => {
  array.forEach((arr) => {
    nav.innerHTML += `
    <ul class='liste'>
        <a href="#" onmousemove="deleteTab('${arr}') " onclick="addPanier('${arr}')"><li> ${arr} </li></a>
    </ul>
        `;
  });
};
addItem();

const initialisation = () => {
  remove();
  addItem();
};

const AddArray = () => {
  btnAdd.addEventListener("click", () => {
    if (array.includes(input.value)) {
      alert("le produit existe déja");
    } else {
      array.push(input.value);
    }
    initialisation();
  });
};
AddArray();

const deleteLi = () => {
  deleteLis.addEventListener("click", () => {
    for (let i = 0; i < array.length; i++) {
      let produits = array[i];
      console.log(produits);
      if (produits === input.value) {
        array.splice(i, 1);
      }
      initialisation();
    }
  });
};
deleteLi();

const deleteTab = (name) => {
  input.value = name;
};
deleteTab();

const addPanier = (name) => {
  if (array2.includes(name)) {
    alert("vous possédé déja ce produit dans votre panier ");
  } else {
    array2.push(name);
    console.log(array2);
  }

  if (array2.length > 1) {
    panier.textContent = `il y a ${array2.length} produits dans le panier`;
  } else {
    panier.textContent = `il y a ${array2.length} produit dans le panier`;
  }
};

logo.addEventListener("click", () => {
  panier.textContent = "il y à 0 produit dans le panier";
  array2 = [];
});
