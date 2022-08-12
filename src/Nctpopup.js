import React from 'react'
import './Nctpopup.css'
import { useState } from 'react'
import NewsData from './news.json'

var getNewsReq;
const newsdbName = 'news_database'
const newsrequest = window.indexedDB.open(newsdbName, 1)

// If error opening the Database
newsrequest.onerror = event => {
  console.log('Database error: ' + event.target.errorCode)
}

// When data needs to be added/changed
newsrequest.onupgradeneeded = event => {
  var ndb = event.target.result;
  const objectStore = ndb.createObjectStore('news', { autoIncrement: true })

  // After ObjectStore is created add all the news
  objectStore.transaction.oncomplete = event => {
    const newsObjectStore = ndb.transaction('news', 'readwrite').objectStore('news')
    NewsData.forEach(function (news) {
      newsObjectStore.add(news)})}
}

// promise for opening the database and getting the data
var newsPromise = new Promise(function(resolve, reject) {
  newsrequest.onsuccess = event => {
    var ndb = event.target.result;

    // opens the news database as readonly
    const newsstore = ndb.transaction('news', 'readonly').objectStore(('news'))

    // gets all the data in the news database
    getNewsReq = newsstore.getAll();

    getNewsReq.onsuccess = () => {
      console.log('Getting news data was successful')
      resolve()
    }

    getNewsReq.onerror = () => {
      console.log("Error getting news data");
      reject()
    }}
})



// HTML Below is for the popup section of the news menu
export default function Nctpopup (props) {

    //Where the news popup logic is housed
    function NewsPopup () {
        //before the news data is loaded this is what is shown
        const [newsdata, setnewsData] = useState([{ Title: 'Loading...', Description: 'Loading' }])

        const [newsDesc, setNewsDesc] = useState('Loading..');
      
        // function for adding data to the table
        function addNewsData () {
          setnewsData(getNewsReq.result)
        }

        // function for showing and hiding the news text
        function HideNewsText() {
            var newstext = "Hello"
            setNewsDesc(newstext)
            
        }

        HideNewsText("hello");
      
        // when the request is finished run the addTableData function
        newsPromise.then(whencompleted => addNewsData())
        console.log(newsdata);
        return (
          <div className='popup'>
              <table>
                <tbody>
                    {newsdata.map((news) => (
                    <tr key={news.Title}>
                        <div>
                            <h1>{news.Title}</h1>
                            <p>{newsDesc}</p>
                        </div>
                    </tr>
                    ))}
                </tbody>
              </table>
          </div>
        )
    }

    if (props.type === 'news')
    {
        return (<NewsPopup/>)
    }
    else {
        return (
            <div className='popup'>
                <p>There are no results to display</p>
            </div>
        )
    }
    

}