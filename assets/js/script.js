async function readPosts() {
  let postArea = document.querySelector(".posts");
  postArea.innerHTML = "Loading...";

  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let json = await response.json();

  if (json.length > 0) {
    postArea.innerHTML = "";

    for (let i in json) {
      let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}</div>`;
      postArea.innerHTML += postHtml;
    }
  } else {
    postArea.innerHTML = "No posts found.";
  }
}

readPosts();
