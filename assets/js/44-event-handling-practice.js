//Butona basıldığında, 2 textboxicinde 100’lük sistemde girilen notları kontrol edip,ortalamasını bulan ve bunu harf sistemine çeviren fonksiyonu yazınız.
//A : 90-100
//B : 80-90
//C : 70-80
//D : 50-70
//F : 0-50


const btnAverage =document.querySelector("#btnAverage");
btnAverage.addEventListener("click", () => {
  const point1 = document.querySelector("#txtPoint1").value;
  const point2 = document.querySelector("#txtPoint2").value;

  const average = getAverage(point1, point2);
  console.log(average);
  const letter = convertNumberToLetter(average);
  alert(letter);
});
const getAverage = (point1, point2) => {
  if (isNaN(parseFloat(point1)) || isNaN(parseFloat(point2))) return;
  const average = (parseFloat(point1) + parseFloat(point2)) / 2;

  return average;
};
const convertNumberToLetter = (num) => {
  if (isNaN(parseFloat(num))) return;
  let letter;
  if (num >= 90 && num <= 100) {
    letter = "A";
  } else if (num >= 80 && num < 90) {
    letter = "B";
  } else if (num >= 70 && num < 80) {
    letter = "C";
  } else if (num >= 50 && num < 70) {
    letter = "D";
  } else if (num < 50) {
    letter = "F";
  }
  return letter;
};