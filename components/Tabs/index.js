// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const tabData = "https://lambda-times-backend.herokuapp.com/topics";

function createTabComponent(trendingTopic) {
   
    const tab = document.querySelector(".topics");
    const div = document.createElement("div");
    div.className = "tab";
    div.innerHTML = trendingTopic;
    tab.appendChild(div);
    return tab;
}

function fetchTabTopics(tabData) {
    
    axios.get(tabData) 
        .then(function (response) {
            const backendTechnologies = response.data['topics']
            backendTechnologies.forEach(topic => {
                createTabComponent(topic); 
            });
        })
        .catch(function (error) {
            console.log(error);
        })
    }
 
let eachTab = fetchTabTopics(tabData);