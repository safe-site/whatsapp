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
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}&token=${encodeURIComponent(token)}`;

  // Shorten the link using the TinyURL API
  const apiEndpoint = 'https://api.tinyurl.com/dev/api-create.php';
  const response = await fetch(`${apiEndpoint}?url=${encodeURIComponent(link)}`);
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
