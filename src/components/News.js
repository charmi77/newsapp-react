import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =[
    {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "US arrests two for illegally exporting aviation tech to Russia",
      "description": "The men allegedly conspired to skirt US export laws to sell sophisticated aviation equipment to Russia.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-64832044",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6D9F/production/_128836082_gettyimages-1242409189.jpg",
      "publishedAt": "2023-03-03T03:37:18.5754243Z",
      "content": "Two men in the US state of Kansas have been arrested on suspicion of illegally sending aviation technology to Russia. \r\nCyril Gregory Buyanovsky, 59, and Douglas Robertson, 55, owned and operated the… [+1247 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Half of world on track to be overweight by 2035",
      "description": "Africa and Asia are expected to see the biggest rises in obesity, the World Obesity Federation says.",
      "url": "http://www.bbc.co.uk/news/world-64831848",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5EC7/production/_128836242_gettyimages-1001048332.jpg",
      "publishedAt": "2023-03-03T03:07:20.8569832Z",
      "content": "Media caption, 'Bike desks' attempt to combat obesity in Mexico\r\nMore than half the world's population will be classed as obese or overweight by 2035 if action is not taken, the World Obesity Federat… [+2208 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Tennessee curbs trans treatment and drag for children",
      "description": "The governor signs the laws as questions are asked about an old photo apparently of him in women's clothing.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-64830835",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/160FB/production/_128836309_nashvillegettyimages-1405156714.jpg",
      "publishedAt": "2023-03-03T03:07:17.1690802Z",
      "content": "Tennessee's governor has signed laws banning drag performances in front of children and restricting medical treatment for transgender youth. \r\nBill Lee enacted the legislation as questions were asked… [+4385 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Alex Murdaugh verdict: Disgraced lawyer guilty of killing wife and son",
      "description": "The case laid bare the unravelling of a Deep South legal dynasty riven by greed and addiction.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-64832081",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/62A5/production/_128835252_52721852726_371aca4780_k.jpg",
      "publishedAt": "2023-03-03T00:52:16.6231872Z",
      "content": "The jury deliberated for less than three hours before finding Alex Murdaugh, 54, guilty of two counts of murder at the end of a six-week trial."
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "How Alex Murdaugh concealed his dark side",
      "description": "The heir to a powerful southern legal dynasty is convicted of murdering his wife and son.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-64832280",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4F8B/production/_128836302_p0f6gr77.jpg",
      "publishedAt": "2023-03-03T00:52:14.0905938Z",
      "content": "The heir to a powerful southern legal dynasty has been convicted of murdering his wife and son. \r\nWhat we know about the disgraced lawyer from police body cam footage to courtroom testimony."
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "A place to exercise your brain? Introducing mental health gyms",
      "description": "Mental health gyms devoted to brain exercises like meditation and journaling are popping up across the US.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-64042267",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/AB34/production/_128082834_davidmccullar.jpg",
      "publishedAt": "2023-03-02T15:22:21.3877777Z",
      "content": "When 42-year-old David McCullar thinks back to the early 2000s, a chapter in his life marked by rapid changes, he recalls palm trees, sunny beaches - and panic attacks that made him ill.\r\n\"I was thro… [+6258 chars]"
  }
  ]
  constructor(){
    super();
    console.log("hi");
    this.state = {
      articles : this.articles,
      loadimg: false
    }
  }

  async componentDidMount(){
    console.log('cdm');
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=901fe387742d49bf9f731c9998746d9d";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles});
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
      </div>
    )
  }
}

export default News