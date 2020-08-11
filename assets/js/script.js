const nav = document.querySelectorAll('nav ul li a');
var nav_list = [];
for (let i = 0; i < nav.length; i++){
	nav_list[i] = nav[i].dataset.nav;
	nav[i].setAttribute('onclick', 'window.scrollTo(0,100);');
}

for (let n of nav){
	n.addEventListener('click', function(event){
		const klik = event.target;
		visibilitas(klik);
	});
}

function visibilitas(menu = true){
	let active = 0;
	if (typeof(menu) == "boolean") {
		showNav(nav_list[1], active);
		for (let i = 1; i < nav_list.length; i++){
			hideNav(nav_list[i], i);
		}
	} else {
		for (let i = 0; i < nav_list.length; i++){
			if (nav_list[i] == menu.dataset.nav) {
				showNav(nav_list[i], i);
			} else {
				hideNav(nav_list[i], i);
			}
		}
	}
}

function hideNav(menu, active){
	let y = document.getElementById(menu);
	nav[active].removeAttribute('class');
	y.setAttribute('style', 'display: none;');
}

function showNav(menu, active){
	let y = document.getElementById(menu, active);
	nav[active].setAttribute('class', 'active');
	y.removeAttribute('style');
}