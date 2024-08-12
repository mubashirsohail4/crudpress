document.getElementById("deleteArticle").addEventListener("click", function () {
  var articleId = document.querySelector("h1").id;
  fetch(`/delete`, {
    method: "DELETE",
    headers: {
      id: articleId,
    },
  }).then(() => {
    window.location.href = "/articles";
  });
});
