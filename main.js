var contents = $("#contents");
var contentsParent = contents.parent();
contents.remove();
contentsParent.append(
  `<h2 class="beautText">Get back to building your dreams</h2>`
);
$.ajax({
  method: "GET",
  url: "https://picsum.photos/list",
  success: function (result) {
    randomNumber = Math.floor(Math.random() * 992);
    const selection = result[randomNumber];
    console.log(selection.id);
    const postUrl = "https://unsplash.it/1200/800?image=" + selection.id;
    console.log(postUrl);
    contentsParent.append(`<img id="motivation" width=60% src=${postUrl}>`);
  },
  error: function (err) {
    console.log("no success :(");
    console.log(err);
  },
});
