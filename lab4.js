// Alert Name Function
function alertName() {
    let nameInput = document.getElementById("name").value;
    if (nameInput.trim() === "") {
        alert("Please enter a name.");
    } else {
        alert(`Hi ${nameInput}!`);
    }
}

// Change Color Function
function changeColor() {
    let body = document.body;
    if (body.style.backgroundColor === "lightblue") {
        body.style.backgroundColor = "lightgreen";
    } else {
        body.style.backgroundColor = "lightblue";
    }
}

// Validate Text Function
function validateText() {
    let textInput = document.getElementById("textInput").value;
    let validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (validation.test(textInput)) {
        alert("Special characters are not allowed!");
    } else {
        alert("Text is valid!");
    }
}

// Add Text to Heading Function
function addText() {
    let heading = document.getElementById("heading");
    heading.textContent += " - Add Text";
}
