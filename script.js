/* Exercise 2: Color picker */

function setPreviewColor (color){
  $('.preview').css('background-color', color)

  const colorText = $('.preview').css('background-color')
  $('.color-code').text(colorText)
}


// Handle user's event interaction 
$(document).on('keyup', '#input', function () {
  const colorInputValue = $('input').val()

  $('input').val() /* clear value */

  setPreviewColor(colorInputValue)
})

function addBox(color) {
  $('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>')
}




