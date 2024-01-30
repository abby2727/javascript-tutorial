function solution(str) {
    let strArr = str.split('');
    let str2 = "";
    for (let i = strArr.length - 1; i >= 0; i--) {
        str2 += strArr[i];
    }
    return str2;
}

console.log(solution("Abdul Fahad A. Pangandaman"));