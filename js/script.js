console.log('Hello, front-end');

// $('.outputDiv').text('harooga')


// F to C:  Deduct 32, then multiply by 5, then divide by 9
// C to F:  Multiply by 9, then divide by 5, then add 32
function convertTemp (convertTo, inValue) {
  return convertTo === "toCel" ? 
     (inValue - 32) * 5 / 9: //F to C
     inValue * 9 / 5 + 32  //C to F
}

function printTemp () {
  var inValue = $('.inputField').val()
  var convertTo = $('input[name=scale]:checked').val()
  //gets the *value* of an input type element named "scale" 
  var output = convertTemp(convertTo,inValue)
  $('.outputDiv').text(Math.floor(output))
  var currentScale = convertTo 
  var currentTemp = $('.outputDiv').text()
  var outputEle = $('.outputDiv')
  tempColor(currentScale,currentTemp,outputEle)
}

function tempColor (currentScale, currentTemp, outputEle ) {
  console.log(currentScale)
  var hot = false
  if (currentScale === "toCel" && currentTemp > 40) hot = true
  if (currentScale === "toFah" && currentTemp > 105) hot = true
  hot === true? outputEle.css('color','red') : outputEle.css('color','blue')
}


$('.convertButton').on('click', printTemp)
