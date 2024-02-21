//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const form = document.querySelector("form");
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  // Load saved preferences from cookies
  function loadPreferences() {
    const fontSize = localStorage.getItem("fontSize");
    const fontColor = localStorage.getItem("fontColor");
    if (fontSize) {
      document.body.style.fontSize = fontSize + "px";
      fontSizeInput.value = fontSize;
    }
    if (fontColor) {
      document.body.style.color = fontColor;
      fontColorInput.value = fontColor;
    }
  }

  // Apply saved preferences
  loadPreferences();

  // Save preferences when the form is submitted
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    // Save preferences as cookies
    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("fontColor", fontColor);

    // Apply preferences
    document.body.style.fontSize = fontSize + "px";
    document.body.style.color = fontColor;
  });
});
