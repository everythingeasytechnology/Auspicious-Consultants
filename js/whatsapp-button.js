// WhatsApp Floating Button
document.addEventListener("DOMContentLoaded", function () {
  // Create the WhatsApp button element
  const whatsappBtn = document.createElement("a");
  whatsappBtn.href =
    "https://wa.me/254712792716?text=Hello%20Auspicious%20Consultants";
  whatsappBtn.className = "whatsapp-floating-btn";
  whatsappBtn.target = "_blank";
  whatsappBtn.rel = "noopener noreferrer";
  whatsappBtn.title = "Chat with us on WhatsApp";

  // Add WhatsApp icon
  whatsappBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';

  // Append to body
  document.body.appendChild(whatsappBtn);
});
