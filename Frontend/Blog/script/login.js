document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var url = "http://localhost:5153/api/Auth/login?name=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);

    fetch(url, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(
        data =>{
        if(data.message == "successful login"){
            console.log("successful login");
            window.location.href = "blogPage.html";
        }  
        else
            console.error("failed login: " + result.Message);
    })
    .catch(error => {
        console.error("Hata: " + error);
    });

    
});

document.getElementById("signBlogButton").addEventListener("click", function () {
    console.log("hello");
    var nameInput = document.getElementById("nameInput");
    var passwordInput = document.getElementById("passwordInput");


    var name = nameInput.value;
    var password = passwordInput.value;
    console.log(name+ " " + password)


var url = "http://localhost:5153/api/Auth?name="+ name + "&password=" + password;

fetch(url, {
    method: "POST"
})
.then(response => response.json())
.then(data =>{
    if(data.message == "successful"){
        alert("successful login");
    }  
    else
        console.error("failed login: " + result.Message);
})
.catch(error => {
    console.error("Hata: " + error);
});

});






           

