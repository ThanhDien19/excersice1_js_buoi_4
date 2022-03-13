/**
 * Bài 1: CT xuất 3 số nguyên theo thứ tự tăng dần
 *
 * nhập vào 3 số nguyên bất kỳ number1,number2, number3
 * + Xét trường hợp number1 > number2 && number1 > number3 && number2 >number3 :
 * True : sắp xếp thứ tự (number3, number2,number1)
 * + Xét trường hợp number1 > number2 && number1 > number3 && number3 >number2 :
 * True : sắp xếp thứ tự (number2, number3,number1)
 * ...................
 * (tương tự nhưng vậy với 4 trường hợp tiếp theo)
 * in ra thứ tự từ thấp đến cao
 */
var number1 = 10;
var number2 = 5;
var number3 = 8;

if (number1 > number2 && number1 > number3 && number2 > number3) {
  console.log(number3, number2, number1);
} else if (number1 > number2 && number1 > number3 && number3 > number2) {
  console.log(number2, number3, number1);
} else if (number2 > number1 && number2 > number3 && number1 > number3) {
  console.log(number3, number1, number2);
} else if (number2 > number1 && number2 > number3 && number3 > number1) {
  console.log(number1, number3, number2);
} else if (number3 > number2 && number3 > number1 && number1 > number2) {
  console.log(number2, number1, number3);
} else if (number3 > number2 && number3 > number1 && number2 > number1) {
  console.log(number1, number2, number3);
}

/**
 * Bài 3: cho 3 số nguyên, viết CT xuất ra có bao nhiêu lẻ, bao nhiêu chẵn
 *
 * Nhập 3 số nguyên bất kỳ number4, number5, number6
 * nhập số lượng số chẵn = 0;
 * nhập số lượng số lẻ = 0;
 * xét number4 % 2 = 0;
 * True: số lượng số chẵn = số lượng số chẵn + 1;
 * False : số lượng số lẻ = số lượng số lẻ + 1;
 * (tương tự cho number5 và number6)
 * in ra số lượng số chẵn và số lượng số lẻ
 */

var number4 = 4;
var number5 = 5;
var number6 = 6;
var slSoChan = 0;
var slSoLe = 0;

if (number4 % 2 == 0) {
  slSoChan += 1;
} else {
  slSoLe += 1;
}
if (number5 % 2 == 0) {
  slSoChan += 1;
} else {
  slSoLe += 1;
}
if (number6 % 2 == 0) {
  slSoChan += 1;
} else {
  slSoLe += 1;
}
console.log("số lượng số chẵn, số lẻ là:" + slSoChan + " " + slSoLe);

/**
 * Bài 4: Viết CT nhập 3 cạnh tam giác, cho biết tam giác đó là tam giác gì ?
 *
 * Nhập 3 cạnh của tam giác: cạnh 1, cạnh 2 , cạnh 3
 * + Tam giác vuông :
 * canh1 * canh1 = canh2 * canh2 + canh3 * canh3 hoặc
 * canh2 * canh2 = canh1 * canh1 + canh3 * canh3 hoặc
 * canh3 * canh3 = canh2 * canh2 + canh1 * canh1
 * + Tam giác cân :
 * canh1 = canh 2 hoặc canh2 = canh3  hoặc canh1 = canh3
 * + Tam giác đều:
 * canh1 = canh2 = canh3
 *
 * in ra loại tam giác
 */

var canh1 = 4;
var canh2 = 5;
var canh3 = 3;

if (
  canh1 * canh1 == canh2 * canh2 + canh3 * canh3 ||
  canh2 * canh2 == canh1 * canh1 + canh3 * canh3 ||
  canh3 * canh3 == canh2 * canh2 + canh1 * canh1
) {
  console.log("đây là tam giác vuông");
} else if ((canh1 == canh2) == canh3) {
  console.log("đây là tam giác đều");
} else if (canh1 == canh2 || canh2 == canh3 || canh1 == canh3) {
  console.log("đây là tam giác cân ");
} else {
  console.log("đây là tam giác thường");
}

/**
 * Bài 2: Viết chương trình chào hỏi các thành viên gia đình
 * Nhập câu hỏi : Ai đang sử dụng máy ?
 * nhập các thành viên gia đình : Ba, Mẹ, Anh Trai, Em gái
 *
 * Nếu là Ba in ra câu chào : Chào ông chủ
 * Nếu là Mẹ in ra câu chào : Chào bà chủ
 * Nếu là Anh Trai in ra câu chào : Chào cậu chủ
 * Nếu là Em gái in ra câu chào : Chào cô chủ
 *
 */
var user;
var dad = 1;
var mom = 2;
var son = 3;
var daughter = 4;

user = "4";

console.log("Bạn là ai?");

if (user == 1) {
  console.log("chào cậu chủ");
} else if (user == 2) {
  console.log("chào bà chủ");
} else if (user == 3) {
  console.log("chào cậu chủ");
} else if (user == 4) {
  console.log("chào cô chủ");
}
