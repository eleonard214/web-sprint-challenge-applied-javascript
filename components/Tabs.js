// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(response => {
    console.log(response.data);
    const topics = document.querySelector('.topics');
    let topicsArray = response.data.topics;
    topicsArray.forEach(items => {
        topics.appendChild(tabCreator(item))
    })
})

function tabCreator(topic){
    const tabs = document.createElement('div');
    tabs.classList.add('tab');
    tabs,textContent = topic;

    tabs.classList.add(`card_${topic}`);
    tabs.addEventListener('click', () => {
        console.log(tabs.textContent);
        let topic = tabs.textContent;
        const card = document.querySelectorAll('.card');
        card.forEach(item => {
            item.getElementsByClassName.display = "none";
        });
        const topicCard = document.querySelectorAll(`.card_${topic}`);
        topicCard.forEach(item => {
            item.style.display = "flex";
            item.style.justifyContent = "space-between";
            item.style.backgroundColor = "lightgrey";
        });
    })
    return tabs;
}