function searching() {
  var srch = document.getElementById('searchbar').value;
  alert("Searching for article on " + srch);
  if (srch == "Terraria"){
    window.open("subdirectories/articles/001Terraria/article.html");
  }
  else if (srch == "terraria"){
    window.open("subdirectories/articles/001Terraria/article.html");
  }
  else if (srch == "Undertale"){
    window.open("subdirectories/articles/002Undertale/article.html");
  }
  else if (srch == "undertale"){
    window.open("subdirectories/articles/002Undertale/article.html");
  }
  else{
    alert("Invalid search. The given option may not exist. Sorry");
  }
}