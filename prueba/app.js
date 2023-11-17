const modalBow = document.querySelector('#moño')
const viewBow =  document.querySelector('#container')
let bows = [
  {
    title: "Macdonalds",
    imgURL: './img/restaurantes/logo1.jpg',
    category: 'Comida Rapida',
    menu: './img/menus/menu1.jpeg',
    price:'1200',
    id: 0
  },
  {
    title: "Burguer King",
    imgURL: './img/restaurantes/logo2.png',
    menu: './img/menus/menu2.jpg',
    category: 'Comida Rapida',
    price:'1800',
    id: 1
  },
  {
    title: "KFC",
    imgURL: './img/restaurantes/logo3.png',
    category: 'Pollo',
    menu: './img/menus/menu3.jpeg',
    price:'800',
    id: 2
  },
  {
    title: "Comdida Sna ya",
    imgURL: './img/restaurantes/logo4.jpg',
    category: 'Vegetariana',
    menu: './img/menus/menu4.jpeg',
    price:'1400',
    id: 3
  },
  {
    title: "Kokoriko",
    imgURL: './img/restaurantes/logo5.png',
    category: 'Pollo',
    menu: './img/menus/menu5.jpeg',
    price:'1000',
    id: 4
  },
  {
    title: "Don pollo",
    imgURL: './img/restaurantes/logo6.png',
    category: 'Pollo',
    menu: './img/menus/menu6.jpeg',
    price:'1200',
    id: 5
  },
  {
    title: "Verde natural",
    imgURL: './img/restaurantes/logo7.png',
    category: 'Vegetariana',
    menu: './img/menus/menu7.jpg',
    price:'2000',
    id: 6
  },
  {
    title: "Pasto salud",
    imgURL: './img/restaurantes/logo8.png',
    category: 'Vegetariana',
    menu: './img/menus/menu8.jpg',
    price:'1700',
    id: 7
  },
  {
    title: "Verde Food",
    imgURL: './img/restaurantes/logo9.jpg',
    category: 'Vegetariana',
    menu: './img/menus/menu9.jpg',
    price:'1500',
    id: 8
  }
]

const imgDefault = './img/moños/default.jpg';

//filter
function componentBow(bow){
  const {imgURL, title, id, category, price} = bow
  return `
   <div id="${id}" class="bow column accesorio">
    <div class="badge"><i class="fa fa-trash-can"></i></div>
    <div id="${id}">
      <img src="${bow.imgURL || imgDefault }">
        <label>$${price}</label>SS
      <p>${title}</p>
    </div>
   </div>
  `
}

function modalContentBowComponent(bow){
  return `
    <div id="id02">
    <a id="modal__exit" class="closebtn">×</a>
      <div>
        <h2 class="title">${bow.title}</h2>
        <ul class="card-action-buttons">
          <li class="car"><i class="fas fa-shopping-cart"></i></li>
        </ul>
        <img class="principal" src="${bow.menu || imgDefault}" alt="${bow.price}">
          <br><br><br>
          <p class="desctext">Escoja el plato del menu</p>
          <select id="input-categoria" class="addinput" name="select">
              <option >Platillo 1</option>
              <option >Platillo 2</option>
              <option >Platillo 3</option>
              <option >Platillo 4</option>
              <option >Platillo 5</option>
              <option >Platillo 6</option>
              <option >Platillo 7</option>
            </select>
    </div>
  `
}

function displayNotFound(){
  viewBow.innerHTML = `
  <div class="not-found">
    <p>Lo sentimos, no se ha encontrado restaurantes de esta categoria...</p>
  </div>
  `
  //   <br><br>
  //   <span class="not-foundlogin">!!! Sé el primero en crearlo !!!</span><i class="fa fa-plus addbtn" onclick="document.getElementById('account').style.display='block'"></i>
}

function displayBows(bowsArr){
  const bowsHTMl = bowsArr.map(bow => componentBow(bow)).join('');
  viewBow.innerHTML = bowsHTMl;
}

displayBows(bows);

document.addEventListener('click', (event)=>{
  const target = event.target
  if(target.closest('.badge')){
    const selectedBow = target.closest('.bow')
    bows = bows.filter(bow => Number(bow.id) !== Number(selectedBow.id));
    displayBows(bows);
    alert("Moño eliminado exitosamente :)");
  }
  else if(target.closest('.bow')){  
    const selectedBow = target.closest('.bow')
    const myBow = bows.find(bow => Number(bow.id) === Number(selectedBow.id))
    const bowHTML = modalContentBowComponent(myBow);
    modalBow.innerHTML = bowHTML;
    modalBow.showModal();
  }
  if(target.closest('#modal__exit')){
    modalBow.close();inputNombre
  }
  if(target.closest('.btn_ctg')){
    const btn = target.closest('.btn_ctg')
    const filterValue = btn.textContent;
    document.querySelector('#filterTag').textContent = btn.textContent;
    const filteredBows = filterValue === 'Todos' ? bows : bows.filter((bow)=> bow.category === filterValue)
    filteredBows.length !== 0 ? displayBows(filteredBows) : displayNotFound();
  }
  if(target.matches('#contact-submit')){
    const form = target.closest('#add-bow');
    const title = form.querySelector('#input-nombre');
    const precio = form.querySelector('#input-precio');
    // const img = form.querySelector('#input-img');
    const categoria = document.getElementById('input-categoria');
    let categoria_text = categoria.options[categoria.selectedIndex].value;
    const newBow = {title: title.value, price: precio.value, category: categoria_text, id: bows.length};
    bows = [...bows, newBow];
    displayBows(bows);
    alert("Moño agregado exitosamente :)");
  }
  
})


// function addMoño() {
//   let moño = formCreate();
//   bows.push(moño);
// }

// function formCreate(){
//   document.querySelector('.formcreate')
//     .addEventListener('submit', e => {
//       e.preventDefault()
//       const data = Object.fromEntries(
//         new FormData(e.target)
//       )
//       alert(JSON.stringify(data))
//     })
//   return data;
// }