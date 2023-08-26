//id no ya göre sime işlemi
var deleteButton = document.getElementById("deleteBlogButton");
deleteButton.addEventListener("click", function () {
var deleteIdInput = document.getElementById("deleteIdInput");
var deleteId = deleteIdInput.value;

var deleteUrl = "http://localhost:5153/api/Blog/?id=" + deleteId;

fetch(deleteUrl, {
    method: "DELETE",
})
.then(response => {
    if (response.ok) {
        console.log("Deletion successful.");
        var cardIdToRemove = deleteId; // Assuming deleteId matches the ID attribute of the card's div element
        var cardToRemove = document.getElementById(cardIdToRemove);

        if (cardToRemove) {
            cardToRemove.remove();
            alert("başarıyla silindi")
            console.log("Card removed successfully.");
        } else {
            console.log("Card not found.");
        }
    } else {
        console.error("Deletion failed. Status:", response.status);
    }
})
.catch(error => console.error("Hata oluştu:", error));
}); 