document.addEventListener("DOMContentLoaded", () => {
  function toggleAccordion(element) {
    element.classList.toggle("active");
  }
  const accordionElements = [...document.querySelectorAll(".accordion-item")];
  accordionElements.forEach((element) =>
    element.addEventListener("click", () => {
      toggleAccordion(element);
    })
  );
});
