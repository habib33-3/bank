function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValue = parseFloat(inputField.value);

  inputField.value = "";

  if (typeof inputFieldValue !== "number") {
    alert("please enter valid amount");
    return;
  } else {
    return inputFieldValue;
  }
}

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const value = parseFloat(element.innerText);

  return value;
}

function setTextElementById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
