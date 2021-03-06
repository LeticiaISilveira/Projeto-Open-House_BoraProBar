import Button from '../components/button.js'

const confirmacaoIdade = () => {
  let age = confirm("VOCÊ TEM MAIS DE 18 ANOS?");
  if(age ===true){
    console.log("muito bem")
  }else{
    console.log("Vá jogar LOL")
  }
}
//confirmacaoIdade()

const db = firebase.firestore();
  db.collection('bars').get().then((snap) => {
  snap.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`)
  })})
  
const homePage = () => {
  window.location.hash = '';
  const template = `
    <div class='top'>
      <div class='loginRegister'>
        ${Button({
          class: 'btn-rote-login btn',
          title:'Login',
          onclick: loginRoute
        })}
        ${Button({
          class:'btn-rote-register btn',
          title:'Cadastro',
          onclick: registerRoute
        })} 
      </div>
    </div>
 <section class="map">
	 	<div class="search">
      <select class="filter" id="filter-region" onload = 'mapHere()' >
            <option value="nune" selected>Buscar por Região</option>
            <option value="center">Centro</option>
            <option value="oeste">Zona Oeste</option>
            <option value="leste">Zona Leste</option>
            <option value="norte">Zona Norte</option>
            <option value="sul">Zona Sul</option>
        </select> 
     </div>
    <div class="map-container" id='map'>
    
    </div>
	</section>
    <section class='bar'>
      ${Button({
        value:'Bar Bela Santos',
        id:'CUvUsqpwc4zuzhTqRvAa',
        class:'btn-bar btn',
        type:'submit',
        title:'<img src="./images/bar-bela-santos.jpeg" class="img-bar">',
        onclick: registerRoute
      })}
    </section>`;
  return template;
}

const loginRoute = () => {
  location.hash = 'login';
}

const registerRoute = () => {
  location.hash = 'register';
}

export default homePage;