// 格式化时间  2018-1-7 09:35:36 => 01月07日 09时35分 
function addZero(val) {
    return val.length === 2 ? val : '0' + val;
}
function time(date) { // '2018-1-7 09:35:36'
    var str = '';
    var dateArr = date.split(' '); // => 以空格分割'2018-1-7 09:35:36' => ['2018-1-7', '09:35:36]
    var d = dateArr[0].split('-'); // => ['2018', '1', '7']
    var month = d[1]; // 月
    var day = d[2]; // 日
    var a = dateArr[1].split(':'); // ['09', '35', '36']
    var hour = a[0]; // 小时
    var min = a[1]; // 分钟
    str = addZero(month) + '月' + addZero(day) + '日 ' + hour + '时' + min + '分';
    // str = 1 + '月' + 7 + '日 ' + hour + '时' + min + '分';
    return str;
} 
console.log(time('2018-1-7 09:35:36'))
// time('2018-11-7 09:35:36'); // => 01月07日 09时35分

