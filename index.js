/**
 * Created by llfly on 2017/1/16.
 */

const $$ = (selector,context)=>{
    context = context || document;
    let elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
};

//http://play.csssecrets.io/


//http://dabblet.com/gist/1617f9750e4581e73720
//conic-gradient属性

/*
background: red;
background: conic-gradient(limegreen, green, limegreen);
min-height: 100%;


background:linear-gradent(90deg,yellow,red);

*/

//Modernizr
//https://modernizr.com/


//回退
//1. 通过样式的层叠
//2. modernizr
//3. @supports规则  (慎用  支持text-shadow & supports)
//4. js检测

// h1{color:gray;}
// .textshadow h1{
//  color:transparent;
//  text-shadow:0 0 .3em gray;
// }

//h1{color:gray;}
//@supports(text-shadow:0 0 .3em gray){
//  h1{
//      color:transparent;
//      text-shadow:0 0 .3em gray;
//  }
// }


var root = document.documentElement;
if('textShadow' in root.style){
    root.classList.add('textShadow');
}else{
    root.classList.add('no-textShadow');
}


//检查多个属性


const testProperty = (property)=>{
    var root = document.documentElement;

    if(property in root.style){
        root.classList.add(property.toLowerCase());
        return true;
    }
    root.classList.add('no-' + property.toLowerCase());
    return false;
}

//检测某个具体的属性值是否支持，把它赋给对应的属性，然后再检查浏览器是不是还保存着这个值
//这会改变元素样式，因此需要一个隐藏元素


var dummy = document.createElement('p');
dummy.style.backgroundImage = 'linear-gradient(red,tan)';

if(dummy.style.backgroundImage){
    root.classList.add('linergradients');
}else{
    root.classList.add('no-lineargradients');
}

const testValue = (id,value,property)=>{
    let dummy = document.createElement('p');
    dummy.style[property] = value;

    if(dummy.style[property]){
        root.classList.add(id);
        return true;
    }

    root.classList.add(`no-${id}`);
    return false;
}






//兼容性

//http://caniuse.com/
//https://www.webplatform.org/
//https://developer.mozilla.org/zh-CN/
//https://zh.wikipedia.org/wiki/%E7%80%8F%E8%A6%BD%E5%99%A8%E5%BC%95%E6%93%8ECSS%E6%94%AF%E6%8F%B4%E6%AF%94%E8%BC%83
