import "./styles.css";
import { runCode } from "./exercise";

(() => {
  const arrayA = [1, 2, 3, 4];
  const arrayB = [5, 6, 7, 8];
  const rta = runCode(arrayA, arrayB);

  document.getElementById("app").innerHTML = `
  <h1>Title</h1>
  <p>Array A: <code>${arrayA}</code></p>
  <p>Array B: <code>${arrayB}</code></p>
  <p>Response from <code>runCode</code>
  <pre><code>${rta}</code></pre>
  `;
})();
