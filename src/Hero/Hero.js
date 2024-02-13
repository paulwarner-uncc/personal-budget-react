function Hero() {
	// If bg.png is included in the CSS directly, an error occurs.
    return (
    	<div className="hero"
			aria-label="A phone and a tablet displaying a bar chart and a line graph, respectively."
			style={{
				backgroundImage: `url(/bg.png)`
			}}
		>
            <h1>Personal Budget</h1>
            <h2>A personal-budget management app</h2>
      	</div>
    );
  }
  
export default Hero;
