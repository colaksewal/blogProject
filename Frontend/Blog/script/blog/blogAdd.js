
document.getElementById("addBlogButton").addEventListener("click", function () {
    
    var nameInput = document.getElementById("addNameInput");
    var descriptionInput = document.getElementById("addDescriptionInput");
    var imageUrlInput = document.getElementById("addImageUrlInput");

    const blogContainer = document.getElementById('blogContainer');

    var name = nameInput.value;
    var description = descriptionInput.value;
    var imageUrl= imageUrlInput.value;
    
    console.log(name +" "+ description+ " " + imageUrl)
var url = "http://localhost:5153/api/Blog?name="+ name + "&description=" + description + "&imageUrl=" + imageUrl;

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
     },
    body: JSON.stringify({ name:name , description: description , imageUrl : imageUrl})
})
.then(response => response.json())
.then(data => {
const card = `
            <div class="card mb-4" id = "${data.id}">
                <div class="card-body">
                    <img src="${data.imageUrl}" class="card-img-top"  alt="...">
                    <h2 class="card-title">${data.name}</h2>
                    <p class="card-text">${data.description}</p>
                    <a href="#" class="btn btn-primary">Devamını Oku</a>

                </div>
            </div>
        `;
        blogContainer.innerHTML += card;
        alert("işlem başarılı");


})
.catch(error => console.error("Hata oluştu:", error));
 });