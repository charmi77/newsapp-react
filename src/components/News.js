import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
      country : 'in',
      pageSize : 9,
      category : 'general'
  } 

  static propTypes = {
    country : propTypes.string,
    pageSize : propTypes.number,
    category : propTypes.string
  }

  constructor(){
    super();
    console.log("hi");
    this.state = {
      articles : [],
      loading: false,
      page:1
    }
  }

  async updateNews(){
    console.log('cdm');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=901fe387742d49bf9f731c9998746d9d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})

    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  async componentDidMount(){
    console.log('cdm');
    /* let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=901fe387742d49bf9f731c9998746d9d&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false}); */
    this.updateNews();
  }

  handlePreviousClick = async ()=>{
    console.log('pre');
    /* let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=901fe387742d49bf9f731c9998746d9d&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})

    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      page : this.state.page -1,
      articles: parsedData.articles,
      loading: false
    }) */
    this.setState({page: this.state.page -1});
    this.updateNews();
  }
  handleNextClick = async ()=>{
    console.log('next');

    /* if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
      
    }else{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=901fe387742d49bf9f731c9998746d9d&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json();
    
      this.setState({
        page : this.state.page +1,
        articles: parsedData.articles,
        loading: false
      })
    } */
    if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
      
    }else{
    this.setState({page: this.state.page +1});
    this.updateNews();
    }

  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsApp - Top Headlines</h2>
       {this.state.loading && <Spinner/>} 
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} 
            imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>

          })}
        
          
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News