let colors = ['22ac5e', 'd68236', 'ffa500', 'b34de7', '#A62D4D', '#40111E', '#F29057', '#F26363'];

function setPreviewColor (color){
  $('.preview').css('background-color', color)
  const previewColor = $('.preview').css('background-color')

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
  const colorItems = $("#colors .item")

  // Limit the number of colours to 16.
  if (colorItems.length >=16) {
    colorItems.last().remove()
    console.warn('Last item has been removed')
  }
  addBox(colorInputValue) /* add a box with the input color */

  $('input').val('') /* reset value */
  $('input').focus()
})


// Add some initial colours on page load.
$(document).ready(function() {
  // Code that runs when the document is ready

  colors.forEach(color => {
    addBox(color)
  })

  /* Display random color on page load */
  colorIdx = Math.floor( Math.random() * colors.length )
  setPreviewColor(colors[colorIdx])
});


let previewColor;

/* Make the preview area change colour as you point the mouse at the favourite colours */
$(document).on('mouseenter', '.item', function () {
   previewColor = $('.preview').css('background-color')

   const itemColor = $(this).css('background-color')
   setPreviewColor(itemColor)
  }).on('mouseleave', '.item', function () {
    setPreviewColor(previewColor)
   })


  



