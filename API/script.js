const generateMemeButton = document.querySelector("#meme-button");
const memeTitle = document.querySelector("#meme-title");
const memeImage = document.querySelector("#meme-image");
const memeAuthor = document.querySelector("#meme-author");

const updateDetails = (url, title, author) =>{
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
};

const generateMeme = () =>{
    fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then(data => {
        updateDetails(data.url, data.title, data.author);
    });
};


generateMemeButton.addEventListener('click', generateMeme());


// for (i=1; i <= 10; i++){
//     console.log(i);
// }
