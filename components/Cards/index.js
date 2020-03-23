// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");

const articleData = "https://lambda-times-backend.herokuapp.com/articles"

const tabs = document.querySelector(".tabs");

tabs.addEventListener("click", function(event) {
    let tabName = event.target.innerHTML;
    let allCards = document.querySelectorAll(".card")
    
    const hiddenArticles = document.querySelectorAll(".hide-articles")
    for (let article of hiddenArticles) {
        article.classList.toggle("hide-articles")
    }   
   
    for (let card of allCards) {
        if (card.getAttribute('data-topic') != tabName) {
           card.classList.toggle("hide-articles")
       }
    }
})


function createHeadline(className, headline) {
    const articleHeadline = document.createElement("div");
    articleHeadline.className = className;
    articleHeadline.innerHTML = headline;
    return articleHeadline;
}

function createArticleCardDiv(cardTopic, className){
    const cardDiv = document.createElement("div");
    cardDiv.className = className
    cardDiv.setAttribute("data-topic", cardTopic);
    return cardDiv
}

function createInnerDiv(className) {
    const div = document.createElement("div");
    div.className = className;
    return div;
}

function createImage(authorPhoto) {
    const img = document.createElement("img");
    img.setAttribute("src", authorPhoto);
    return img;
}


function createSpan(authorName) {
    const span = document.createElement("span");
    span.innerHTML = `By: ${authorName}`;
    return span;
}


function createArticleComponent(topic, headline, authorPhoto, authorName) {

    const cardDiv = createArticleCardDiv(topic, "card");

    const headlineDiv = createHeadline("headline", headline);
    cardDiv.appendChild(headlineDiv)

    const authorDiv = createInnerDiv("author");
    const imgContainer = createInnerDiv("img-container");
    authorDiv.appendChild(imgContainer)

    const img = createImage(authorPhoto)
    imgContainer.appendChild(img)
   
    const span = createSpan(authorName);
    authorDiv.appendChild(span);

    cardDiv.appendChild(authorDiv)
    cardsContainer.appendChild(cardDiv)

    return cardDiv
}


function articlesByTopic(topic, article) {     
    headline = article['headline'];
    authorPhoto = article['authorPhoto'];
    authorName = article['authorName'];
    createArticleComponent(topic, headline, authorPhoto, authorName)
}  


function createArticleCard(allArticleData) {
    for (const topic in allArticleData) {
        for (let article of allArticleData[topic]) {
            articlesByTopic(topic, article);
        }
    }
}
    

function fetchArticleData(articleData) {
    axios.get(articleData)
        .then(function(response) {
            let allData = response.data['articles']
            createArticleCard(allData);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

let allData = fetchArticleData(articleData);