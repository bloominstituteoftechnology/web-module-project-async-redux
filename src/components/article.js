import React, { Component } from "react";

class Article extends Component {
  render() {
    return (
      <div className="articleWrapper">
        <article>
          <div className={"imageWrapper"}>
            <img
              src={this.props.article.imageUrl}
              alt={"spaceImage"}
              width="200"
              height={"200"}
            />
          </div>
          <a href={this.props.article.url} target="_blank">
            <button clssName={"view_button"}>View Full Article</button>
          </a>
          <h1>{this.props.article.title}</h1>
          <p>{this.props.article.summary}</p>
          <h3>Author: {this.props.article.newsSite}</h3>
          <h4>Published At: {this.props.article.publishedAt}</h4>
        </article>
      </div>
    );
  }
}
export default Article;
