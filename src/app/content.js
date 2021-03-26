export default "hello friend! CONTENT";

// Create heading node
const heading = document.createElement("h1");
heading.textContent = "Injected 1 from conten.js!";

// Append heading node to the DOM
const app1 = document.querySelector("#root");
app1.append(heading);
