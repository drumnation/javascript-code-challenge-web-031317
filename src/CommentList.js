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
    var html 
    html += "<ul>"
    html += this.allComments.map(function(comment){ return comment.render()}).join('')
    html += "</ul>"
    return html
  }

}
