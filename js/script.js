
// set up text to print, each item in array is new line
var aText = new Array(
    "As an aspiring cybersecurity professional, I am committed to continuously expanding my technical knowledge and strengthening my skills in security operations and defense.",
    "",
    "With a strong interest in threat detection and response, I actively work to stay current with evolving cyber threats, security tools, and industry practices while improving through hands-on learning and practical experience.",
    "",
    "I enjoy analyzing complex security problems and finding efficient solutions through automation, scripting, and structured investigation methods.", 
    "",
    "With foundational knowledge in Python and exposure to SIEM and SOAR platforms such as XSOAR, I am focused on understanding how security systems function at a deeper technical level. I am particularly interested in learning different SIEM query languages and aim to develop tools that can translate queries across platforms, improving efficiency for security analysts working in multi-tool environments."
);
    var iSpeed = 30; // time delay of print out
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
