```javascript
import React from "react";
import ReactDOM from "react-dom";
import { books, Image, Title, Author } from "./book";

//we can import css
//css needs full path
import "./index.css";

// nested components, react tools

function BookList() {
	return (
		<div className="booklist">
			{books.map((book) => {
				return <Book key={book.id} {...book} />;
			})}
			{books.map((book) => {
				return <Book key={book.id} {...book} />;
			})}
			{books.map((book) => {
				return <Book key={book.id} {...book} />;
			})}
		</div>
	);
}

function Book(props) {
	console.log(props);
	const { src, title, author } = props;
	return (
		<article className="book">
			<Image src={src} />
			<Title title={title} />
			<Author author={author} />
		</article>
	);
}

//so what is props? it is a argument on component.
//How is it used? When you want to deploy a component to mother component, you can pass it in html looking tag
//say you have image props in image component, and set up source and props.src, then you can use it and pass it when you use it in mother component
//in this example you are using in Book component

ReactDOM.render(<BookList />, document.getElementById("root"));

export const books = [
	{
		id: 1,
		src: "https://images-na.ssl-images-amazon.com/images/I/41wBo8-XN7L._AC_SX184_.jpg",
		title: "Official SAT",
		author: "Not Me",
	},
	{
		id: 2,
		src: "https://images-na.ssl-images-amazon.com/images/I/61wi-B-Hi9L._AC_SX184_.jpg",
		title: "The Adventure Zone",
		author: "Clint McElroy",
	},
	{
		id: 3,
		src: "https://images-na.ssl-images-amazon.com/images/I/5103HgmdtjS._AC_SX184_.jpg",
		title: "The Bad Guys",
		author: "Aaron Blabey",
	},
];

export function Image(props) {
	return <img src={props.src} alt="" />;
}

export function Title(props) {
	return <h2>{props.title}</h2>;
}

//you can add inline styling in jsx. but it's weird
export function Author(props) {
	return <h4 style={{ color: "coral" }}>{props.author}</h4>;
}
```

```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	background: #f1f5f8;
	color: #222;
}

.booklist {
	width: 90vw;
	max-width: 1170px;
	margin: 5rem auto;
	display: grid;
	gap: 2rem;
}

@media screen and (min-width: 768px) {
	.booklist {
		grid-template-columns: repeat(3, 1fr);
	}
}

.book {
	border-radius: 10px;
	padding: 5px 20px;
	background-color: beige;
}
```
