#Climate Terminal

## Directory structure
 
There are two folders under berlin-drivery 
 - cterminal-ui ---> This is a ReactJs app Running locally on port 2000
 - climate-terminal-node --> express nodejs app Running locally on port 3000

## How to Run

- To run UI code cd to cterminal-ui then run `npm install` and ` npm start `
- To run backend server cd to climate-terminal-node then run `npm install` and `node index.js` 

## API Documentation

- GET Historical Yearly Average Temparature from 1920-1999 By Country

GET /historical/temp/:country 

`country` ISO3 country code

Response 

```{
  "data": [
    {
      "year": 1901,
      "data": 7.7815504
    },
    {
      "year": 1902,
      "data": 7.262445
    },
    {
      "year": 1903,
      "data": 8.382242
    },
    ....
    ....
  ]
} 
```
     

- GET Historical Monthly Average Temparature from 1920-1999 By Country AND Month

`country` ISO3 country code

GET /historical/temp/:country?month=January

Response 

```
{
  "data": [
    -0.89664917,
    -4.634562683,
    -0.063146973,
    1.512516785,
    -3.35109558105475,
    -0.58978271484453,
    1.1162963867189297,
    3.0710784912104994,
    -2.92234344482385,
    1.9875411987301,
    ....
    ....
}
```

- GET '/climate-feed'

Fetch climate related news from google news RSS 

Response
```
{
    "link": "https://www.scmp.com/business/companies/article/3038957/hong-kong-mainland-chinese-companies-more-willing-disclose",
    "title": "Hong Kong, Chinese firms more willing to disclose climate change risks - South China Morning Post",
    "description": "<a href=\"https://www.scmp.com/business/companies/article/3038957/hong-kong-mainland-chinese-companies-more-willing-disclose\" target=\"_blank\">Hong Kong, Chinese firms more willing to disclose climate change risks</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">South China Morning Post</font>"
  },
  {
    "link": "https://www.scmp.com/business/companies/article/3038957/hong-kong-mainland-chinese-companies-more-willing-disclose",
    "title": "Hong Kong, Chinese firms more willing to disclose climate change risks - South China Morning Post",
    "description": "<a href=\"https://www.scmp.com/business/companies/article/3038957/hong-kong-mainland-chinese-companies-more-willing-disclose\" target=\"_blank\">Hong Kong, Chinese firms more willing to disclose climate change risks</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">South China Morning Post</font>"
  }
  ....
  ....
  
  ]
```
