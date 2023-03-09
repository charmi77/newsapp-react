import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    console.log("hi");
    this.state = {
      articles : [],
      loadimg: false,
      page:1
    }
  }

  async componentDidMount(){
    console.log('cdm');
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=901fe387742d49bf9f731c9998746d9d&page=1&pageSize=15";
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
  }

  handlePreviousClick = async ()=>{
    console.log('pre');
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=901fe387742d49bf9f731c9998746d9d&page=${this.state.page -1}&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      page : this.state.page -1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async ()=>{
    console.log('next');
    console.log(this.state.totalResults);

    if(this.state.page +1 < Math.ceil(this.state.totalResults/15)){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=901fe387742d49bf9f731c9998746d9d&page=${this.state.page +1}&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      page : this.state.page +1,
      articles: parsedData.articles
    })
  }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsApp - Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url}/>
          </div>

          })}
        
          
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News