let y = "1";
let d = "2";
let s = "3";
let ch = "4";
let pa = "5";
let sh = "6";
let haf = "7";
let hash = "8";
let no = "9";
let sefr = "0";
let sum = "+";
let men = "-";
let zarb = "*";
let taghsim = "/";
let dot = ".";
let s2 = "00";
let s3 = "000";
let a = 0;
// let button = document.querySelector("button");
var p = document.querySelector(".p");
function b1() {
  p.textContent += `${y}`;
}
function b2() {
  p.textContent += `${d}`;
}
function b3() {
  p.textContent += `${s}`;
}
function b4() {
  p.textContent += `${sum}`;
}
function b5() {
  p.textContent = "";
}
function b6(e) {
  p.textContent += `${ch}`;
  console.log(e);
}
function b7(e) {
  p.textContent += `${pa}`;
  console.log(e);
}
function b8(e) {
  p.textContent += `${sh}`;
  console.log(e);
}
function b9() {
  p.textContent += `${men}`;
}
function b10() {
  p.textContent = p.textContent.slice(0, -1);
}
function b8(e) {
  p.textContent += `${sh}`;
  console.log(e);
}
function b11(e) {
  p.textContent += `${haf}`;
  console.log(e);
}
function b12(e) {
  p.textContent += `${hash}`;
  console.log(e);
}
function b13(e) {
  p.textContent += `${no}`;
  console.log(e);
}
function b14() {
  p.textContent += `${zarb}`;
}
function b15() {
  p.textContent += `${s2}`;
}
function b16() {
  p.textContent += `${dot}`;
}
function b17(e) {
  p.textContent += `${sefr}`;
  console.log(e);
}
function b18() {
  p.textContent = eval(p.textContent);
}
function b19() {
  p.textContent += `${taghsim}`;
}
function b20() {
  p.textContent += `${s3}`;
}
