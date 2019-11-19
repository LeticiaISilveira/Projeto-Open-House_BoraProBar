import homePage from "../pages/mainpageNotlogged.js"
import loginPage from "../pages/login.js"
import registerPage from "../pages/register.js"
import homeLogged from "../pages/mainpageLogged.js"

const user = firebase.auth().currentUser;
const main = document.getElementById('main');
const body= document.querySelector('body');

const homeMain = () => {
	body.innerHTML = homePage();
}

const loginMain = () => {
	main.innerHTML = loginPage();
}

const registerMain = () => {
	main.innerHTML = registerPage();
}

const homeLoggedMain = () => {
	main.innerHTML = homeLogged();
}

const hash = () => {
	firebase.auth().onAuthStateChanged((user) =>
	{
  		if (user) {
  			if (location.hash === '') {
  				return homeLoggedMain();
  			} else if (location.hash === '#mainlogged') {
  				return homeLoggedMain();
  			}
  		} else {

  			if (location.hash === '') {
				// document.querySelector('.wrap-menu').innerHTML='';
  				return homeMain();
  			} else if (location.hash === '#register') {
  				return registerMain();
  			} else if (location.hash === '#login') {
  				return loginMain();
  			}
  		}
		})
	// if (location.hash ===  '') {
	// 	return homeMain();
	// } else if (location.hash === '#login') {
	// 	return loginMain();
	// } else if (location.hash === '#register') {
	// 	return registerMain();
	// }
}

const logout = () => {
	firebase.auth().signOut().then( () => {
		window.location.hash = '';
	})
}

window.addEventListener('load', hash)
window.addEventListener('hashchange', hash)
