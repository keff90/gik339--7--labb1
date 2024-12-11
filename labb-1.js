/*const checkbox = document.getElementById('divStyle');
const textFields = document.querySelectorAll('.text-field');
const button = document.getElementById('deleteElement');
const output = document.querySelector('#output'); 
console.log(button);
console.log(textFields);


textFields.forEach((field) => {
    field.addEventListener('blur', handleBlur);
  });

function handleBlur(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name)
    console.log(value)
    if (name === "content") {
        const html = `<p>Fältet ${name} har värdet ${value} </p>`;
        console.log(html)
        output.insertAdjacentHTML('afterbegin', html);
    }
}

/* Färgändring på output div 
const colorInput = document.getElementById('color');
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        const color = colorInput.value;
        output.style.backgroundColor = color;
    }
    else {
        output.style.backgroundColor = '';
    }
}); 

colorInput.addEventListener('input', () => {
    if (checkbox.checked) {
        output.style.backgroundColor = colorInput.value
    }
});

/* Remove knappen
button.addEventListener('click', () => {
    if (output) {
        output.remove();
        console.log("div has been removed.");
    }
    
});
*/
const button = document.getElementById("deleteElement");

button.addEventListener("click", callback()); 

function callback(e) {
    console.log(e); 
}