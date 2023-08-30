import "./vanlisting.css"
import Button from "../Button/Button"

export default function VanListing({id, name, price, imageUrl, type}) {

    return (
            <div 
                key={id}
                className="van-listing-container"
            >
                <img 
                    src={imageUrl} 
                    className="van-listing-image" 
                    alt={`${name} van image`} 
                />
                <h3 className="van-listing-name">{name}</h3>
                <Button styling={`van-listing-button on ${type}`}>{type}</Button>
                <div className="van-listing-price">
                    ${price}
                    <br/>
                    <span>/day</span>
                </div>
            </div>
    )
}