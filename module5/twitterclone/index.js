import { tweetsData } from "./data.js";

const tweetInput = document.getElementById("tweet-input")
const tweetBtn = document.getElementById("tweet-btn")
const feed = document.getElementById("feed")

tweetBtn.addEventListener("click", () => 
    console.log(tweetInput.value)
)

document.addEventListener("click", (event) => {
    const eventTarget = event.target.dataset
    eventTarget.heart && likeTweet(eventTarget.heart)
    eventTarget.retweet && console.log("retweet")
    }
)

function likeTweet(tweetId) {
    const matchingTweet = tweetsData.filter(tweet => 
        tweet.uuid === tweetId)[0]
    console.log(matchingTweet)
}


function getFeedHTML() {
    const feedTweets = tweetsData.map(tweet => 
        `<div class="tweet">
            <div class="tweet-inner">
                <img src=${tweet.profilePic} class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-regular fa-comment-dots" 
                            data-reply=${tweet.uuid}></i>
                            ${tweet.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-heart"
                            data-heart=${tweet.uuid}></i>
                            ${tweet.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet"
                            data-retweet=${tweet.uuid}></i>
                            ${tweet.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
        </div>`
        )
    feedTweets.forEach(tweet => 
        feed.innerHTML += tweet
    )
}

getFeedHTML()
