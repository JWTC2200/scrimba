import {charData} from "../data/chardata.js"

export default function Main() {

    const postElements = charData.map(entry => {
        const splashPath = `./src/images/splash_${entry.fileID}.png`
        const quotePath = `./src/images/quote_${entry.fileID}.png`
        const typePath = `./src/images/icon_${entry.type}.png`
        const storyElements = entry.story.map(line => <p>{line}</p>)

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

    return(
        <main>
            {/* <img src="./src/images/bg_starrail.png"></img> */}
            <div className="grid-container">
                {postElements}
            </div>
            
        </main>
    )
}