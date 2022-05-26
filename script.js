// Archived Results
function Gets() {
  var id = document.getElementById('id').value;
  var semester = document.getElementById('semester').value;
  var imageurl = 'http://202.5.52.152:8082/upload/' + id + '.jpg';
  var frameurl = 'http://202.5.52.152:8081/student/show_semester_transcript/' + id + '/' + semester;

  document.getElementById('image').src = imageurl;
  document.getElementById('frame').src = frameurl;
  document.getElementById('showID').innerHTML = "ID : " + id;
  document.getElementById('showSemester').innerHTML = "Semester : " + semester;
}

// Keyboard Press Controller
document.onkeydown = function (Keyboard) {
  Keyboard = Keyboard || window.event;
  switch (Keyboard.which || Keyboard.keyCode) {
    case 39: document.getElementById("id").stepUp(); Gets(); break;
    case 37: document.getElementById("id").stepDown(); Gets(); break;
    case 38: document.getElementById("semester").selectedIndex = document.getElementById("semester").selectedIndex - 1;
      Gets(); break;
    case 40: document.getElementById("semester").selectedIndex = document.getElementById("semester").selectedIndex + 1;
      Gets(); break;
  }
}


// Classmates Finder
function padLeadingZeros(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

function find() {
  var path = "http://202.5.52.152:8082/upload/";
  var year = document.getElementById("year").value; //123-1st batch
  var session = document.getElementById("session").value;
  /*
  1-Spring,
  2-Summer,
  3-Fall
  */

  var dept = document.getElementById("department").value;
  /* 
  01-English, 
  11-Sociology,
  12-Economics,
  13-Journalism, Communication and Media Studies,
  14-Political Science,
  21-Pharmecy,
  23-Public Health,
  31-Computer Science and Engineering,
  32-Electrical and Electronics Engineering,
  41-Business Admisintartion,
  51-Law and Human Rights
  */

  var program = document.getElementById("program").value;
  /*
  1-bachalor
  2-master
  */

  var roll = "001";

  for (var i = 0; i < 300; i++) {

    var id = year + session + dept + program + roll;
    roll++;

    roll = padLeadingZeros(roll, 3);

    var file = path + id + ".jpg";
    
    var imageCode = '<img style="padding: 10px; border-radius: 20px;" height="150px" width="150px" title="' + id + '" src="' + file + '">';
    
    document.getElementById("showImages").innerHTML = document.getElementById("showImages").innerHTML + imageCode;
  }
}
