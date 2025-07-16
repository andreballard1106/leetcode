function isPalindrome(x: number): boolean {
    if(x < 0) return false;
    let flag:boolean = true;
    let text:string = x + "";
    for(let i = 0 ; i < text.length / 2 ; i++ ) {
        if(text[i] !== text[text.length - i -1]) flag = false;
    }
    return flag;
};