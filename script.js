// var arr = [1, 2, 3, -1, -2, -3];

// function isPositive(num) {
// 	if (num >=0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// var newArr = [];
// for (var i = 0; i <= arr.length; i++) {
// 	if (isPositive(arr[i])) {
// 		newArr.push(arr[i]);
// 	}
// }

// console.log(newArr);

//===================

// let arr = [1,5,8,-12,-7,-1];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (isNumberInRange(arr[i])) {
//         arr2.push(arr[i]);
//         console.log(arr2);
//     } 
// }
// function isNumberInRange(num) {
//     if (num>0&&num<10) {
//         return true;
//     } else {
//         return false;
//     }
// }
//================================================
// function getDigitsSum (digit) {
   
//     if (digit>9) {
//         let gagga = digit+"";
//         console.log(gagga);
//         let ahah = [];
//         console.log(ahah);
//         let spl = gagga.split('');
//         console.log(spl);
//         let ksks = ahah.concat(spl);
//         console.log(ksks);

//         for (let i = 0; i<ksks.length; i++) {
//             let num = Number(ksks[i]);
//             console.log();
//             let sum;
//             sum *= ksks[i];
            
//                 }
            
//         }
//     }
// getDigitsSum(24);
//===================================================

    // const matrix = [
    //     [4,1,5,8],
    //     [1,3,4,2],
    //     [0,9,-3,6],
    //     [4,2,7,7]
    // ]
    
    // for (let i=1; i<matrix.length; i++) {
    //     console.log(i);
    //     for (let j=0; j<i; ++j){
    //         console.log(j);
    //     }
    

    // }

    // const arr =[7,6,1,4,9];
    // let max = arr[0];
    // arr.forEach((item,i)=>{if (item>max){
    //   max=item;
    //   console.log(max)}
    // })


    // const divisors = (num)=> {
    //     let arr = [];
    //     let n = null;
    //     for (let i = 0; i < num; i++) {
    //         n++;
    //         arr.push(n);
    //     }
    //     let f = arr.filter((item, i, array) => {
    //         return num % item === 0 && item !== 1&& item!==num;
    //     });
    //     if (f.length === 0) return `${num} is prime`;
    //     else return f;
    //
    // };
    // console.log(divisors(13));


///////////////////////////////////////////////////////

//DUPLICATE

// function duplicateEncode(word){
//     let arr = [...word];
//     const object = {};
//     const result = [];
//
//     arr.forEach(item => {
//         if(!object[item])
//             object[item] = 0;
//             object[item] += 1;
//         });
//     for (const prop in object) {
//         if(object[prop] === 1) {
//             result.push(prop);
//         }
//     }
//
//     return result;
//
//     // return arr;
//
// }
//
// console.log(duplicateEncode("dinidi"));

//////////////////////////////////////////////////
// function duplicateEncode(word) {
//     let array2 = [];
//     let array3 = [];
//
//
//     for (let i = 0; i < word.length; i++) {
//
//         if (!array2.includes(word[i])) {
//             array2.push(word[i]);
//         } else {
//             array3.push(word[i]);
//         }
//     }
//     return array3;
//
// }
// console.log(duplicateEncode("aadsaasscdds"));

// function duplicateEncode(word) {
//     let lowerCase = word.toLowerCase();
//     let str='';
//     for (let i = 0; i < lowerCase.length; i++) {
//         if (lowerCase.indexOf(lowerCase[i]) === lowerCase.lastIndexOf(lowerCase[i])) {
//             // console.log(lowerCase[i])
//             str+='(';
//         }else {
//             str+=')';
//         }
//     }
//     return str;
//     }
// console.log(duplicateEncode("ababr"));



// let charRepeats = function (str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//             return false; // repeats
//         }
//     }
//     return true;
// };



///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////TOWER

// function towerBuilder(nFloors) {
//     function makeLine(len) {
//        let line = '*';
//        for(let j=1; j<len; j++) {
//            line+='**';
//        }
//        return line;
//     }
//
//     function makeSpace(quantity) {
//        let space = '';
//        for(let j=1; j<=quantity; j++) {
//            space+=' ';
//        }
//        return space;
//     }
//
//     function buildTriangle(x) {
//         let array =[];
//         let n=0;
//         let str='';
//         for (let k=1; k<=x; k++) {
//            n=x-k;
//            str=`${makeSpace(n)}${makeLine(k)}${makeSpace(n)}`;
//            array.push(str)
//         }
//         return array;
//     }
//     return buildTriangle(nFloors);
// }
// console.log(towerBuilder(8));

////////////////////////////QuickSort
// let array =[2,4,4,8,8,15,1];

// const qSort=(arr)=>{
//     if(arr.length<2) {
//         return arr
//     }
//
//     const pivot = arr[Math.floor(Math.random())*arr.length];
//     console.log(pivot);
//     const less = arr.filter(value => value < pivot);
//     const  greater = arr.filter(value => value> pivot);
//     const equal = arr.filter(value => value===pivot);
//     return [...qSort(less), ...equal,...qSort(greater)];
//
// };
// qSort(array);
// console.log(qSort(array));



// const unless = (test, then) => { if(!test) then() };
// const repeat = (numb, body) => {
//     for (let i=0; i<numb; i++) body(i);
// };
// repeat(5, (n) => unless(n%2, ()=>console.log(`${n} is even`)));
/////////////////////////////

A  = new Set([1,2]);
A2 = new Set([2,1]);
B  = new Set();
B.add({2:'dd',3:'dwd'});

// function areEqual(s1, s2){
//     console.log(s1.size, s2.size);
//     let result;
//     if(s1.size===s2.size)
//         s2.forEach((item)=>s1.has(item)?result=true:result=false);
//     else {
//         result=false
//     }
//     return result;
// }
// console.log(areEqual(A,A2));

////////////////////////

// function maxMultiple(divisor, bound){
//     //your code here
//     const recursion=(d, b)=> bound%divisor===0?bound:recursion(divisor,bound--);
//     return bound>=divisor?recursion(divisor,bound):null
// }
//
// console.log(maxMultiple(37,200));
//
// const b = (divisor, bound) => bound-bound%divisor;
// console.log(b(37,200));

