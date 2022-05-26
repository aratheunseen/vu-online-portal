<?php
  if (!isset($_POST["submit"])) {
    echo '<h3 style="color:gray;margin: 200px 0;opacity:0.4">[ select a class first ]</h3>';
  }
  if (isset($_POST["submit"])) {
    $path = "http://202.5.52.152:8082/upload/";
    $program = $_POST['program'];
    $dept = $_POST['department'];
    $roll = "001";
    $year = $_POST['year'];
    $session = $_POST['session'];
    $numOfStudent = $_POST['nos'];
    $studentCounter = 0;

    for ($i = 0; $i < $numOfStudent; $i++) {
      $id = $year.$session.$dept.$program.$roll;
      $roll++;
      $roll = str_pad($roll, 3, '0', STR_PAD_LEFT);

      $file = $path.$id. ".jpg";

      $array = @get_headers($file);
      $string = $array[0];

      error_reporting(E_ERROR | E_PARSE);

      if (strpos($string, "200 OK")) {
        echo '<img style="padding: 10px;" height="150px" width="150px" title="'.$id.'" src="'.$file.'">';
        $studentCounter++;
      } else { }
    }
    echo '<div style="color:#444;background-color:lightgray;border-radius:10px;padding:10px;text-align:center;"> Number of Student : '.$studentCounter. '</div>';
  }
?>
