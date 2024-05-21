let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
};

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

dic.apple = '사과';
dic.ten = 10;
console.log(dic.apple);
console.log(dic.ten);

delete dic.girl;
console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

let dic2 = {
    present : "현재",
};
console.log(dic2.present);
dic2.present = "선물";
console.log(dic2.present);

const dic3 = {
    present : "현재",
};
console.log(dic3.present);
dic3.present = "선물";
console.log(dic3.present);

const unit = {
    attack : function(weapon) {
        return `${weapon}으로 공격한다.`;
    }
}
console.log(unit.attack("주먹"));
console.log(unit.attack("총"));


let dic4 = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
};

console.log(dic4['boy']);
console.log(dic4['girl']);
console.log(dic4['friend']);


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let dic5 = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
};

rl.question("찾을 단어를 입력하세요 : ", function (key) {
    let word = key;
    console.log(dic5[word]);

    rl.close();
});


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("다이쓰! 무조건 천원, 상품입력?", function (obj) {
    let basket = {
        [obj] : "1000원",
    }
    console.log(basket[obj]);

    rl.close();
});


let id = "jamsu";
let pw = "1111";

let user = {
    id : id,
    pw : pw,
}

console.log(user.id);
console.log(user.pw);


let user = {
    id : "jamsu",
    pw : "1111",
    name : "lch",
    mobile : "010-4477-XXXX",
    country : "대한민국"
}

for(let info in user){
    console.log(`${info} : ${user[info]}`);
}