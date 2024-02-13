function HomePage() {
    return (
      <div className="aside-container">
        <main className="center" id="main">

            <div className="page-area">
                <article itemScope itemType="https://schema.org/Article">
                    <h1 itemProp="name">Stay on track</h1>
                    <p itemProp="description">
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </article>

                <article itemScope itemType="https://schema.org/Article">
                    <h1 itemProp="name">Alerts</h1>
                    <p itemProp="description">
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </article>

                <article itemScope itemType="https://schema.org/Article">
                    <h1 itemProp="name">Results</h1>
                    <p itemProp="description">
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they to live happier lives... since they expend without guilt or fear...
                        because they know it is all good and accounted for.
                    </p>
                </article>

                <article itemScope itemType="https://schema.org/Article">
                    <h1 itemProp="name">Free</h1>
                    <p itemProp="description">
                        This app is free!!! And you are the only one holding your data!
                    </p>
                </article>

                <article itemScope itemType="https://schema.org/Article">
                    <h1 itemProp="name">Stay on track</h1>
                    <p itemProp="description">
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </article>

                <article itemScope itemType="https://schema.org/Article">
                    <h1 itemProp="name">Alerts</h1>
                    <p itemProp="description">
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </article>

                <article itemScope itemType="https://schema.org/Article">
                    <h1 itemProp="name">Results</h1>
                    <p itemProp="description">
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they to live happier lives... since they expend without guilt or fear...
                        because they know it is all good and accounted for.
                    </p>
                </article>

                <article itemScope itemType="https://schema.org/Article">
                    <h1 itemProp="name">Chart</h1>
                    <p itemProp="description">
                        <canvas id="myChart" width="400" height="400" aria-describedby="myChartAlt"></canvas>
                        <span id="myChartAlt">A very important chart that shows very important things.</span>
                    </p>
                </article>

                <article itemScope itemType="https://schema.org/Article">
                    <h1 itemProp="name">Cooler Chart</h1>
                    <p itemProp="description" id="coolChartCont">
                        <span id="coolChartAlt">A cool chart that shows very cool things.</span>
                    </p>
                </article>

            </div>
        </main>

        <aside>
            <h1>Testimonials</h1>

            <article itemScope itemType="https://schema.org/Review">
                <h2 itemProp="author">Bob Jones</h2>
                <p itemProp="reviewBody">
                    <mark itemProp="reviewRating">5/5</mark> This app single-handedly saved me
                    from bankruptcy!
                </p>
            </article>

            <article itemScope itemType="https://schema.org/Review">
                <h2 itemProp="author">Dr. Roberts</h2>
                <p itemProp="reviewBody">
                    <mark itemProp="reviewRating">7/5</mark> Definitely not malware!
                </p>
            </article>

            <article itemScope itemType="https://schema.org/Review">
                <h2 itemProp="author">Sally Webster</h2>
                <p itemProp="reviewBody">
                    <mark itemProp="reviewRating">3/5</mark> A perfectly adequate budgeting app.
                </p>
            </article>
        </aside>
    </div>
    );
  }
  
  export default HomePage;
