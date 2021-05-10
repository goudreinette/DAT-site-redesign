function html(string) {
	return string
}


/**
 * 
 */
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
					<ul class="subs">
						<li>One</li>
						<li>Two</li>
						<li>Three</li>
					</ul>
				</a>
				<a href="/who.html" class="top-right" style="transform-origin: top right; top: 0; right: 0;">
					WHO
					<ul class="subs">
						<li>One</li>
						<li>Two</li>
						<li>Three</li>
					</ul>
				</a>
				<a href="/what.html" class="bottom-left" style="transform-origin: bottom left; bottom: 0; left: 0;">
					<ul class="subs">
						<li>One</li>
						<li>Two</li>
						<li>Three</li>
					</ul>
					WHAT
				</a>
				<a href="/when.html" class="bottom-right" style="transform-origin: bottom right; bottom: 0; right: 0;">
					<ul class="subs">
						<li>One</li>
						<li>Two</li>
						<li>Three</li>
					</ul>
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
				z-index:2;
				
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
				display: flex;
				flex-direction: column;
			}

			nav a ul.subs {
				list-style: none;
				font-size: calc(var(--font-size));
				transition: all .2s;
				padding: 0 5px;
				margin: 0;
			}

			nav a li {
				display: inline;
			}

			nav a.bottom-right ul.subs li, nav a.top-right ul.subs li {
				text-align: right;
			}

			nav a.bottom-left ul.subs, nav a.bottom-right ul.subs {
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

			nav.scrolled ul.subs {
				opacity: 0;
				transform: translateY(-20px);
			}
			
			nav.scrolled a.bottom-left {
				transform: scale(var(--scrolled-scale)) rotateZ(calc(var(--scrolled-rotation) * -1)) translateX(calc(var(--scrolled-translation) * -1));
			}
			
			nav.scrolled a.bottom-right {
				transform: scale(var(--scrolled-scale)) rotateZ(var(--scrolled-rotation)) translateX(var(--scrolled-translation));
			}
			
			nav.scrolled a.top-left {
				transform: scale(var(--scrolled-scale)) rotateZ(var(--scrolled-rotation)) translateX(calc(-1 * var(--scrolled-translation)));
			}
			
			nav.scrolled a.top-right {
				transform: scale(var(--scrolled-scale)) rotateZ(calc(var(--scrolled-rotation) * -1)) translateX(calc(var(--scrolled-translation)));
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


/**
 * 
 */
class MasonryGrid extends HTMLElement {
	constructor() {
		super();

		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html`
			<div class="masonry">
				<slot name="content"></slot>

				<style>
					figure {
						margin: 0;
						display: grid;
						grid-template-rows: 1fr auto;
						padding-bottom: 10px;
						break-inside: avoid;
					}

					figure>img {
						grid-row: 1 / -1;
						grid-column: 1;
					}

					figure a {
						color: black;
						text-decoration: none;
					}

					figcaption {
						grid-row: 2;
						grid-column: 1;
						background-color: rgba(255, 255, 255, .5);
						/*   padding: .2em .5em; */
						justify-self: start;
					}

					.masonry {
						column-count: 2;
						column-gap: 10px;
						padding-bottom: 200px;
					}

					@media (max-width: 700px) {
						.masonry {
							column-count: 1;
						}
					}
				</style>
			</div>
		`
	}

	connectedCallback() {
		this.innerHTML = html`
			
		`
	}
}

customElements.define('masonry-grid', MasonryGrid);
