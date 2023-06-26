const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById("main")

posts.forEach(post => addPost(post))

function addPost(post) {
    const card = document.createElement("div")
    card.className = "card"

    const cardHeader = document.createElement("div")
    cardHeader.className = "card-header"

    const headerImg = document.createElement("img")
    headerImg.className = "header-img"
    headerImg.src = post.avatar

    const headerPara = document.createElement("p")

    const headerBold = document.createElement("span")
    headerBold.className = "bold"
    headerBold.textContent = post.name

    const headerLoc = document.createElement("span")
    headerLoc.className = "card-location"
    headerLoc.textContent = post.location

    headerPara.appendChild(headerBold)
    headerPara.appendChild(headerLoc)
    cardHeader.appendChild(headerImg)
    cardHeader.appendChild(headerPara)
    card.appendChild(cardHeader)

    const cardImg = document.createElement("img")
    cardImg.className = "card-image"
    cardImg.src = post.post
    card.appendChild(cardImg)

    const cardFooter = document.createElement("div")
    cardFooter.className = "card-footer"

    const cardIconsDiv = document.createElement("div")
    cardIconsDiv.className = "card-icons"
    const iconHeart = document.createElement("img")
    iconHeart.className = "icon likeHeart"
    iconHeart.src = "images/icon-heart.png"
    const iconComment = document.createElement("img")
    iconComment.className = "icon"
    iconComment.src = "images/icon-comment.png"
    const iconDM = document.createElement("img")
    iconDM.className = "icon"
    iconDM.src = "images/icon-dm.png"
    cardIconsDiv.appendChild(iconHeart)
    cardIconsDiv.appendChild(iconComment)
    cardIconsDiv.appendChild(iconDM)
    cardFooter.appendChild(cardIconsDiv)

    const cardLikes = document.createElement("div")
    cardLikes.className = "bold card-likes"
    cardLikes.textContent = `${post.likes} likes`
    cardFooter.appendChild(cardLikes)

    const cardComment = document.createElement("p")
    const cardCommentUsername = document.createElement("span")
    cardCommentUsername.className = "bold"
    cardCommentUsername.textContent = post.username    
    cardComment.appendChild(cardCommentUsername)
    const cardCommentText = document.createElement("span")
    cardCommentText.textContent = " " + post.comment
    cardComment.appendChild(cardCommentText)


    cardFooter.appendChild(cardComment)

    card.appendChild(cardFooter)


    main.appendChild(card)
}

function likePost() {
    const newPosts = posts.map(post => {
        post 
    })
}