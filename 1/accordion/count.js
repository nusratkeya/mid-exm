const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", event => {
const accordionHeaders = document.querySelectorAll(".accordion-header");
        const currentlyActiveAccordionHeader = document.querySelector("accordion-header.active");
       accordionHeader.classList.toggle("active");  
       const accordionBody = accordionHeader.nextElementSibling;
       if (accordionHeader.classList.contains("active")) {
        accordionBody.computedStyleMap.maxheight = 0;
       }
    });
}); 
