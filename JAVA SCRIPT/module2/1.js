var form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var course = document.getElementById("course").value;
  if (name === "" || email === "" || age === "" || gender === "" || course === "") {
    alert("Please fill out all fields");
    return;
  } 
  if (isNaN(age) || age < 0 || age > 120) {
    alert("Please enter a valid age");
    return;
  }
  alert("Form submitted successfully");
  form.submit();
});
