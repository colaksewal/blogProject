document.addEventListener("DOMContentLoaded", function() {


    // Verileri çekmek için Fetch API kullanımı
    fetch('http://localhost:5153/api/Blog')  // API rotası doğru olarak güncellenmeli
        .then(response => response.json())
        .then(data => {
            const blogContainer = document.getElementById('blogContainer');
            data.forEach(blogItem => {

                const card = `
                    <div class="card mb-4 " id = "${blogItem.id}">
                        <img src="${blogItem.imageURL}" class="card-img-top"  alt="...">
                        <div class="card-body">
                            <h2 class="card-title">${blogItem.name}</h2>
                            <p class="card-text">${blogItem.description}</p>
                            <a href="#" class="btn btn-primary">Devamını Oku</a>
                        </div>
                    </div>
                `;
                blogContainer.innerHTML += card;
            });
        })
        .catch(error => console.error('Veri çekme hatası:', error));
    });      
