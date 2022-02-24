// 変数宣言について　 従来はvar
var val1 = "変数1";
console.log(val1);

// varは上書き可能
val1 = "上書き";
console.log(val1);

// 再宣言 var
var val1 = "再宣言";
console.log(val1);

// 変数宣言について　let
let val2 = "let変数";
console.log(val2);

// 上書き可能 let
val2 = "let上書き";
console.log(val2);

// 再宣言 let 不可能
// let val2 = "let上書き";
// console.log(val2);

// 変数宣言について　const
const val3 = "const変数";
console.log(val3);

// const　上書き不可
// val3 = "上書き";
// console.log(val3);

// const　再宣言不可能
// const val3 = "再宣言";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更は可能
const val4 = {
  name: "tko",
  age: 29
};
console.log(val4);

val4.name = "eto";
val4.address = "Saitama";
console.log(val4);

// constで定義した配列はプロパティの変更は可能
const val5 = ["dog", "cat"];
val5[0] = "fish";
val5.push("monkey");
console.log(val5);
