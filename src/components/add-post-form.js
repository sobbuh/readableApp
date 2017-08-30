import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { createPost } from '../utils/api.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AddPostForm extends Component {

  renderField(field){
    return (
      <div className="field">
        <div className="control">
        <label className="label">{field.label}</label>
        <input
          className={field.inputType}
          type="text"
          {...field.input}
        />
        <p className="help is-danger">{field.meta.error}</p>
      </div>
      </div>
    )
  }

  onSubmit(values){
    this.props.createPost(values, () => {
    this.props.history.push('/')})
  }

  render() {
    const { handleSubmit } = this.props

    return (
    <div className="column is-offset-2 box is-two-thirds">
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

       <Field
         label="TITLE"
         name="title"
         inputType="input"
         component={this.renderField}
       />

       <Field
         label="AUTHOR"
         name="author"
         inputType="input"
         component={this.renderField}
       />

       <Field
         label="CATEGORY"
         name="category"
         inputType="input"
         component={this.renderField}
       />

       <Field
         label="BODY"
         name="body"
         inputType="textarea"
         component={this.renderField}
       />




       <button className="button is-link" type="submit">Submit</button>
       <button className="button is-link"><Link to="/">Cancel</Link></button>

     </form>
   </div>

      )
    }
}
     function validate(values){ // 136 values contain all values that have been entered into form
     const errors={};
     if(!values.title || values.title.length < 3){
     errors.title = "Enter a title with at least 3 characters!";
     }

     if(!values.category){
     errors.category = "Enter a category";
     }

     if(!values.body){
     errors.body = "Enter some content";
     }
     return errors;
    }



export default withRouter(reduxForm({
  validate: validate,
  form: 'AddNewPost',
})(connect(null,{ createPost })(AddPostForm)))
