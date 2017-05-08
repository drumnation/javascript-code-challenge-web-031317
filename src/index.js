$(document).ready(function(){
  $('form#note-form').on('submit', function(event) {

    event.preventDefault()

    console.log("1. hit the form")

    listOfComments = new CommentList()

    content = $('input#content').val()

    listOfComments.addComment(content)

    console.log('4. added comment to commentList')

    $('#comment-list').append(listOfComments.render())

    console.log('5. appends comments')

  })
})
