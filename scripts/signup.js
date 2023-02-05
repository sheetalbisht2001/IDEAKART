
data = JSON.parse(localStorage.getItem("Signup")) || [];
document.getElementById("submit").addEventListener("click",function(e){
    e.preventDefault();
    console.log("hello");

    let form_data = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        
        pass: document.getElementById("password").value,
        conPass: document.getElementById("passwordcon").value,
    };

   // console.log(form_data.name,form_data.mobile,form_data.email,form_data.pass,form_data.conPass);
    if(document.getElementById("name").value==""||document.getElementById("mobile").value=="" || document.getElementById("email").value==""||document.getElementById("password").value=="" ||document.getElementById("passwordcon").value=="")
    {
            alert("Fill all the fields")
    }
    else{
        data.push(form_data);
    console.log(form_data);
    localStorage.setItem("Signup", JSON.stringify(data));
    alert("Account Created");
    window.location.href = "signin.html";
    }
    


})

   
       