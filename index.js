// Studnet Name: Gunjan Chaudhary     Studnet Id: 000831804
// I acknowledge that all the work has soleley been done by me and I have not copied or shared my file with annyone 

$(document).ready(function(){
    let nameValid;
    let idValid;
    let departmentValid;
   


    $('#bonus').attr('readonly', true);         //bonus is set to readonly in the start

    // to evaluate the value of name in real time
    $('#name').keyup(function () {
    let empName=$('#name').val();                    //value is stored in a variable

    if(empName.length === 0)          //if length is not 0
    {
        $('#name').removeClass().addClass('form-control').attr({placeholder: 'Jane Doe'});       //all classes are removed and placeholder is added
        $('#name-feedback').removeClass('text-danger text-success').html('');                    //all classes are removed and no text is displayed
    }
    //post request is sent to php page for validation
        $.post('index.php', { name: empName }, function (data) {
            console.log(data);
            var integer = parseInt(data, 10);           //converting response back from php file to int
            switch (integer) {
                
               case 1:
                //if name is not between 5-20 characters and there is something added in the textbox (i.e., length is not 0)
                   $('#name').removeClass().addClass('form-control is-invalid');
                   $('#name-feedback').html('Employee name must be between 5-20 characters in length').addClass('text-danger');
                   nameValid=false;
                   break;
               case 2: 
                //if there are any numbers in the name 
                   $('#name').removeClass().addClass('form-control is-invalid');
                   $('#name-feedback').html('Employee name cannot contain digits').addClass('text-danger');
                   nameValid=false;
                   break;
               case 3:
                //if everything is according to thr requirements
                   $('#name').removeClass().addClass('form-control is-valid');
                   $('#name-feedback').html('').removeClass();
                   nameValid=true;
                   break;
            }
        })
    })
   
    //to evealuate the value of employee number in real time
    $('#num').keyup(function () {
        let number=$('#num').val();             //value is stored in a variable and sent as a post requrest to php

        if(number.length === 0)                 //if length is 0
        {
           $('#num').removeClass().addClass('form-control').attr({placeholder: '429126346'});            //all other classes are removed and placeholder is added
           $('#number-feedback').removeClass('text-danger text-success').html('');                       //feedback label does not show any text
        } 
            $.post('index.php', { num: number }, function (data) {                                      //post request sent to php file
                console.log(data);
                var integer = parseInt(data, 10);                                                     //converting response back from php to int
                switch (integer) {
                     case 1:
                    //if id has strings, characters or special characters (i.e., non numeric data) and length is not 0 (i.e., there is some data in the textbox)
                         $('#num').removeClass().addClass('form-control is-invalid');
                         $('#number-feedback').html('Employee ID must only contain digits').removeClass().addClass('text-danger');
                         idValid=false;
                         break;
                     case 2:
                    //if length of id is not > or < 9 (ie., not excatly = 9)  and length is not 0 (i.e., there is some data in the textbox)
                         $('#num').removeClass().addClass('form-control is-invalid');
                         $('#number-feedback').html('Employee ID must be 9 digits in length.').removeClass().addClass('text-danger');
                         idValid=false;
                         break;
                     case 3:
                     //if all criteria is met
                         $('#num').removeClass().addClass('form-control is-valid');
                         $('#number-feedback').html('').removeClass();
                         idValid=true;
                         break;
            
        }
    })
    })
//to evealuate the value of department in real time
    $('#department').keyup(function () {
    let department=$('#department').val();                             //value is stored in a variable and sent as a post requrest to php
    if(department.length === 0)                                        //if length is = 0
        {
           $('#department').removeClass().addClass('form-control').attr({placeholder: 'Sales'});                    //all other classes are removed and placeholder is added
           $('#department-feedback').removeClass('text-danger text-success').html('');                              //feedback label does not show any text
        }
        $.post('index.php', { department: department }, function (data) {                                            //post request sent to php file
            console.log(data);
            var integer = parseInt(data, 10);                                                                        //converting response back from php to int
            switch (integer) {
                case 1:
                //if department entered is sales and textbox is not empty
                    $('#department').removeClass().addClass('form-control is-valid');
                    $('#department-feedback').html('').removeClass();
                    $('#bonus').removeClass().addClass('form-control').attr({readonly: false});                      //bonus tetxbox is enabled to be edited
                    departmentValid=true;
                    break;
                case 2:
                //if department is not sales and textbos is not empty
                    $('#department').removeClass().addClass('form-control is-valid');
                    $('#department-feedback').html('').removeClass();
                    $('#bonus').removeClass().addClass('form-control').val('').attr({readonly: true});                //bonus textbos is kept disbled to be edited
                    departmentValid=true;
                    break;
                case 3:
                //if department is advertising and textbox is not empty
                    $('#department').removeClass().addClass('form-control is-invalid');
                    $('#department-feedback').html('Advertising is not a valid department.').removeClass().addClass('text-danger');
                    $('#bonus').attr('readonly', true);                                                               //bonus textbos is kept disbled to be edited
                    departmentValid=false;
                    break;
                case 4: 
                //if anything else is adde to the textbox (i.e., length is not 0)
                    $('#department').removeClass().addClass('form-control is-valid');
                    $('#department-feedback').html('').removeClass();
                    $('#bonus').attr('readonly', true);
                    departmentValid=true;
                    break;
            }
        })
        })
//to evealuate the value of bonus in real time
        $('#bonus').keyup(function () {
            let bonus=$('#bonus').val();                                                  //value is stored in a variable and sent as a post requrest to php
            if(bonus.length === 0)                                                        //if length is 0
            {
                $('#bonus').removeClass().addClass('form-control').attr({placeholder: '250000'});           //all other classes are removed and placeholder is added
                $('#bonus-feedback').removeClass('text-danger text-success').html('');                      //feedback label does not show any text
            }
                $.post('index.php', { bonus: bonus }, function (data) {                                     //post request sent to php file
                    console.log(data);
                    var integer = parseInt(data, 10);                                                        //converting response back from php to int
                    switch (integer) {
                            case 1:
                            //if bonus has string, characters or special characters in it (i.e., non numeric data) and length of textbox is not 0
                                 $('#bonus').removeClass().addClass('form-control is-invalid');
                                 $('#bonus-feedback').html('Bonus must only contain digits').removeClass().addClass('text-danger');
                                 break;
                            case 2:
                            //if textbos is not empty
                                 $('#bonus').removeClass().addClass('form-control is-valid');
                                 $('#bonus-feedback').html('').removeClass();
                                 break;
                    }
                })
            })
           
//on clicking the submit button of the form
    let button=document.getElementById("submit");
    button.addEventListener("click", function(){
 
        //checks if all validation is true
    if(nameValid==true && $('#num').val().length!==0 && $('#name').val().length!==0 &&$('#department').val().length!==0 && idValid ==true && departmentValid==true && $('#department').val()!=="Advertising" )
    {
        //values are stored ion variables 
        var name = $('#name').val();
        var num = $('#num').val();
        var depart=$('#department').val();
        var bonus=$('#bonus').val();

        //if department is sales, row of torquoise color is added to table 
        if(depart=="Sales")
        {
         backToOriginal();
         $('#table > tbody').append('<tr style="background-color:#40E0D0"><td>'+name+ '</td><td>' + num+ '</td><td>' + depart + '</td><td>' + bonus + '</td></tr>');
    }
    //if department is neither sales nor hr, transparent coloured row and N/A in bonus is added to the table
        if(depart!="Sales" && depart!="HR")
        {
        let newBonus="N/A";
        backToOriginal();
        $('#table > tbody').append('<tr><td>'+name+ '</td><td>' + num+ '</td><td>' + depart + '</td><td>' + newBonus + '</td></tr>');
            
    }
    //if department is HR, yellow coloured row is added and N/A in bonus is added to the table
        if(depart=="HR")
        {
        let newBonus="N/A";
        backToOriginal();
        $('#table > tbody').append('<tr style="background-color: #FFFF00"><td>'+name+ '</td><td>' + num+ '</td><td>' + depart + '</td><td>' + newBonus + '</td></tr>');
        
    }
    
    //if department is advertising, an error is shown and new is not added top the table
    else if($('#department').val()=="Advertising")
        {
            $('#department').removeClass().addClass('form-control is-invalid');
            $('#department-feedback').html('Advertising is not a valid department.').removeClass().addClass('text-danger');
         
        }
    }   
 

    //if any of the textboxes are kept un-filled(i.e., no value is added) and submit button is clicked, class is added to show that they need to be filled to add a new row
    if($('#name').val().length === 0)
    {
        $('#name').removeClass().addClass('form-control is-invalid');
    }
    if($('#num').val().length === 0)
    {
        $('#num').removeClass().addClass('form-control is-invalid');
    }
    if($('#department').val().length === 0)
    {
        $('#department').removeClass().addClass('form-control is-invalid');
    }

            
        
    })

    //function to bring everything back to as the page was initiallly
    function backToOriginal(){

        $('#name').removeClass().addClass('form-control').val('');
        $('#num').removeClass().addClass('form-control').val('');
        $('#department').removeClass().addClass('form-control').val('');
        $('#bonus').removeClass().addClass('form-control').val('').attr({readonly: 'true'}); 
    }
})

    


        
