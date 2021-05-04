function html(string) {
	return string
}

class CornersMenu extends HTMLElement {
	constructor() {
		super();

		addEventListener('scroll', () => {
			this.querySelector('nav').classList.toggle('scrolled', scrollY > 50)
		})
	}

	connectedCallback() {
		this.innerHTML = html`
			<nav>
				<a href="/home-new.html" class="top-left" style="transform-origin: top left; top: 0; left: 0;">
					DAT
				</a>
				<a href="/who.html" class="top-right" style="transform-origin: top right; top: 0; right: 0;">
					WHO
				</a>
				<a href="/what.html" class="bottom-left" style="transform-origin: bottom left; bottom: 0; left: 0;">
					WHAT
				</a>
				<a href="/when.html" class="bottom-right" style="transform-origin: bottom right; bottom: 0; right: 0;">
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
				font-size: 600%;
				transition: all .5s;
				text-underline-offset: 6px;
				text-decoration: none;
				pointer-events: all;
			}
			
			nav a.active {
				transform: scale(1);
			}
			
			nav a:hover {
				text-decoration: none;
			}
			
			nav a.active {
				padding: 0px 15px 0px 15px; 
				pointer-events: none;
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
			@media (max-width: 700px) {
				nav a {
					font-size: 500%;
				}
			}

			@media (max-width: 600px) {
				nav a {
					font-size: 400%;
				}
			}

			@media (max-width: 600px) {
				nav a {
					font-size: 350%;
				}
			}

			@media (max-width: 500px) {
				main {
					padding: 40px;
				}
				
				nav a {
					font-size: 275%;
				}
			}
			
			
			@media (max-width: 400px) {
				nav a {
					font-size: 200%;
				}
			}
			</style>
		`

		const activeMenuItem = this.querySelector(`a[href="${location.pathname}"]`)
		activeMenuItem.classList.add('active')
	}
}

customElements.define('corners-menu', CornersMenu);