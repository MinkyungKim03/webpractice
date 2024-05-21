var userName = '김민경';
var userPW = '1111';

function account(userId, userpw)
{
    console.log(userId);
    console.log(userpw);
    var savedName = '김민경';
    var savedPw = '1111';

    if(userId == savedName)
    {
        if(userpw == savedPw)
        {
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account(userName, userPW);


var userName = '김민경';
var userPW = '1111';

function account(userId, userpw)
{
    console.log(userId);
    console.log(userpw);
    var savedName = '김민경';
    var savedPw = '1111';

    if(userId == savedName)
    {
        if(userpw == savedPw)
        {
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account(userName);


var userName = '김민경';
var userPW = '1111';

function account(userId, userpw)
{
    console.log(userId);
    console.log(userpw);
    var savedName = '김민경';
    var savedPw = '1111';

    if(userpw === undefined){
        userpw = '1111';
    }

    if(userId == savedName)
    {
        if(userpw == savedPw)
        {
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account(userName);


var userName = '김민경';
var userPW = '1111';

function account(userId, userpw)
{
    console.log(userId);
    console.log(userpw);
    var savedName = '김민경';
    var savedPw = '1111';

    userpw = userpw || '1111';

    if(userId == savedName)
    {
        if(userpw == savedPw)
        {
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account(userName);