class CommentList {
  constructor() {
    this.allComments = []
  }

  addComment(content) {
    let new_comment = new Comment(content)
    console.log("2. instantiate new comment")
    this.allComments.push(new_comment)
    console.log("3. push comment")
    console.log(this.allComments)
  }

  render() {
    this.allComments.map(function(comment) { // can't get this to render
      `<ul>${comment.render()}</ul>` // => undefined
    })
  }

}
