let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
console.log(user.name);

user.name = "pet"; 

/*
name을 위한 setter를 만들어 user의 이름이 
너무 짧아지는 걸 방지하고 있습니다. 
실제 값은 별도의 프로퍼티 _name에 저장됩니다.
*/