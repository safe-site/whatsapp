// Generate a random token
const generateToken = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Function to copy the generated link to the clipboard
const copyToClipboard = () => {
  const generatedLink = document.getElementById('generatedLink');
  const range = document.createRange();
  range.selectNode(generatedLink);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  alert('Link copied to clipboard!');
};

// Function to share the generated link on social media
const shareOnSocialMedia = () => {
  const generatedLink = document.getElementById('generatedLink').textContent;

  if (navigator.share) {
    navigator.share({
      title: 'WhatsApp Link',
      text: 'Check out this WhatsApp link',
      url: generatedLink,
    });
  } else {
    prompt('Copy this link and share it with others:', generatedLink);
  }
};

// Generate the WhatsApp link and display it
const generateWhatsAppLink = () => {
  const phoneNumber = document.getElementById('phoneNumber').value;
  const message = document.getElementById('message').value;
  const token = generateToken();
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}&token=${encodeURIComponent(token)}`;

  // Update the generated link container with the generated link
  const generatedLinkContainer = document.getElementById('generatedLink');
  generatedLinkContainer.textContent = link;

  // Show the result container
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.classList.remove('hidden');
};

// Add event listener to the Generate Link button
const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateWhatsAppLink);

// Add event listener to the Copy button
const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', copyToClipboard);

// Add event listener to the Share button
const shareButton = document.getElementById('shareButton');
shareButton.addEventListener('click', shareOnSocialMedia);
