// Function to generate a random token
function generateToken() {
  return Math.random().toString(36).substr(2, 9);
}

// Function to handle form submission
async function handleSubmit(event) {
  event.preventDefault();

  // Get the input values
  const phoneNumber = document.getElementById('phoneNumber').value;
  const message = document.getElementById('message').value;

  // Generate a token and create the WhatsApp link
  const token = generateToken();
  const link = `https://wa.me/+91${phoneNumber}?text=${encodeURIComponent(message)}&token=${encodeURIComponent(token)}`;

  // Shorten the link using TinyURL manually
  const apiEndpoint = 'https://tinyurl.com/api-create.php?url=';
  const response = await fetch(apiEndpoint + encodeURIComponent(link));
  const shortUrl = await response.text();

  // Display the shortened link
  const resultContainer = document.getElementById('resultContainer');
  const generatedLink = document.getElementById('generatedLink');
  generatedLink.textContent = shortUrl;
  resultContainer.classList.remove('hidden');
}

// Add event listener to the form submit button
const whatsappForm = document.getElementById('whatsappForm');
whatsappForm.addEventListener('submit', handleSubmit);
// Function to copy the generated link to clipboard
const copyToClipboard = () => {
  const generatedLink = document.getElementById('generatedLink');

  // Create a temporary input element
  const tempInput = document.createElement('input');
  tempInput.value = generatedLink.innerText;
  document.body.appendChild(tempInput);

  // Select and copy the text from the input element
  tempInput.select();
  document.execCommand('copy');

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Show a confirmation message to the user
  alert('Link copied to clipboard!');
};

// Add event listener to the copy button/link
const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', copyToClipboard);
// Function to share the generated link on WhatsApp
const shareOnWhatsApp = () => {
  const generatedLink = document.getElementById('generatedLink').innerText;

  // Open the generated WhatsApp link in the WhatsApp application
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(generatedLink)}`;
  window.open(whatsappUrl, '_blank');
};

// Add event listener to the share button/link
const shareButton = document.getElementById('shareButton');
shareButton.addEventListener('click', shareOnWhatsApp);
