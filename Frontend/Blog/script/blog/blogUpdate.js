document.getElementById("updateBlogButton").addEventListener("click", function() {
   
    var idInput = document.querySelector("#idInput");
    var id = idInput.value;
   
    var nameInput = document.querySelector("#nameInput");
    var name = nameInput.value;

    var descriptionInput = document.querySelector("#descriptionInput");
    var description = descriptionInput.value;
   
    var imageUrlInput = document.querySelector("#imageUrlInput");
    var imageUrl = imageUrlInput.value;


    console.log(id);
    console.log(name);
    console.log(description);
    console.log(imageUrl);

    var url = "http://localhost:5153/api/Blog?id="+ id + "&name=" + name +"&description=" + description + "&imageUrl="  + imageUrl;

    fetch(url, {
        method : "PUT",
        headers: {
            "Content-Type": "application/json",
        body: JSON.stringify({ id:id, name:name , description:description, imageUrl:imageUrl})
     },
    }).then(response => response.json())
    .then(data => {
        const card = `
        <div class="card mb-4" >
            <div class="card-body">
                <img src="${data.imageUrl}" class="card-img-top"  alt="...">
                <h2 class="card-title">${data.name}</h2>
                <p class="card-text">${data.description}</p>
                <a href="#" class="btn btn-primary">Devamını Oku</a>
            </div>
        </div>
    `;
    blogContainer.innerHTML += card;
    alert("sayfayı yenileyiniz")
})
    
});

