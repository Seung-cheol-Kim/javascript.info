const prompt = require('prompt-sync')(); // 이 줄을 추가하세요!

function askPassword(ok, fail) {
  let password = prompt("비밀번호를 입력해주세요.", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' 로그인 성공' : ' 로그인 실패') );
  }
};

askPassword(user.login.bind(user, true),user.login.bind(user, false)); // ?