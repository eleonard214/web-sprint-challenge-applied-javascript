// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
    console.log(response.data.articles)

    let articles = response.data.articles;
    let topicKey = Object.keys(articles);
    const cardsContainer = document.querySelector('.cards-container');
    console.log(topicKey);

    for (let topic in articles){
        let topicArray = articles[topic];
        topicArray.forEach(item => {
            cardsContainer.appendChild(cardCreator(item, topic));
        })
    }
})

function cardCreator(articleObject, topic){
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(`card_${topic}`);

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = articleObject.headline;
    card.appendChild(headline);

    const author= document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    const imagContainer = document.createElement('div');
    imagContainer.classList.add('img-container');
    author.appendChild(imagContainer);

    const authorImg = document.createElement('img');
    authorImg.src = articleObject.authorPhoto;
    imagContainer.appendChild(authorImg);

    card.addEventListener('click', () => {
        console.log(articleObj.headline)
    })
    return card;
}