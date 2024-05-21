function account(userId)
{
    var savedUser = '김민경';
    if(userId == savedUser) {
        console.log('반갑습니다. ' + userId + '님');
    }else{
        console.log('로그인 실패했습니다.');
    }
}
account('김민경');