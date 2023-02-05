
document.getElementById("submit").addEventListener("click",function(e){
    e.preventDefault();
    console.log("hello");

       let email= document.getElementById("email").value;
       let pass= document.getElementById("password").value;
       
   

    console.log(email,pass);
    let user_records = JSON.parse(localStorage.getItem("Signup"));
		
    if (
        user_records.some((v) => {
            return v.email == email && v.pass == pass;
        })
    ) {
        alert("Login Success");
        let current_user = user_records.filter((v) => {
            return v.email == email && v.pass == pass;
        })[0];
        localStorage.setItem("name", current_user.name);
        window.location.href = "index.html";
    } else {
        alert("Login Failed");
    }
    


})