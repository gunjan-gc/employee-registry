<?php

// Studnet Name: Gunjan Chaudhary     Studnet Id: 000831804
// I acknowledge that all the work has soleley been done by me and I have not copied or shared my file with annyone 


//sanitizing the user input 
$name=filter_input(INPUT_GET, "name", FILTER_SANITIZE_SPECIAL_CHARS);
$empNumber=filter_input(INPUT_GET, "number", FILTER_VALIDATE_INT);
$empdepartment=filter_input(INPUT_GET, "department", FILTER_SANITIZE_SPECIAL_CHARS);
$empBonus=filter_input(INPUT_GET, "bonus", FILTER_VALIDATE_INT); 


//getting name entered by the user 
if(isset($_REQUEST['name']))
{
    $employee=$_REQUEST['name'];
    
    //to check if name is greater than 5 characters and less than 20 characters and name textbox is not empty
    if((strlen($employee) < 5 || strlen($employee) > 20) && (strlen($employee) !== 0))
   { 
       echo "1";
   }
   //to check if name does not contain any numbers
   else if (preg_match('/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/', $employee) || is_numeric($employee))
   {   
      echo "2";
   }
   //to check if name textbox is not empty
    else if(strlen($employee) !== 0){
      echo "3";
    }
}

//getting employee id entered by user
if(isset($_REQUEST['num']))
{
    $eNum=$_REQUEST['num'];
    
    //to check if id is not a number and if id textbox is not empty
    if(!(is_numeric($eNum))&& (strlen($eNum) !== 0))
    {
       echo "1";
    }
    //to check if id is greater or less than 9 (i.e., only takes id =9 in l length) and id is not empty
    else if((strlen((string)$eNum) > 9 || strlen((string)$eNum) < 9) && (strlen($eNum) !== 0))
   {
      echo "2";
   }
   //to check id is not empty
   else if (strlen($eNum) !== 0){
      echo"3";
   }
}

//getting department entered by user
if(isset($_REQUEST['department']))
{
    $dep=$_REQUEST['department'];
    //to check if department is sales and textbox is not empty
    if($dep==="Sales" && (strlen($dep) !== 0))
    {
    echo "1";
    }
    //to check if department is not sales and textbox is not empty
    else if($dep!=="Sales"  && (strlen($dep) !== 0)){
    echo "2";
    }
    //to check if department is advertising and textbox is not empty
    else if($dep ==="Advertising" &&  (strlen($dep) !== 0))
    {
        echo "3";
    }
    //to check if textbox is not empty
    else if (strlen($dep) !== 0){
        echo "4";
    }
}

//getting bonus entered by user
if(isset($_REQUEST['bonus']))
{
    $bon=$_REQUEST['bonus'];
    //to check if bonus contains anything other than numbers and textbox is not empty
    if(!(is_numeric($bon)) && (strlen($bon) !== 0))
    {
    echo "1";
    }
    //to check if textbox is not empty
    else if((strlen($bon) !== 0))
    {
        echo "2";
    }
}
?> 

       
   