
// set up text to print, each item in array is new line
var aText = new Array(
    "As an inspired programmer, I am dedicated to constantly expanding my knowledge and skills in the field of coding.",
    "",
    "With a strong passion for programming, I am committed to staying up-to-date with the latest technologies and trends, as well as continually improving my abilities through practice and education.", 
    "",
    "I thrive on solving complex problems and enjoy the challenge of finding efficient and effective solutions through coding.", 
    "",
    "With a strong foundation in programming languages such as JavaScript, Python, and C++, I am always eager to learn more and take on new challenges. Overall, I am a driven and motivated programmer with a passion for coding and a desire to continuously grow and improve my skills."
    );
    var iSpeed = 80; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();
