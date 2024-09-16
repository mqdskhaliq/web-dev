// let userInput = document.getElementById("date");
// userInput.max =new.Data().to150String().split("T")[0];
// let result = document.getElementById("result");

// function calculateAge(){
//     let birthDate = new(userInput.value);

//     let d1 = birthDate.getData();
//     let m1 = birthDate.getMonth() + ;
//     let y1 = birthDate.getYear();

//     let today = new.Data();

//     let d2 = today.getData();
//     let m2 = today.getMonth() + ;
//     let y2 = today.getYear();

//     let d3 , m3 , y3;
//     y3 = y2 - y1;
//     if (m2 >= m1) {
//         m3 = m2 - 1;
//     }else{
//         y3--;
//         m3 = 12 + m2 - m1;
//     }
//     if (d2 >= d1) {
//   d3 = d2 - d1;
//     }else{
//         m3--;
//         d3 = getInMonth(y1,m1) + d2 - d1;
//     }
//     if (m3 < 0) {
//         m3 = 11;
//         y3--;

//     }
//     result.innerHTML = 'You are ${y3} years, ${m3} months and  ${d3} days old':

// }
// function getElementById(year,month) {
//     return new Data(year,month,0).getData();
// }

let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth();
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth();
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = daysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  console.log();

  result.innerHTML = `You are <span>${y3}</span> years, <span.${m3}</span> months, <
  and <span>${d3}</span> days old.`;
}

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
