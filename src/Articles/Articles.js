import Article from '../Article/Article';

function Articles() {
    return (
    	<div className="page-area">
                <Article
                    name="Stay on track"
                    description="Do you know where you are spending your money? If you really stop
                    to track it down, you would get surprised! Proper budget management depends on
                    real data... and this app will help you with that!"
                />

                <Article
                    name="Alerts"
                    description="What if your clothing budget ended? You will get an alert. The goal
                    is to never go over the budget."
                />

                <Article
                    name="Results"
                    description="People who stick to a financial plan, budgeting every expense, get
                    out of debt faster! Also, they to live happier lives... since they expend
                    without guilt or fear... because they know it is all good and accounted for."
                />

                <Article
                    name="Free"
                    description="This app is free!!! And you are the only one holding your data!"
                />

                <Article
                    name="Stay on track"
                    description="Do you know where you are spending your money? If you really stop
                    to track it down, you would get surprised! Proper budget management depends on
                    real data... and this app will help you with that!"
                />

                <Article
                    name="Alerts"
                    description="What if your clothing budget ended? You will get an alert. The goal
                    is to never go over the budget."
                />

                <Article
                    name="Results"
                    description="People who stick to a financial plan, budgeting every expense, get
                    out of debt faster! Also, they to live happier lives... since they expend
                    without guilt or fear... because they know it is all good and accounted for."
                />

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
    );
  }

export default Articles;
