function reverse(x: number): number {
     let result:number = parseInt(("" + x).split('').reverse().join(''));
     if(result > 2 ** 31) return 0;
     return x > 0 ? result : 0 - result;
};

// function reverse(x: number): number {
//     let result : string = "";
//     let sign:boolean = x < 0 ? true : false;
//     x = Math.abs(x);
//     while(x) {
//         result += x % 10;
//         x /= 10;
//     }
//     return sign ? 0 - parseInt(result) : parseInt(result) ;
// };

