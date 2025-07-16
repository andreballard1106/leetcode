function myAtoi(s: string): number {
    s = s.trim();
    let sign:boolean = false;
    let result:string = "";

    if(s[0] == "-" || s[0] == "+") {
        if(s[0] == "-") sign = true;
        s = s.substring(1, s.length);
    } 

    for(let char of s) {
        if(+char >= 0 && +char <=9 && char !== " ") result += char;
        else break;
    }

    if(!sign) {
        if(+result >= 2 ** 31) return 2 ** 31 - 1;
        else return +result;
    } else {
        if(+result >= 2 ** 31) return 2 ** 31 * -1;
        else return 0 - +result; 
    }
};