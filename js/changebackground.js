var list = document.querySelectorAll(".item1 a");

for (var i = 0; i < list.length; i++) {
	var url = list[i].children[0].getAttribute("src");
  list[i].style.backgroundImage="url('" + url + "')";
}

let isChanged = false; // Track the state of changes

function toggleFontAndBackground() {
  const allDivs = document.querySelectorAll('div');
  const elementsWithRedBorder = document.querySelectorAll('.round');
  const elementsWithRedBorder2 = document.querySelectorAll('.skills ul li');
  const body = document.body;
  var x = document.getElementById("prep");
  var y = document.getElementById("Home");

  if (!isChanged) {
    // Apply changes - change fonts to Arial and remove background images
    body.style.fontFamily = 'Montserrat, sans-serif';
    body.style.backgroundImage = 'none';
    elementsWithRedBorder.forEach(element => {
      element.style.border = '1px solid red'; // Change the border color to red
    });
    elementsWithRedBorder2.forEach(element => {
      element.style.border = '1px solid red'; // Change the border color to red
    });

    document.getElementById('r').style.fontFamily='Montserrat, sans-serif';
    document.getElementById('r').style.color='red';

    document.getElementById('prep').style.backgroundImage="url(./images/pw.gif)";

    document.getElementById('ref').style.backgroundImage='none';
    document.getElementById('ref').style.fontFamily='Montserrat, sans-serif';
    document.getElementById('ref').style.color='red';

    document.getElementById('ct').style.backgroundImage='none';
    document.getElementById('ct').style.fontFamily='Montserrat, sans-serif';
    document.getElementById('ct').style.color='red';

    document.getElementById('ca').style.backgroundImage='none';
    document.getElementById('ca').style.fontFamily='Montserrat, sans-serif';
    document.getElementById('ca').style.color='red';

    document.getElementById('edu').style.backgroundImage='none';
    document.getElementById('edu').style.fontFamily='Montserrat, sans-serif';
    document.getElementById('edu').style.color='red';

    document.getElementById('proj').style.backgroundImage='none';
    document.getElementById('proj').style.fontFamily='Montserrat, sans-serif';
    document.getElementById('proj').style.setProperty('color', 'red', 'important');

    document.getElementById('cert').style.backgroundImage='none';
    document.getElementById('cert').style.fontFamily='Montserrat, sans-serif';
    document.getElementById('cert').style.setProperty('color', 'red', 'important');

    document.getElementById('sk').style.backgroundImage='none';
    document.getElementById('sk').style.fontFamily='Montserrat, sans-serif';
    document.getElementById('sk').style.color='red';

    document.getElementById('int').style.backgroundImage='none';
    document.getElementById('int').style.fontFamily='Montserrat, sans-serif';
    document.getElementById('int').style.color='red';

    document.getElementById('pow').style.color='red';

    document.getElementById('fh').style.backgroundColor = '#434544c9';
    document.getElementById('fh').style.padding = '20px';
    document.getElementById('sh').style.backgroundColor = '#515151c9';
    document.getElementById('sh').style.padding = '20px';

    document.getElementById('typedtext').style.backgroundColor = '#282828b3';
    document.getElementById('typedtext').style.boxShadow = ' 0 8px 16px 0 rgba(255, 255, 255, 0.2)';

    document.getElementById('cation').style.backgroundColor = '#282828b3';
    document.getElementById('cation').style.boxShadow = ' 0 8px 16px 0 rgba(255, 255, 255, 0.2)';
    document.getElementById('cation').style.padding = '20px';

    document.getElementById('projb').style.backgroundColor = '#282828b3';
    document.getElementById('projb').style.boxShadow = ' 0 8px 16px 0 rgba(255, 255, 255, 0.2)';
    document.getElementById('projb').style.padding = '20px';

    document.getElementById('footo').style.backgroundColor = '#282828b3';
    document.getElementById('footo').style.padding = '20px';

    document.getElementById('half1').style.boxShadow='0px 10px 20px -10px rgba(255, 255, 255, 0.814)';
    document.getElementById('half2').style.boxShadow='0px 10px 20px -10px rgba(255, 255, 255, 0.814)';
    // document.getElementById('me').style.boxShadow=' 0 8px 16px 0 rgba(255, 255, 255, 0.2)';

    // document.getElementById('hr').style.borderColor='red';
    // document.getElementById('t1').style.border='1px solid red';
    // document.getElementById('t2').style.border='1px solid red';
    // document.getElementById('t3').style.border='1px solid red';
    // document.getElementById('t4').style.border='1px solid red';
    // document.getElementById('t5').style.border='1px solid red';
    // document.getElementById('t6').style.border='1px solid red';
    // document.getElementById('t7').style.border='1px solid red';
    // document.getElementById('t8').style.border='1px solid red';
    // document.getElementById('t9').style.border='1px solid red';
    // document.getElementById('t10').style.border='1px solid red';
    // document.getElementById('t11').style.border='1px solid red';
    // document.getElementById('t12').style.border='1px solid red';
    // document.getElementById('t13').style.border='1px solid red';
    // document.getElementById('t14').style.border='1px solid red';
    // document.getElementById('t15').style.border='1px solid red';
    // document.getElementById('t16').style.border='1px solid red';
    // document.getElementById('t17').style.border='1px solid red';
    // document.getElementById('t18').style.border='1px solid red';
    // document.getElementById('t19').style.border='1px solid red';
    // document.getElementById('t20').style.border='1px solid red';

    // $("prep").fadeIn();
    // y.style.display="none";
    // x.style.display="block";

    // setTimeout(() => {
    //   $("Home").fadeIn();
    //   y.style.display = 'block';
    //   x.style.display = 'none';
    // }, 2000);

    allDivs.forEach(div => {
      div.style.fontFamily = 'Montserrat, sans-serif';
      // div.style.backgroundImage = 'none';
      div.style.color='red';
    });

    isChanged = true;
  } else {
    // Revert back the changes - restore original fonts and backgrounds
    body.style.fontFamily = ''; // Empty string will revert to default
    body.style.backgroundImage = "url('./images/matrix.gif')";

    elementsWithRedBorder.forEach(element => {
      element.style.border = ''; // Change the border color to red
    });
    elementsWithRedBorder2.forEach(element => {
      element.style.border = ''; // Change the border color to red
    });

    document.getElementById('r').style.fontFamily='';
    document.getElementById('r').style.color='white';

    document.getElementById('ref').style.backgroundImage="url('./images/matrix.gif')";
    document.getElementById('ref').style.fontFamily='';
    document.getElementById('ref').style.color='white';

    document.getElementById('ct').style.backgroundImage="url('./images/matrix.gif')";
    document.getElementById('ct').style.fontFamily='';
    document.getElementById('ct').style.color='white';

    document.getElementById('ca').style.backgroundImage="url('./images/matrix.gif')";
    document.getElementById('ca').style.fontFamily='';
    document.getElementById('ca').style.color='white';

    document.getElementById('edu').style.backgroundImage="url('./images/matrix.gif')";
    document.getElementById('edu').style.fontFamily='';
    document.getElementById('edu').style.color='white';

    document.getElementById('proj').style.backgroundImage="url('./images/matrix.gif')";
    document.getElementById('proj').style.fontFamily='';
    document.getElementById('proj').style.color='white';

    document.getElementById('cert').style.backgroundImage="url('./images/matrix.gif')";
    document.getElementById('cert').style.fontFamily='';
    document.getElementById('cert').style.color='white';

    document.getElementById('sk').style.backgroundImage="url('./images/matrix.gif')";
    document.getElementById('sk').style.fontFamily='';
    document.getElementById('sk').style.color='white';

    document.getElementById('int').style.backgroundImage="url('./images/matrix.gif')";
    document.getElementById('int').style.fontFamily='';
    document.getElementById('int').style.color='white';

    document.getElementById('fh').style.backgroundColor = '';
    document.getElementById('fh').style.padding = '';
    document.getElementById('sh').style.backgroundColor = '';
    document.getElementById('sh').style.padding = '';

    document.getElementById('typedtext').style.backgroundColor = 'background-color: #181818b3;';
    document.getElementById('typedtext').style.boxShadow = '';

    document.getElementById('cation').style.backgroundColor = '';
    document.getElementById('cation').style.boxShadow = '';
    document.getElementById('cation').style.padding = '';

    document.getElementById('projb').style.backgroundColor = '';
    document.getElementById('projb').style.boxShadow = '';
    document.getElementById('projb').style.padding = '';

    document.getElementById('footo').style.backgroundColor = '';
    document.getElementById('footo').style.boxShadow = '';
    document.getElementById('footo').style.padding = '';

    document.getElementById('pow').style.color='';

    document.getElementById('half1').style.boxShadow='';
    document.getElementById('half2').style.boxShadow='';
    // document.getElementById('me').style.boxShadow='';

    // document.getElementById('hr').style.borderColor='';
    // document.getElementById('t1').style.border='1px solid white';
    // document.getElementById('t2').style.border='1px solid white';
    // document.getElementById('t3').style.border='1px solid white';
    // document.getElementById('t4').style.border='1px solid white';
    // document.getElementById('t5').style.border='1px solid white';
    // document.getElementById('t6').style.border='1px solid white';
    // document.getElementById('t7').style.border='1px solid white';
    // document.getElementById('t8').style.border='1px solid white';
    // document.getElementById('t9').style.border='1px solid white';
    // document.getElementById('t10').style.border='1px solid white';
    // document.getElementById('t11').style.border='1px solid white';
    // document.getElementById('t12').style.border='1px solid white';
    // document.getElementById('t13').style.border='1px solid white';
    // document.getElementById('t14').style.border='1px solid white';
    // document.getElementById('t15').style.border='1px solid white';
    // document.getElementById('t16').style.border='1px solid white';
    // document.getElementById('t17').style.border='1px solid white';
    // document.getElementById('t18').style.border='1px solid white';
    // document.getElementById('t19').style.border='1px solid white';
    // document.getElementById('t20').style.border='1px solid white';

    allDivs.forEach(div => {
      div.style.fontFamily = '';
      // div.style.backgroundImage = '';
    });

    // $("prep").fadeIn();
    // y.style.display="none";
    // x.style.display="block";

    // setTimeout(() => {
    //   $("Home").fadeIn();
    //   y.style.display = 'block';
    //   x.style.display = 'none';
    // }, 2000);

    isChanged = false;
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);