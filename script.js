document.getElementById("cvForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const inputs = document.querySelectorAll("#cvForm input, #cvForm textarea");
  let previewContent = "";

  inputs.forEach(input => {
    if (input.value.trim() !== "") {
      previewContent += `<p><strong>${input.placeholder}:</strong> ${input.value}</p>`;
    }
  });

  document.getElementById("previewContent").innerHTML = previewContent;
});
