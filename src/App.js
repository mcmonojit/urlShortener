import './App.css';
import { useState } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IconContext } from "react-icons";
import { BiClipboard } from "react-icons/bi";

function App() {

  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const copyShortUrl = shortUrl;

  const apiUrl = "https://genshort.herokuapp.com/api/url/shorten"; 

  // const apiUrl = "http://localhost:5000/api/url/shorten"; 


  function onCopyText(){
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 800);
  };

  function createShortUrl(){

    axios.post( apiUrl, 
    {
      userInput: longUrl
    })
    .then(function (response) {
      //console.log(response.data);
      // console.log("axios POST request worked successfully");
      setShortUrl(response.data);
    })
    .catch(function (error) {
      console.log("Error in axios POST\n" + error);
    });

  };


  return (
    <div className="App"> 

      <div className="userInput">
        <input type="url" name="longUrl" id="longUrl" placeholder="Enter the url here..." required  
        onChange={(event) => {
          setLongUrl(event.target.value);
        }}/>
        <button type="submit" onClick={ createShortUrl }>Create short URL</button>
      </div>

      {/* the short Url section */}
      <div className="output-container">
        <textarea className="shortUrl" readOnly={true} value={shortUrl}/>

        <CopyToClipboard text={shortUrl} onCopy={onCopyText}>
          <div className="copy-area">

            {/* <button>Copy to Clipboard</button> */}
            <div className="copyClipboard">
            <IconContext.Provider value={{ color: 'white', size: '20px' }}>
            < BiClipboard />
            </IconContext.Provider>

            <span className="copy-feedback"> 
            {isCopied ? "✓" : ""}  
            </span>
            </div>
            
          </div>
        </CopyToClipboard>
      </div>

    </div>
  );
}

export default App;
