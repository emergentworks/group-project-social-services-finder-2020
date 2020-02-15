function closeToast() {
  document.querySelector('.toast').classList.add('toast--hide');
}

function searchTermFinder() {
  const searchTerm = "jobs"
  const searchMapper = {
    "resume": "/not_emergency/resume.html",
    "jobs": "/not_emergency/resume.html",
    "apartment": "/not_emergency/apartments.html",
  }
  const keys = Object.keys(searchMapper)
  console.log(keys)

  for (var i = 0; i < keys.length; i++) {
    // is this searchTerm in searchMapper?
    // if so, return the URL
    // navigate to that URL
    }
    // if (searchTerm === "resume") {
    //   return "/not_emergency/resume.html";
    // }
}
