function validate()
      {
      if( document.myForm.fname.value == "" )
         {
            alert( "Please Provide Your Name..!!" );
            document.myForm.fname.focus() ;
            return false;
         }
		 if(document.myForm.fname.value.length<5 ||
		 document.myForm.fname.value.length>20 )
         {
            alert( "Name Should Have Atleast 5 to 20 Characters!!" );
            document.myForm.fname.focus() ;
            return false;
         }
	   
	  
         
		 var emailID = document.myForm.email.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
        
         if (atpos < 2|| ( dotpos - atpos < 5 )) 
         {
            alert("Please Enter Your Correct Email");
            document.myForm.email.focus() ;
            return false;
         }
		 
		 if (document.myForm.rmail.value != emailID)
		 {
			alert("Both Email Value Should Be Same..!!");
			document.myForm.rmail.focus() ;
            return false;	
		 }
		 
		 if(document.myForm.pass.value == document.myForm.fname.value){
        alert("Error: Password must be different from Name");
        document.myForm.pass.focus();
        return false;
			}
			if(document.myForm.pass.value.length < 8) 
			{
			alert("Error: Password Must Contain 8 Characters");
			document.myForm.pass.focus();
			return false;
			}
					
var re =(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/);
			if(!re.test(document.myForm.pass.value)) {
        alert("Error: Password Must Contain Atleast One Number,One Special Character & One Upper Case");
        document.myForm.pass.focus();
        return false;
	  }
	  
	  if(document.myForm.cpass.value == "") {
        alert("Error: Re-Enter Your Password");
        document.myForm.cpass.focus();
        return false;
	  }
			if(document.myForm.pass.value != document.myForm.cpass.value) {
        alert("Error: Re-Password Should Be Same");
        document.myForm.cpass.focus();
        return false;
			}
			
		
		 if( document.myForm.zip.value == "" ||
         isNaN( document.myForm.zip.value ) ||
         document.myForm.zip.value.length != 6 )
         {
            alert( "Please 6 Digit Zip Code in Numeric Format." );
            document.myForm.zip.focus() ;
            return false;
         }
		 
		 var mobile=document.myForm.mobile.value;
         if( mobile == "" || mobile==0)
         {
            alert( "Please Provide Your 10 Digit Mobile Number" );
			document.myForm.mobile.focus() ;
            return false;
         }
         if (document.myForm.mobile.value.length<10)
		 {
		  alert ("Your Mobile Number is Less Than 10 Digit !!")	 
		 return false;
		 }		
			
			
		  
		 
		 
		 
		 
		 
		if( document.myForm.Country.value == "-1" )
         {
            alert( "Please Select Your City..!!" );
            return false;
         }		 
	     
		  
		 
                
         
         return( true );
      }
	  //Function for Input field to prevent Numeric Value//
	  function isNumberKey(evt){
   var charCode = (evt.which) ? evt.which : event.keyCode;
   if (charCode >= 65 && charCode <= 90 || charCode >= 95 
   && charCode <= 122)
        return true;
    return false;
}

//function for disable ctrl+c//
function Disable_Control_C() {
var  keystroke= String.fromCharCode(event.keyCode).
toLowerCase();

if (event.ctrlKey && (keystroke == 'c'||keystroke == 'a'||
keystroke == 'p'||keystroke == 's' || keystroke == 'v' || 
keystroke == 'u')) {
alert("Sorry..!! This Function is Not Allowed Here");
event.returnValue = false; // disable Ctrl+C
}

//right click disable
document.onmousedown=disableclick;
status="Right Click Disabled";
function disableclick(event)
{
  if(event.button==2)
   {
     alert(status);
     return false;    
   }
}

}
