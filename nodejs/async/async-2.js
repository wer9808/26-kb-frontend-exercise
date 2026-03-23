new Promise((resolve, reject) => {
  try {
    console.log("피자를 주문했습니다");
    resolve();
  } catch (err) {
    console.log("피자를 주문하지 않습니다.");
    reject();
  }
});
