/*

PostsNew = reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(PostsNew)

PostsNew = connect(
  state => {
    const posts = state.posts;
    const selected = state.selected;
    console.log('state: ', state);
    return {
      initialValues: posts[selected.id]
    }
  },
  { createPost }
)(PostsNew)

export default PostsNew;

*/
