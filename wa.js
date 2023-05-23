const phoneNumberElement = document.getElementById('phoneNumber');
const messageElement = document.getElementById('message');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', async () => {
  const phoneNumber = phoneNumberElement.value;
  const message = encodeURIComponent(messageElement.value);

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const apiEndpoint = 'https://api.tinyurl.com/api-create.php';
  const response = await fetch(`${apiEndpoint}?url=${encodeURIComponent(whatsappLink)}`);
  const shortenedLink = await response.text();

  prompt('Copy this shortened link:', shortenedLink);
});
