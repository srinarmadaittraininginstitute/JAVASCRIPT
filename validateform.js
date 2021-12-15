function validateHTMlform()
{
  let form = document.StudenSignupForm;
   if( form.textnames.value == "" )
   {
     alert( "Enter Your First Name!" );
     form.textnames.focus() ;
     return false;
   }
   if( form.lastnames.value == "" )
   {
     alert( "Enter Your Last Name!" );
     form.textnames.focus() ;
     return false;
   }
  
   if( form.fathername.value == "" )
   {
     alert( "Enter Your Father Name!" );
     form.fathername.focus() ;
     return false;
   }
  
   if( form.personal_address.value == "" )
   {
     alert( "Enter Your Postal Address!" );
     form.personal_address.focus() ;
     return false;
   }
 
   if ( ( StudenSignupForm.sex[0].checked == false ) && ( StudenSignupForm.sex[1].checked == false ) )
   {
   alert ( "Choose Your Gender: Male or Female" );
   return false;
   }  
   if( form.City.value == "-1" )
   {
     alert( "Enter Your City!" );
     form.City.focus() ;
     return false;
   }  
   if( form.Course.value == "-1" )
   {
     alert( "Enter Your Course!" );
    
     return false;
   }  
   if( form.District.value == "-1" )
   {
     alert( "Select Your District!" );
    
     return false;
   }  
   if( form.State.value == "-1" )
   {
     alert( "Select Your State!" );
    
     return false;
   }
   if( form.pincode.value == "" ||
           isNaN( form.pincode.value) ||
           form.pincode.value.length != 6 )
   {
     alert( "Enter your pincode in format ######." );
     form.pincode.focus() ;
     return false;
   }
var email = form.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
if (email == "" || atpos < 1 || ( dotpos - atpos < 2 ))
{
     alert("Enter your correct email ID")
     form.emailid.focus() ;
     return false;
}
  if( form.date_of_birth.value == "" )
   {
     alert( "Enter your DOB!" );
     form.date_of_birth.focus() ;
     return false;
   }
  if( form.mobilenumber.value == "" ||
           isNaN( form.mobilenumber.value) ||
           form.mobilenumber.value.length != 10 )
   {
     alert( "Enter your Mobile No. in the format 123." );
     form.mobilenumber.focus() ;
     return false;
   }
   return( true );
}