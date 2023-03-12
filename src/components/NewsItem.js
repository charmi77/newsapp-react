import React, { Component } from 'react'
import mainLogo from '../news.jpg';


export class NewsItem extends Component {
  render() {
    let {title,description,imageurl,newsurl,author,date,source} = this.props;
    return (
      <div className="my-3">
      <div className="card">
      <img src={imageurl?imageurl:mainLogo} className="card-img-top" alt="..."/>
      <div className="card-body">
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'50%', zIndex:'1'}}>
    {source}
  </span>
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toDateString()}</small></p>
        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
      </div>
    </div>
    </div>
    )
  }
}

export default NewsItem