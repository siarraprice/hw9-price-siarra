var accordionheaders = document.querySelectorAll("#accordion .accordion-headers");

// handles the accordion dropdown action
function expandAccordionDescription() {


  // handles the toggle indicator 
  for (i = 0; i < accordionheaders.length; i++) {
    accordionheaders[i].childNodes[3].innerHTML = '+';
  }

  this.childNodes[3].innerHTML = '-';
};

// add click event listener for accordion headers
for (i = 0; i < accordionheaders.length; i++) {
  accordionheaders[i].addEventListener("click", expandAccordionDescription);
};
