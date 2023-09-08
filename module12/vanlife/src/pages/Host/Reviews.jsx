import reviewgraph from "../../assets/images/reviews-graph.png"
import { BsStarFill } from "react-icons/bs"

export default function Reviews() {

    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]

    const reviewEl = reviewsData.map(review => {

        const reviewStars = [...Array(review.rating)].map((_, i) => (
            <BsStarFill className="review-star" key={i} />
        ))


        return(
            <div key={review.id}>
                <div className="review">
                    {reviewStars}
                    <div className="review-info">
                        <p className="review-name">{review.name}</p>
                        <p className="review-date">{review.date}</p>
                    </div>
                    <p className="mp0">{review.text}</p>
                </div>
                
            </div>
        )
    })


    return (
        <div className="host-reviews-container">
            <h2 className="bold mp0 fs24">Your reviews  <span className="fs16 fw500">last <span className="underline bold">30 days</span></span></h2>
            <img className="host-graph mt4" src={reviewgraph}/>
            <h3 className="mp0 bold">Reviews ({reviewsData.length})</h3>

            {reviewEl}
        </div>
    )
}