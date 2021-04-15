const template = document.createElement('template');
template.innerHTML = `
<nav>
	<a class="top-left" style="transform-origin: top left; top: 0; left: 0;" href="">
		LOGO
	</a>
	<a class="top-right" style="transform-origin: top right; top: 0; right: 0;" href="">
		WHO
	</a>
	<a class="bottom-left" style="transform-origin: bottom left; bottom: 0; left: 0;" href="">
		WHAT
	</a>
	<a class="bottom-right" style="transform-origin: bottom right; bottom: 0; right: 0;" href="">
		WHEN
	</a>
</nav>

<style>

nav {
	 width: 100%;
	 min-height: 100vh;
	 min-height: -webkit-fill-available;
	 
	 pointer-events: none;
	 position: fixed;
	 
	 --scrolled-scale: .5;
	 --scrolled-rotation: -90deg;
	 --scrolled-translation: 100%;
}
 
 
 nav a {
	 color: currentcolor;
	 position: absolute;
	 padding: 0px 15px 10px 15px;
	 font-size: 400%;
	 transition: all .5s;
	 text-underline-offset: 6px;
	 pointer-events: all;
 }
 
 nav a:hover {
	 text-decoration: none;
 }
 
 
 nav.scrolled a.bottom-left {
	 transform: scale(var(--scrolled-scale)) rotateZ(var(--scrolled-rotation)) translateY(var(--scrolled-translation));
 }
 
 nav.scrolled a.bottom-right {
	 transform: scale(var(--scrolled-scale)) rotateZ(var(--scrolled-rotation)) translateX(var(--scrolled-translation));
 }
 
  nav.scrolled a.top-left {
	 transform: scale(var(--scrolled-scale)) rotateZ(var(--scrolled-rotation)) translateX(calc(-1 * var(--scrolled-translation)));
 }
 
  nav.scrolled a.top-right {
	 transform: scale(var(--scrolled-scale)) rotateZ(var(--scrolled-rotation)) translateY(calc(-1 * var(--scrolled-translation)));
 }
 
 /* Responsive */	
 @media (max-width: 500px) {
	 nav {
		 /* --scrolled-scale: .4; */
	 }
	 
	 main {
		 padding: 40px;
	 }
	 
	 nav a {
		 font-size: 275%;
	 }
 }
</style>


`

class CornersMenu extends HTMLElement {
	constructor() {
		super();
		
		const shadowRoot = this.attachShadow({mode: 'closed'});
		// clone template content nodes to the shadow DOM
		shadowRoot.appendChild(template.content.cloneNode(true));
		
		
		addEventListener('scroll', () => {
			shadowRoot.querySelector('nav').classList.toggle('scrolled', scrollY > 50)		
		})
	}
}

customElements.define('corners-menu', CornersMenu);