class CommentList {
  constructor() {
    this.allComments = []
  }

  addComment(content) {
    let new_comment = new Comment(content)
    this.allComments.push(new_comment)
  }

  render() {
    var html = ''
    html += "<ul>"
    html += this.allComments.map(function(comment){ return comment.render()}).join('')
    html += "</ul>"
    console.log(html)
    return html
  }

}
