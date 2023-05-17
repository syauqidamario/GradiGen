const gradBox = document.querySelector(".gradient-box");
const menuSelect = document.querySelector(".select-box select");
const color_inputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshButton = document.querySelector(".refresh");
const copyButton = document.querySelector(".copy");

const randomizeColor = () => {
    // Generating a random color in hexadecimal format. Example: #5665E9
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const genGradient = (isRandom) => {
    if(isRandom) { // If isRandom is true, update the colors inputs value with random color
        color_inputs[0].value = randomizeColor();
        color_inputs[1].value = randomizeColor();
    }
    // Creating a gradient string using the select menu value with color input values
    const gradient = `linear-gradient(${menuSelect.value}, ${color_inputs[0].value}, ${color_inputs[1].value})`;
    gradBox.style.background = gradient;
    textarea.value = `background: ${gradient};`;
}

const copy_code = () => {
    // Copying textarea value and updating the copy button text
    navigator.clipboard.writeText(textarea.value);
    copyButton.innerText = "Code Copied";
    setTimeout(() => copyButton.innerText = "Copy Code", 1600);
}

color_inputs.forEach(input => {
    // Calling genGradient function on each color input clicks
    input.addEventListener("input", () => genGradient(false));
});

menuSelect.addEventListener("change", () => genGradient(false));
refreshButton.addEventListener("click", () => genGradient(true));
copyButton.addEventListener("click", copy_code);