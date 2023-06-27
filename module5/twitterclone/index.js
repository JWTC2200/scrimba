import { tweetsData } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

let tweetingData = tweetsData
const tweetInput = document.getElementById("tweet-input")
const tweetBtn = document.getElementById("tweet-btn")
const feed = document.getElementById("feed")

tweetBtn.addEventListener("click", () => 
    postTweet()
)

document.addEventListener("click", (event) => {
    const eventTarget = event.target.dataset
    eventTarget.heart && likeTweet(eventTarget.heart)
    eventTarget.retweet && retweetTweet(eventTarget.retweet)
    eventTarget.replies && showReplies(eventTarget.replies)
    }
)

function postTweet() {
    if (tweetInput.value) {
        const newTweet = {
            handle: `@Scrimba`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4(),
        }
        tweetsData.unshift(newTweet)
        tweetInput.value = ""
        getFeedHTML(tweetsData)
    }
    
}

function likeTweet(tweetId) {
    tweetingData = tweetingData.map(tweet => 
        tweet.uuid === tweetId ? 
            tweet.isLiked ?
                {...tweet, likes: tweet.likes-1 , isLiked: !tweet.isLiked} : 
                {...tweet, likes: tweet.likes+1 , isLiked: !tweet.isLiked}
         : {...tweet}
        )
    getFeedHTML(tweetingData)
}

function retweetTweet(tweetId) {
    tweetingData = tweetingData.map(tweet => 
        tweet.uuid === tweetId ? 
            tweet.isRetweeted ? 
                {...tweet, retweets: tweet.retweets - 1, isRetweeted: !tweet.isRetweeted} :
                {...tweet, retweets: tweet.retweets + 1, isRetweeted: !tweet.isRetweeted}
        : {...tweet}
        )
    getFeedHTML(tweetingData)
}

function showReplies(tweetId) {
    document.getElementById(`replies-${tweetId}`).classList.toggle("hidden")
}

function getFeedHTML(data) {
    feed.innerHTML = ""
    const feedTweets = data.map(tweet => 
        `<div class="tweet">
            <div class="tweet-inner">
                <img src=${tweet.profilePic} class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-regular fa-comment-dots" 
                            data-replies=${tweet.uuid}></i>
                            ${tweet.replies.length}
                        </span>
                        <span class="tweet-detail ">
                            <i class="fa-solid fa-heart ${tweet.isLiked ? "liked" : ""}"
                            data-heart=${tweet.uuid}></i>
                            ${tweet.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet ${tweet.isRetweeted ? "retweeted" : ""}"
                            data-retweet=${tweet.uuid}></i>
                            ${tweet.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
            <div class="hidden" id="replies-${tweet.uuid}">
            ${getReplyTweets(tweet)}
            </div>
        </div>`
        )
    feedTweets.forEach(tweet => 
        feed.innerHTML += tweet
    )
}

function getReplyTweets(tweet) {
    if (tweet.replies.length === 0) {
        return ""
    } else {
        let replyEls = ""
        tweet.replies.forEach(reply => 
            replyEls += `
                <div class="tweet-reply">
                    <div class="tweet-inner">
                        <img src=${reply.profilePic} class="profile-pic">
                            <div>
                                <p class="handle">${reply.handle}</p>
                                <p class="tweet-text">${reply.tweetText}</p>
                            </div>
                        </div>
                </div>
            ` 
            )
        return replyEls
    }
}

getFeedHTML(tweetsData)
