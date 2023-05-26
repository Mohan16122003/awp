<?php
if(mysqli_connect("localost","root","","login")){
    echo "database connected sucessfully";
}
else{
    echo "database connection failed";
}
?>