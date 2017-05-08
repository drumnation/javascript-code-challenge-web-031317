$(document).ready(function(){

  listOfComments = new CommentList()

  $('form#note-form').on('submit', function(event) {
    event.preventDefault()
    content = $('input#content').val()
    listOfComments.addComment(content)
    $('#comment-list').html(listOfComments.render())
    $('input#content').val('')
  })
})
