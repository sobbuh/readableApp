Using our action creators, reducers, and API requests to import data from our backend.

---

We're going to use axios to help handle our api requests. Let's try it out to see how it works.

First, we're going to use axios to request our API endpoint and transform the data into a json response

// in utils/api.js




// in actions/index.js

export function fetchComments() {
  return () => {
    api.getAllComments()
    .then(comments => console.log(comments))
  }
}


// in components/app.js
