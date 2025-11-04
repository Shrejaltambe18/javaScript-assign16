const inputElement = document.getElementById("input-text");
const resultParagraph = document.getElementById("resultParagraph");

const UpperCase = () => {
    resultParagraph.innerText = inputElement.value.toUpperCase();
};

const LowerCase = () => {
    resultParagraph.innerText = inputElement.value.toLowerCase();
};

const reverseText = () => {
    resultParagraph.innerText = inputElement.value.split("").reverse().join("");
};

const textLength = () => {
    resultParagraph.innerText = `Length: ${inputElement.value.length}`;
};

const wordCount = () => {
    const words = inputElement.value.split("");
    resultParagraph.innerText = `Word Count: ${words.length}`;
};

const clearText = () => {
    inputElement.value = "";
    resultParagraph.innerText = "Result will be displayed here.";
};