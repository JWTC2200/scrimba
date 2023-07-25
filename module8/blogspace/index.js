const postContainer = document.getElementById("post-container")
const newTitle = document.getElementById("post-title")
const newText = document.getElementById("post-text")
const form = document.getElementById("new-post")
let postsArray = []


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        addPostHtml(postsArray)
    })

form.addEventListener("submit", (event) => {
    event.preventDefault()

    
    const newPost = {
        title: newTitle.value,
        body: newText.value
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data =>  {
        postsArray.unshift(data)
        addPostHtml(postsArray)
        form.reset()
    })})

function addPostHtml(array) {
    postContainer.innerHTML = ""
    const postsHTML = array.map(post =>
        `
        <div class="post-item">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        </div>`
    )
    postsHTML.forEach(post => postContainer.innerHTML += post)
}
