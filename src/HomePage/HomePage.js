import Articles from '../Articles/Articles';
import Reviews from '../Reviews/Reviews';

function HomePage() {
    return (
      <div className="aside-container">
        <main className="center" id="main">
            <Articles/>
        </main>

        <aside>
            <Reviews/>
        </aside>
    </div>
    );
  }
  
export default HomePage;
