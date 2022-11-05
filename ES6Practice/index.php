<h1>JavaScript Practice with Rabbil Hasan bhai - Ostad</h2>
<?php
if ($handle = opendir('.')) {

    while (false !== ($entry = readdir($handle))) {

        if ($entry != "." && $entry != "..") {

            echo "$entry";
            echo "</br>";
        }
    }

    closedir($handle);
}
?>