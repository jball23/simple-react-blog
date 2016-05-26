// var app = document.getElementById("app");
//
// app.innerHTML = "Hello World"

//Load React and React-DOM modules.
var React = require("react");
var ReactDOM = require("react-dom");

var post = {
  title: "This is why React.js is so cool!",
  author: "Jordan Ballard",
  body: "React is cool because it uses a virtual DOM and is really fast",
  comments: ["I agree!", "Yeah, React is super cool, I use it for all my apps!"]
}

var Comment = React.createClass({
  render: function(){
    return (
      <p>Comments: {this.props.body}</p>
    )
  }
})

var BlogPost = React.createClass({
  render: function(){
    return (
      <div>
        <p>Title: {this.props.title}</p>
        <p>Author: {this.props.author}</p>
        <p>{this.props.body}</p>
        <Comment body={post.comments} />
      </div>
    );
  }
})

ReactDOM.render(
  <BlogPost
    title = {post.title}
    author = {post.author}
    body = {post.body}
    comments = {post.comments[0]}
    />,
  document.getElementById("app")
);
