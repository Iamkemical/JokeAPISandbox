const foodInput = document.getElementById('input-text');
const enterKey = document.getElementById('enter-btn').addEventListener('click', getFood);


function getFood() {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    fetch(`${proxy}https://official-joke-api.appspot.com/random_ten`)
    .then((res) => res.json())
    .then((data) => {
        let output = '<h5 class = "text-center mb-3">Random Jokes</h5>';
        for(let i = 0; i < data.length; i++) {
             output += `
            <div class = "card card-body mb-3">
                <h6> Type: ${data[i].type.toUpperCase()} </h6>
                <h6> Setup: ${data[i].setup} </h6>
                <h6> Punchline: ${data[i].punchline} </h6>
            </div>
            `;
        }
        document.getElementById('output').innerHTML = output;
    });
}