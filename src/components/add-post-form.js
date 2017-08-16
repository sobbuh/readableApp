import React, { Component } from 'react'


const AddPostForm = (props) => {

  return (
<div className="column is-offset-2 box is-two-thirds">
    <div className="field">
  <label className="label">Title</label>
  <div className="control">
    <input className="input" type="text" placeholder="Give your post a title" />
  </div>
  </div>

<div className="field">
<label className="label">Author</label>
<div className="control">
<input className="input" type="text" placeholder="What's your name?" />
</div>
</div>

<div className="field">
<label className="label">Category</label>
<div className="control">
<input className="input" type="text" placeholder="Pick a Category" />
</div>
</div>

<div className="field">
  <label className="label">Body</label>
  <div className="control">
    <textarea className="textarea" placeholder="Write your post"></textarea>
  </div>
</div>

<div className="field is-grouped">
  <div className="control">
    <button className="button is-primary">Submit</button>
  </div>
  <div className="control">
    <button className="button is-link">Cancel</button>
  </div>
</div>
</div>

  )
}

export default AddPostForm
