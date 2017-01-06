# 一些常用的函数

## 返回带逗号的数字
```
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')  
}
```

## 数组去重

```
1. function unique(arr){
  return Array.from(new Set(arr))
}

function unique(arr){
  return [...new Set(arr)]
}

Array.prototype.unique = function(){
  return [...new Set(this)]
}

2. function unique(arr){
  let tempArr = []
  arr.map((v)=>{
    if(!(v in tempArr)){
      tempArr[tempArr.length] = v
    }
  })  
  return tempArr
}
```

当然还有很多其他的写法

## 获取随机颜色值

```
function getRandomColor(){
  let color = '#',
      letters = '0123456789abcdef'
  for(let i = 0;i<6;i++){
    color += letters[Math.round(Math.random() * letters.length)]
  }    
  return color
}
```

## 数组乱序

```
function shuffle(arr) {
    for (let i = arr.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]]; //ES6解构赋值
    }
}
```
```
[1,2,3,4,5].sort(function(){
    return Math.random() > .5 ? 1 : -1
})
```

```
function shuffle(arr){
  let random = 0,result = [] ,origin = []
  arr.map(item => {origin.push(item)})
  while(arr.length > 0){
    random = Math.floor(Math.random() * arr.length) //生产原数组随机索引
    result.push(arr[random]) //向结果数组添加元素
    arr.splice(random, 1) //删除原数组元素
  }
  return {
    result,
    origin
  }   
}
```

## 数字求和

```
function forSum(n){
  if(typeof n !== 'number'){
    return
  }
  let sum = 0
  for(n;n >= 1;n--){
    sum += n
  }
  return sum
}
```

## 冒泡排序

```
function bubbleSort(arr){
  for(let i = 0;i<arr.length-1;i++){
    for(let j = i +1; j < arr.length;j++){
      let cur = arr[i],next = arr[j]
      if(cur > next){
        arr[i] = next
        arr[j] = cur   
      }
    }
  }
  return arr
}
```

## 字符串重复

```
String.prototype.repeatify = String.prototype.repeatify ||
function(n){
  if(typeof n !== 'number') return
  let str =''
  for(let i=0;i<n;i++){
      str += this
  }
  return str
}
```

## 对象深拷贝

```
function deepCopy(parent,child){
  child = child || {}
  if(typeof parent !== 'object'){
    return
  }  
  for(let item in parent){
    if(parent.hasOwnProperty(item)){
      if(typeof p[item] === 'object'){
        child[item] = Array.isArray(parent[item])? [] : {}
        deepCopy(parent[item],child[item])   
      }else{
        child[item] = parent[item]
      }
    }
  }
  return child
}
```
```
const copy =  JSON.parse(JSON.stringify(source))
```

## 变量交换

```
function change(a,b){
  return  [a,b] = [b,a]
}
```

## 寻找数组中最大值与最小值得差值

```
function diff(arr){
  return Math.max(...arr) - Math.min(...arr)
}
```

## 获取n天前/后的日期

```
function getDayBeforeAfter(date,type,days){
  date = date || new Date()
  type = type || 'after'
  days = days || 1

  if(!(date instanceof Date)){
    if(date.indexOf('-') != -1){
      date.replace(/\-/g,'/')
    }
    date = new Date(date)
  }
  let newDate = date
  switch (type){
    case "after":
        newDate = new Date(date.getTime() + (days * 24 * 60 * 60 * 1000))      
        break  
    case "before":
        newDate = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000))
        break  
  }
  return `${newDate.getFullYear()}/` + `${newDate.getMonth() + 1}/` + `${newDate.getDate()}`
}
```

## 使用Promise对象处理ajax请求

```
function promiseAjax(url){
  return new Promise(function(resolve,reject){
    const xhr = new XMLHttpRequest()
    xhr.open('GET',url,true)
    xhr.onload = function(){
      if(xhr.status >= 200 && xhr.status < 400 ){
        let data = JSON.parse(xhr.responseText)
        resovle(data)
      }else{
        reject(new Error(xhr.statusText))
      }
    }
    xhr.onerror = function(){
      reject(new Error(xhr.statusText))
    }
    xhr.send()
  })
}
let URL = 'http://news-at.zhihu.com/api/4/news/latest'
promiseAjax(URL).then(function(data){
  console.log(data)
}).catch(function(err){
  console.log(err)
})
```

## 字符串重复

```
String.prototype.repeatify = String.prototype.repeatify ||
function(n){
  if(typeof n !== 'number') return
  let str =''
  for(let i=0;i<n;i++){
      str += this
  }
  return str
}
```

## 数字左补全

```
function leftPad(num){
  let n = parseInt(num,10)
  return n > 0 ? (n <= 9 ? '0'+n : n ) : '00'
}
```
## 斐波那契数列
```
function fibonacci(n){
  const res = [1,1]
  if(typeof n !== 'number') return
  if(n === 0) return res
  while(n > 0){
    res.push(res[res.length -2] + res[res.length - 1])  
    n--
  }
  return res
}
```
