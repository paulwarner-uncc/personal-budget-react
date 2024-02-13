function Review(props) {
    return (
    	<article itemScope itemType="https://schema.org/Review">
            <h2 itemProp="author">{props.author}</h2>
            <p itemProp="reviewBody">
                <mark itemProp="reviewRating">{props.rating}/5</mark> {props.review}
            </p>
        </article>
    );
  }

export default Review;
