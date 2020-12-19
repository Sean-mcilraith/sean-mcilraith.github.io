const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-area')
	const navlinks = document.querySelectorAll('.nav-area li')
	//toggle Nav
	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
	});
	navLinks.forEach((link, index) =>{
		link.style.animation = 'navlinkFade 0.5s ease forwards ${index /7}s';
		console.log(index / 7);
	});
}

navSlide();