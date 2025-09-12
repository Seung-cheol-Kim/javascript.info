const prompt = require('prompt-sync')(); // 이 줄을 추가하세요!

function askPassword(ok, fail) {
  let password = prompt("비밀번호를 입력해주세요.", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    console.log(`${this.name}님이 로그인하였습니다.`);
  },

  loginFail() {
    console.log(`${this.name}님이 로그인에 실패하였습니다.`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));