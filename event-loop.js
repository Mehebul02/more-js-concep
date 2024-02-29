function a() {
  console.log("a");
  b();
}
function b() {
  console.log("b");
}

a();

function crComputer() {
  console.log("Naem Sarker");
  jannat();
}
function alif() {
  console.log("Alif");
  razwan();
}
function razwan() {
  console.log("Somrat");
}
function jannat() {
  console.log("jannat");
  alif();
}
crComputer();

function x() {
  console.log("x");
  y()
  console.log("xx");
}
function y() {
  console.log("y");

  z();
  console.log("yy");
}
function z() {
  console.log("z");
  console.log("zz");
}
x()