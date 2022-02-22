(() => {

  const DOMString = `<div class="olydesktok">this app working only with mobile viewer</div>
    <div class="onlymobil">
    <div class="header">
      <div id="menuButton">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="#fff" d="M3.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2ZM4 9V8h1v1H4Zm3.5-2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM1 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2a2 2 0 0 1 2 2v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5V4Zm11.5 6.5a.5.5 0 0 1-.5-.5V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6.5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5V6a1 1 0 0 0-1-1v5a.5.5 0 0 1-.5.5Z"/></svg>
      </div>
      <div id="title">Web News</div>
       <div class="action">
         <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="#fff" d="M5.75 4a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0Zm0 6a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0ZM4 17.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5ZM11.75 4a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0ZM10 11.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5ZM11.75 16a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0ZM16 5.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5ZM17.75 10a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0ZM16 17.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5Z"/></svg>
        <div class="actionMenu">
          <ul>
            <li><a href="https://github.com/rawand-developer/">GitHub</a></li>
            <li><a href="https://rawand.eu.org">My WebSite</a></li>
            <li><a href="https://instagram.com/rawand_dev/">Instagram</a></li>
            <li><a href="https://facebook.com/HTMLGAMEKURD/">Facebook</a></li>
            <li><a href="https://newsapi.org/">News Api Site</a></li>
          </ul>
        </div>
      </div>
      <div class="blockArena2"></div>
    </div>
    <div class="content" id="content">
      <div class="postrawa"></div>
    </div>
    </div>`
  
  const createLinkElementAndAppendInHead = (path) => {
    const element = document.createElement('link');
    element.href = `${path}`;
    element.rel = 'stylesheet';
    document.head.append(element);
  }
  
  const key = "4645bcf241c542279d15316495dd6566"
  const lang = "us"
  const postviewer = "100"
  const url = `https://newsapi.org/v2/top-headlines?country=${lang}&pageSize=${postviewer}&apiKey=${key}`
  
  const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".postrawa")
    newsdata.articles.forEach((article) => {
  
  
      const div = document.createElement("div")
      div.className = "news"
      div.innerHTML = `<div class="feed">
          <img class="image" id="img2" src="${article.urlToImage ? article.urlToImage : ''}" />
          <div class="text">
            <h4>${article.title}</h4>
          </div>
          <div class="btnCircle"><a href="${article.url}">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.3em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#fefefe" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"/></svg>
          </a></div>
        </div>`
      articlesDiv.appendChild(div)
  
    })
  }
  
  fetch(url)
    .then(response => response.json())
    .then(recievedNews)
  
  $(document).ready(function() {
  
    var feed = true;
    var feed = true;
    var feed = true;
    var feed = true;
  
    $("#menuButton").click(function() {
      $(".blockArena").css("display", "block");
      $(".menu").animate({
        left: "80%"
      }, 300);
    });
  
    $(".blockArena").click(function() {
      $(".menu").animate({
        left: "0"
      }, 300, function() {
        $(".blockArena").css("display", "none");
      });
    });
  
    $(".action").click(function() {
      $(".actionMenu").css("display", "block");
      $(".actionMenu").animate({
        height: "230"
      }, 100, function() {
        $(".blockArena2").css("display", "block");
      });
    });
  
    $(".blockArena2").click(function() {
      $(".actionMenu").css("display", "none");
      $(".actionMenu").animate({
        height: "0"
      }, 100, function() {
        $(".blockArena2").css("display", "none");
      });
    });
  
    $("#mainCircle").click(function() {
      if (isShown == false) {
        isShown = true;
        $(".crc").css("display", "block");
        $(".circleMenu").animate({
          marginTop: "50%"
        }, 300);
      } else {
        isShown = false;
        $(".crc").css("display", "none");
        $(".circleMenu").css("margin-top", "93%");
      }
    });
  });
  
  createLinkElementAndAppendInHead('https://fonts.googleapis.com/css2?family=Outfit:wght@500&display=swap');
    document.body.insertAdjacentHTML('afterbegin', DOMString)
    
})(); 
 
