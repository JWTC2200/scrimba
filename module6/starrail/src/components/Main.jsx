import {charData} from "../data/chardata.js"

export default function Main(props) {

    const postElements = charData.map(entry => {
        const splashPath = `./src/images/splash_${entry.fileID}.png`
        const quotePath = `./src/images/quote_${entry.fileID}.png`
        const typePath = `./src/images/icon_${entry.type}.png`
        const storyElements = entry.story.map(line => <p key={line} className="story">{line}</p>)

        return (
            <div 
                key={entry.id} 
                id={entry.id} 
                className="character-post"
            >
                <img className="post-splash" src={splashPath}></img>
                <div className="post-title">
                    <h1>{entry.name}</h1>
                    <img className="type-icon" src={typePath}></img>
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
            <img className="hero-image" src="./src/images/bg_honkaiwp2.png"></img>
        </div>

    const homeElements = 
        <div>
            HOME
        </div>

    return(
        <main className={props.page}>
            {props.page != "about" && heroElements}
            <h2 className="character-title">Characters</h2>
            <div className="grid-container">                
                {postElements}
            </div> 
        </main>
    )
}