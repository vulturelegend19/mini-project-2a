function check(form)/*function to check mail id & password*/
{
 /*checking whether the entered mail id and password are matching*/
 if(form.email.value == "grp7@gmail.com" && form.password.value == "1234567")
  {
    window.open('tabledemo.html')/*opens the target page while mailid & password matches*/
  }
 else
 {
   alert("Error Password or Email")/*displays error message*/
  }
}