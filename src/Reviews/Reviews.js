import Review from '../Review/Review';

function Reviews() {
    return (
    	<>
            <h1>Testimonials</h1>

            <Review
                author="Bob Jones"
                rating={5}
                review="This app single-handedly saved me from bankruptcy!"
            />

            <Review
                author="Dr. Roberts"
                rating={7}
                review="Definitely not malware!"
            />

            <Review
                author="Sally Webster"
                rating={3}
                review="A perfectly adequate budgeting app."
            />
        </>
    );
  }

export default Reviews;
