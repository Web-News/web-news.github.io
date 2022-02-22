  const key = "4645bcf241c542279d15316495dd6566"
  const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${key}`
  
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
