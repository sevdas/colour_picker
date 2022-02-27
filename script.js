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


// Handle user's event interaction on click
$(document).on('click', '#add-to-favorite', function () {
  const colorInputValue = $('input').val() /* retrieve value from the color field */

  $('input').val('') /* clear value */

  addBox(colorInputValue) /* add a box with the input color */
})


