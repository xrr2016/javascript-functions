## 一些常用的函数

### 数组去重
```
1. function unique(arr){
  return Array.from(new Set(arr))
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

### 获取随机颜色值
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

### 数组乱序
```
function shuffle(arr) {
    for (let i = arr.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
    }
}
```
### 数字求和
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
### 冒泡排序
```
function bubbleSort(arr){
  for(let i = 0;i<arr.length-1;i++){
    for(let j = i +1; j < arr.length;j++){
      if(arr[i] > arr[j]){
        [arr[i],arr[j]] = [arr[j],arr[j]]
      }
    }
  }
  return arr
}
```
