/**
 * Nav collapsing
 */
addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('scrolled', scrollY > 10)
})

/**
 * Nav active
 */
const activeMenuItem = document.querySelector(`a[href="${location.pathname}"]`)
activeMenuItem.classList.add('active')


/**
 * Trail
 */
let words = " if this then ...".split(' ')
let j = 0;
let si = 0
// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
var dots = [],
    mouse = {
        x: innerWidth / 2,
        y: innerHeight / 2
    };

// The Dot object used to scaffold the dots
var Dot = function () {
    this.x = 0;
    this.y = 0;
    this.node = (function () {

        var n = document.createElement("div");
        n.className = "trail";


        words[j].split('').forEach((c, _) => {
            var s = document.createElement('span')
            s.innerText = c
            s.style.setProperty('--i', si);
            si++
            n.appendChild(s)
        })


        document.body.appendChild(n);
        j++
        return n;
    }());
};
// The Dot.prototype.draw() method sets the position of 
// the object's <div> node
Dot.prototype.draw = function () {
    this.node.style.transform = `translateX(${this.x}px) translateY(${this.y}px)`
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < words.length; i++) {
    var d = new Dot();
    dots.push(d);
}

// This is the screen redraw function
function draw() {
    // Make sure the mouse position is set everytime
    // draw() is called.
    var x = mouse.x,
        y = mouse.y;

    // This loop is where all the 90s magic happens
    dots.forEach(function (dot, index, dots) {
        var nextDot = dots[index + 1] || dots[0];

        dot.x = x + offsetSoFar(index) * 3 + 50;
        dot.y = y;
        dot.draw();
        x += ((nextDot.x) - dot.x) * .8;
        y += (nextDot.y - dot.y) * .8;

    });
}


function offsetSoFar(index) {
    let offset = 0;

    for (const word of words.slice(0, index)) {
        offset += word.length
    }

    return offset
}

addEventListener("mousemove", function (event) {
    document.querySelectorAll('.trail').forEach(t => {
        t.style.opacity = 1
    })
    //event.preventDefault();
    mouse.x = event.pageX;
    mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
    draw();
    requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();


// IDEA: show the word you're hovering over in if this then ...
addEventListener("load", () => {
    //document.querySelectorAll('a').forEach(a => {
    //    a.addEventListener('mouseenter', e => {
    //		words[words.length-1] = 
    //	})
    //})
});



/**
 * Apply Now
 */
customElements.define('apply-now', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <a class="apply-now" target="_blank" href="https://www.artez.nl/en/study-at-artez/application-and-admission/apply">
                <svg xmlns="http://www.w3.org/2000/svg" width="129.461" height="96.57" viewBox="0 0 129.461 96.57">
                    <g id="apply_now" data-name="apply now" transform="translate(-123.322 -569.34)">
                        <path id="Path_37" data-name="Path 37" d="M28.219,27.727l4.126-10.219,9.358,4.5L47.3,4.835,63.228,17.508,70.892,4.835,73.9,12.629,96.246,0V17.508l19.394,4.5-14.516,10.06,12.611,8.949-9.544,5.843L110.8,60.63l-22.443-1.44,3.695,17.483L76.41,60.63,69.052,81.535,53.618,72.576,43.6,90.642v-19.5l-15.382,10.4-4.557-12.4-20.542,2L14.832,54,3.119,48.567l8-7.547-8-8.949,6.511-1.379L0,23.854Z" transform="translate(132.557 575.392) rotate(-3)" fill="#878cff"/>
                        <text id="APPLY_NOW-2" data-name="APPLY NOW" transform="translate(128.496 637.686) rotate(-13)" font-size="21"><tspan x="0" y="0">APPLY NOW</tspan></text>
                    </g>
                </svg>
            </a>
        `
    }
})