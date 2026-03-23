let obj = { result: 0 };
obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
  }
  inner();
};
obj.add(3, 4); // global에서 호출 -> inner의 this = global 객체
console.log(obj); // { result: 0, add: function }
console.log(result); // 7
