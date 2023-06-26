let shop = document.getElementById("shop");

let shopitemsdata = [
  {
    id: "bssdsvsd",
    name: "Casual shirt",
    price: "$42",
    desc: "This is a shirt",
    img: 'img-1.jpg'
  },
  {
    id: "bssscdfssssd",
    name: "Normal shirt",
    price: "$47",
    desc: "This is a normal shirt",
    img: 'img-2.jpg'
  },
  {
    id: "bswwwssd",
    name: "T-shirt",
    price: "$34",
    desc: "This is a T-shirt",
    img: 'img-3.jpg'
  },
  {
    id: "bssadsvsd",
    name: "Suit",
    price: "$412",
    desc: "This is a Suit",
    img: 'img-4.jpg'
  }
];

let generateShop = () => {
  shop.innerHTML = shopitemsdata.map((item) => {
    let { id, name, price, desc, img } = item;
    return `
      <div class="item">
        <img src="${img}" alt="" width="220">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>${price}</h2>
            <div class="buttons">
              <i class="bi bi-plus-lg" onclick="increment('${id}')"></i>
              <div class="quantity" id="${id}">0</div>
              <i class="bi bi-dash-lg" onclick="decrement('${id}')"></i>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
};

generateShop();

let increment = (id) => {
    let selecteditems=id
   let search 

};

let decrement = (id) => {

};

let update = () => {};
