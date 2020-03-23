// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector(".header-container");

function createSpan(text, className=''){
    const span = document.createElement("span");
    span.innerHTML = text;
    span.className = className;
    return span;
}

function createHeader(text) {
    const header = document.createElement("h1");
    header.innerHTML = text;
    return header;
}

function createDiv(className) {
    const div = document.createElement("div");
    div.className = className;
    return div;
}

function Header() {
    const div = createDiv("header");
    headerContainer.appendChild(div)

    const date = createSpan("MARCH 28, 2019", "date");
    const header = createHeader("Lambda Times");   
    const temp = createSpan("98°");
    const divElements = [date, header, temp]
    divElements.forEach(element => div.appendChild(element))
    return div;
}

const header = Header();