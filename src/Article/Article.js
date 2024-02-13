function Menu(props) {
    return (
    	<article itemScope itemType="https://schema.org/Article">
            <h1 itemProp="name">{props.name}</h1>
            <p itemProp="description">{props.description}</p>
        </article>
    );
  }

export default Menu;
