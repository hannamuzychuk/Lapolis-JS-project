import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import "../css/faq.css"; 

document.addEventListener("DOMContentLoaded", () => {
  new Accordion(".faq-container", {
    duration: 300,
    collapse: true,
    showMultiple: false,
  });
});