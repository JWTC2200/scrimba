import {charData} from "../data/chardata.js"

export default function Main(props) {

    const postElements = charData.map(entry => {
        const splashPath = `/images/splash_${entry.fileID}.png`
        const quotePath = `/images/quote_${entry.fileID}.png`
        const typePath = `/images/icon_${entry.type}.png`
        const storyElements = entry.story.map(line => <p key={line} className="story">{line}</p>)

        return (
            <div 
                key={entry.id} 
                id={entry.id} 
                className="character-post"
            >
                <img className="post-splash" src={splashPath}></img>
                <div className="post-title">
                    <img className="type-icon" src={typePath}></img>
                    <h2>{entry.name}</h2>                    
                </div>
                {storyElements}
                <img className="post-quote" src={quotePath}></img>                
            </div>
        )
    })

    const heroClasses = `hero-container hero-${props.page}`

    const heroElements = 
        <div className={heroClasses}>
            <div className="hero-text">
                <h2>My responsive page</h2>
                <p>This page was made to practice my responsive design skills. </p>
            </div>
            {props.page === "index" && <img className="hero-image" src="/images/bg_honkaiwp2.png"></img>}
            {props.page === "home" && <img className="hero-image" src="/images/logo_starrail_white.png"></img>}        
            {props.page != "index" && 
                <div className="hero-text">
                    <h3>Why this site?</h3>
                    <p>I've been going through the Scrimba front-end developer course for a couple months now. I discovered it after looking for React courses and decided to jump straight into that.</p>        
                    <p>After completing the basic React course I felt that my knowledge of CSS and Javascript had quite a few gaps. Going back over the basic modules helped me improve a lot and it led to this site.</p>
                    <p>This is my take on the responsive webdesign solo project. Not the learning journal they suggested but something closer to my gaming interests at this time.</p>
                    <p>This site uses CSS grid and media to display character info from the game Honkai Star rail. I also used Vite and React to make the site as practice.</p>
                </div>
            }                     
        </div>

    return(
        <main className={props.page}>
            {heroElements}
            <h1 className="character-title">Characters</h1>
            <div className="grid-container">                
                {postElements}
            </div> 
        </main>
    )
}