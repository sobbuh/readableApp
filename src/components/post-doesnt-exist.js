import React from 'react'
import CategoryPage from './categoryPage'

const PostDoesntExist = () => {
  return (
    <div>
      <h2> Sorry, that post doesnt exist. </h2>
      <h2> Check out some of the other posts from {this.match.params.category} </h2>

      <CategoryPage category={this.match.params.category} />
    </div>

  )
}

export default PostDoesntExist
