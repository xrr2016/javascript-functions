##一些常用的函数

###数组去重
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

###获取随机颜色值
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
