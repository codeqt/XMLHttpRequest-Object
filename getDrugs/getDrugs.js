function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "drugA.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Generic Brand</th><th>Brand Name</th><th>lnk</th><th>purpose</th><th>DEASch</th><th>Category</th><th>Study Topic</th></tr>";
  
  var x = xmlDoc.getElementsByTagName("drugA")[0];
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("GenericName")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("BrandName")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("lnk")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Purpose")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("DEASch")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Category")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("StudyTopic")[0].childNodes[0].nodeValue + "</td></tr>";
  }
  
  document.getElementById("table").innerHTML = table;
}