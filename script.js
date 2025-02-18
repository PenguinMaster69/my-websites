document.addEventListener("DOMContentLoaded", function(){
  const searchBar = document.getElementById("searchBar");
  const container = document.getElementById("container");
  const sites = container.children;
  const sitesArray = Array.from(sites);

  function updateSearchResult() {
    const searchResult = searchBar.value.toLowerCase();
    
    for (let i = 0; i < sitesArray.length; i++) {
      const site = sitesArray[i]
      const siteText = site.textContent.toLowerCase()
      if (searchResult !== "") {
        if (siteText.includes(searchResult)) {
          site.style.display = "block";
        } else {
          site.style.display = "none";
        }
      } else {
        site.style.display = "block";
      }
    }
  }

  searchBar.addEventListener("input", updateSearchResult);
})
