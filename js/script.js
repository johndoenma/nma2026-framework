/* IMPORT WEB COMPONENTS */
import "../components/site-header.js";
import "../components/site-footer.js";

/* ENABLE SCROLL TRIGGERED ANIMATION ON ALL SECTIONS */

let options = {
    threshold: .25
}

// CHANGE ACTIVE STATE FOR ALL TARGET ELEMENTS WITH INTERSECTION OBSERVER
const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-viewstate", "active");
        } else {
            entry.target.setAttribute("data-viewstate", "innactive");
        };
    });
}, options);

const mytargets = document.querySelectorAll('.animate-on-scroll');
mytargets.forEach((el) => {
    myobserver.observe(el);
});

