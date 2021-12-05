function searching() {
  var srch = document.getElementById('searchbar').value;
  if (srch == "Terraria"){
    alert("Searching for article on " + srch);
    window.open("subdirectories/articles/001Terraria/article.html");
  }
  else if (srch == "terraria"){
    alert("Searching for article on " + srch);
    window.open("subdirectories/articles/001Terraria/article.html");
  }
  else if (srch == "Undertale"){
    alert("Searching for article on " + srch);
    window.open("subdirectories/articles/002Undertale/article.html");
  }
  else if (srch == "undertale"){
    alert("Searching for article on " + srch);
    window.open("subdirectories/articles/002Undertale/article.html");
  }
  else if (srch == ""){
    alert("You can't search for nothing! Please type something.");
  }
  else{
    alert("Searching for article on " + srch);
    alert("Invalid search. The given option may not exist. Or you may have made a spelling mistake.");
  }
}