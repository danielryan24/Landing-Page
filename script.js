function handleGetFormData() {
  const nameInput = document.getElementById("name").value;
  const cityInput = document.getElementById("city").value;
  const emailInput = document.getElementById("email").value;
  const zipCodeInput = document.getElementById("zip-code").value;
  const statusInput = document.getElementById("status").checked;

  return {
    name: nameInput,
    email: emailInput,
    city: cityInput,
    zipCode: zipCodeInput,
    status: statusInput,
  };
}

function isNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str.charAt(i))) {
      return false;
    }
  }
  return true;
}
