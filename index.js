console.log("nothing to see here......");
const langSelector = document.querySelector("#lang-selector");
const langArr = [
  "Javascript",
  "React",
  "Node",
  "Angular",
  "CSS",
  "HTML",
  "Php",
  "Sql",
  "Kali-Linux",
  "C++",
  "Java",
];
let num = 0;
const changeText = () => {
  if (num >= langArr.length) {
    num = 0;
  }
  langSelector.textContent = langArr[num];
  num++;
};
const change = setInterval(changeText, 1000);

