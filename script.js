/* Exercise 2: Color picker */

function setPreviewColor (color){
  $('.preview').css('background-color', color)

  const colorText = $('.preview').css('background-color')
  $('.color-code').text(colorText)
}


// Handle user's event interaction 
$(document).on('keydown keyup keypress', '#color', function () {
  const colorInputValue = $('input').val() /* $(this).val() */
  
  setPreviewColor(colorInputValue)
})


function addBox(color) {
  $('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>')
}


// Handle user's event interaction on click
$(document).on('click', '#add-to-favorite', function () {
  const colorInputValue = $('input').val() /* retrieve value from the color field */
  addBox(colorInputValue) /* add a box with the input color */

  $('input').val('') /* reset value */
})


// Add some initial colours on page load.
let colors = [ '22ac5e', 'd68236', 'ffa500'];

$(document).ready(function() {
  // Code that runs when the document is ready

  colors.forEach(color => {
    addBox(color)
  })
});
