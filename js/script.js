/* IMPORT WEB COMPONENTS */
import "../components/site-header.js";

/* ENABLE SCROLL TRIGGERED ANIMATION ON ALL SECTIONS */
// CHANGE ACTIVE STATE FOR ALL TARGET ELEMENTS WITH INTERSECTION OBSERVER
const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-viewstate", "active");
        } else {
            entry.target.setAttribute("data-viewstate", "innactive");
        };
    });
});

const mytargets = document.querySelectorAll('header, section, footer, .animate-on-scroll');
mytargets.forEach((el) => {
    myobserver.observe(el);
});

