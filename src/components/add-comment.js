import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { createComment } from '../actions/'
import { connect } from 'react-redux'

class AddCommentForm extends Component {

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
    values.parentId = this.props.parentId
    values.voteScore = 1
    this.props.createComment(values, () => {
    this.props.history.push('/')})
  }

  render() {
    const { handleSubmit } = this.props
    console.log('add comment form')
    return (
    <div className="column is-offset-2 box is-two-thirds">
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

       <Field
         label="AUTHOR"
         name="author"
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

     if(!values.body){
     errors.body = "Enter some content";
     }
     return errors;
    }



export default reduxForm({
  validate: validate,
  form: 'AddNewComment',
})(connect(null,{ createComment })(AddCommentForm))
