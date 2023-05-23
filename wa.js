document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    event.preventDefault();
    generateWhatsAppLink();
});

function generateWhatsAppLink() {
    var phoneNumber = document.getElementById("phoneNumber").value;
    var message = encodeURIComponent(document.getElementById("message").value);
    
    var link = "https://wa.me/" + phoneNumber + "?text=" + message;

    shortenURL(link, function(shortenedLink) {
        document.getElementById("generatedLink").innerHTML = '<a href="' + shortenedLink + '" target="_blank">' + shortenedLink + '</a>';
        document.getElementById("resultContainer").classList.remove("hidden");
    });
}

function shortenURL(url, callback) {
    var apiUrl = 'https://api.tinyurl.com/api-create.php?url=' + encodeURIComponent(url);
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var shortenedURL = request.responseText;
            callback(shortenedURL);
        }
    };

    request.open("GET", apiUrl, true);
    request.send();
}
