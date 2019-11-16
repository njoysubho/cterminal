const express = require('express')
const app = express()
const port = 3000
// may be pluggable 
const feed_urls=[
    "https://news.google.com/rss/search?q=climate&hl=en-US&gl=US&ceid=US:en"
]
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/climate-feed',(req,res)=>res.send(get_feed()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const Parser = require('rss-parser');
const parser = new Parser();
let RssFeedEmitter = require('rss-feed-emitter');
let feeder = new RssFeedEmitter();
const result = [];
/*(async () => {
 
  let feed = await parser.parseURL(feed_urls[0]);
  console.log(feed.title);
  result=[]
  feed.items.forEach(item => {
    result.push("{title:"+item.title+",link:"+item.link+"}")
    console.log(result)
  });
 
})();*/
feed_urls.forEach(source => {
    feeder.add({
        url: feed_urls[0],
        refresh: 2000
    })
}
);
feeder.on('new-item', function(item) {
    news={};
    news["link"]=item.link;
    news["title"]=item.title;
    news["description"]=item.description;
    result.push(news);
  })

  function get_feed(){
    return result;
  } 


