//   4.11 dars vazifa

// 1-masala

// const str =  'salam'

// function finda(str){
//     let con= 0;

// for(let iter of str){
//     if(iter=== 'a'){
//         con++;
//     }
// }
//    return con;
// }
// console.log(finda(str));

// 2-masala

// function findpositiveelement(n){
//     let arr=[]
//     for(let i=1; i<n; i++){
//         if(i%2==0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// console.log(findpositiveelement(10));

// 3-misol

//     const str = "s  alom  lar"
//    function deletefreespacestr(str){
//     return str.replaceAll(' ', '')
//    }
//    console.log(deletefreespacestr(str));

// 4-misol

//  const str = "hello"
//  function deletefirstelementStr(str){
//     let res= str.slice(0,0)+str.slice(1)
//         return res;

//  }
//  console.log(deletefirstelementStr(str));

// 5-misol

// let arr = [3,3,3,1,2,3,4,5]
// let min = 0;

// function findminarr(arr){
//    for (let i=1; i<arr.length; i++){
//     if(arr[i]<arr[min]){
//         min = i
//     // }
//    }

//     return min;
// }

// console.log(findminarr(arr));

//  6-misol

// const str = "ASssalom AlllaYKum"
// function allminsym(str){
//     return str.toLowerCase()

// }
// console.log(allminsym(str));

// 7-misol

// let arr = [1,2,3,4,5,6,7,8,9]
// function allsummArr(arr){
//     let sum=0;
//     arr.forEach(function(value){
//         return sum+=value
//     })
//     return sum
// }
// console.log(allsummArr(arr));

// 8-misol

// const str = "salom bolalar"
// let con= 0;
//     function findb(str){
//         for(let iter of str){
//             if(iter=== 'b'){
//                 con++;
//             }
//         }
//            return con;

//     }

// console.log(findb(str))

// 9-misol


// function kvadtratsarr(n){
    
//     let ar=[]
//     for (let i=1; i<n; i++){
        
//         ar.push(i**2)
//     }
//     return ar
// }
// console.log(kvadtratsarr(10));


// 10-misol

// const str= 'Hello World';
// function deletelastesym(str){
//     return str.slice(0,str.length-1)
   
// }console.log(deletelastesym(str));

// 11-misol

// let arr=[1,-3, -5,-6,-7 ,-8,12,34,55,67,889,]
// function newpositivesArr(arr){
//     let arrnew= [];
    
//      arr.forEach(function(value){
//        if(value>0){
//     arrnew.push(value)
//        }
//      })
//     return arrnew;
// }
// console.log(newpositivesArr(arr));

// 12-misol

// const str = "hozir 1 qavatdaman"
// function deletenum(str){
//     let str1 = ''
//    return str.replace( /[1-9]/g,' ')
// }

// console.log(deletenum(str));

// 13-misol
 
// const  str= "salom salom salom"
// function reversestr(str){
 
// let res  = str.split('')
// return res.reverse().join('')
// }
// console.log(reversestr(str));



// // 14-misol
// let arr = [ 1,2,4,5,6]
// function py(arr){
//     let newarr=[]
//     arr.forEach(function(value){
// return newarr.push(value*2)
//     })
//     return newarr
// }
// console.log(py(arr));



// 15-misol
// const str = 'salom'
// function reversestrsym(str){
   


// let arr = str.split('')
// let first= arr[0]
// let last = arr[arr.length-1]
// arr[0]=last
// arr[arr.length-1]= first
// return arr.join('')
// }console.log(reversestrsym(str));

// 16-misol
// let arr= [ 1,2,3,4,5,6]
// function  juftlaryigindisi(arr){
//     let sum=0;
//  arr.forEach(function(value){
//     if(value%2==0){
//          sum +=value
//     }
//  })
//  return sum;

// }

// console.log(juftlaryigindisi(arr));


// 17-misol

// const string = 'Salom bolalar'
// function toUpperCasestring(string){
//     return string.toUpperCase()
// }
// console.log(toUpperCasestring(string));

// 18-misol
// const str='salom'
// function sortirovkastr(str){
//     let res=str.split('')
//     return res.sort().join('')
// }
// console.log(sortirovkastr(str));


// 19-misol

// const str = 'salom salom salom'

// function bigFirststr(str){

//     let arr = str.split(' ').map(function(value){
//         return value[0].toUpperCase()+value.slice(1)

//     })
//     return arr.join(' ')
    
// }console.log(bigFirststr(str));



// 20-misol

// let arr =[ 1,2,3,4,5,6,6,7,8,9,11,22,33,444,,56]

// function newArr(arr){
//     let res=[]
//     arr.forEach(function(value){
//         if(value%2!=1){
//             res.push(value)
//         }
//     })
//     return res
// }
// console.log(newArr(arr));