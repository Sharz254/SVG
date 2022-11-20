var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 50;

/*then build a text element with the described positioning and fonts characteristics*/

var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

text.setAttribute('x', '0');
text.setAttribute('y', '50');
text.style.fontFamily ='Times New Roman';
text.style.fontSize = '50';

/*then add the actual text to display to the text element*/

text.textContent ='Hello, World';

/*finally add the text element to our svg container and add the svg container element
to the HTML document*/

svg.appendChild(text);
document.body.appendChild(svg);

/*if you already have an imange file containing the desired text and have it placed on a server, you
can add the URL of the image and then add the image to the docment as follows*/

var img = new Image();
img.height = 450;
img.width = 700;

img.src ='https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg';
document.body.appendChild(img);