# 用javascript实现经典排序

### 冒泡排序(Bubble Sort)
```javascript
function bubbleSort(arr){
  for(let i = 0; i < arr.length - 1; i++ ){
    for(let j = 0; j < arr.length -1 - i; j++ ){
      if(arr[j] > arr[j + 1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}
```

### 选择排序(Select Sort)
```javascript
function selectSort(arr){
  let minIndex
  for(let i = 0; i < arr.length -1; i++){
    minIndex = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}
```

### 插入排序(Insert Sort)
```javascript
function insertSort(arr){
  let preIndex, cur
  for(let i = 1; i < arr.length; i++){
    preIndex = i - 1
    cur = arr[i]
    while(preIndex >= 0 && arr[preIndex] > cur){
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = cur
  }
  return arr
}
```

### 希尔排序(Hill Sort)
```javascript
function hillSort(arr){
  let gap = 1
  let temp
  while(gap < arr.length / 3){
    gap = gap * 3 + 1
  }
  for(gap; gap > 0; gap = Math.floor(gap / 3)){
    for(let i = gap; i < arr.length; i++){
      temp = arr[i]
      for(var j = i - gap; j >= 0 && arr[j] > temp; j -= gap){
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  return arr
}
```      

### 归并排序(Merge Sort)
```javascript
function mergeSort(arr){
  if(arr.length < 2){
    return arr
  }
  let middle = Math.floor(arr.length / 2),
      left = arr.slice(0, middle)
      right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))      
}
function merge(left, right) {
  let res = []
  while(!!left.length && !!right.length){
    if (left[0] <= right[0]){
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  while (!!left.length)
    res.push(left.shift())
  while(!!right.length)
    res.push(right.shift())
  return res
}
```

### 快速排序(Quick Sort)
```javascript
function quickSort(arr, left, right) {
  let partitionIndex = null,
      leftIndex = left || 0,
      rightIndex = arr.length - 1 || 0
  if(leftIndex < rightIndex){
    partitionIndex = partition(arr, leftIndex, rightIndex)
    quickSort(arr, leftIndex, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, rightIndex)
  }
  return arr   
}
function partition(arr, left, right) {
  let pivot = left,
      index = pivot + 1
  for(let i = 0; i <= right; i++) {
    if(arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1   
}
function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
```

### 堆排序(Heap Sort)
```javascript
function heapSort (arr) {
  const heapify = function (x, len, arr) {
      let l = 2 * x + 1,
          r = 2 * x + 2,
          max = x
      if (l < arr.length && arr[l] > arr[max]) {
        max = 1
      }
      if (r < arr.length && arr[r] > arr[max]) {
        max = r
      }
      if (max !== x) {
        [arr[x], arr[max]] = [arr[max], arr[x]]
        heapify(max, arr.length, arr)
      }     
    }
    for (let i = Math.floor(arr.length / 2); i >= 0; i++) {
      heapify(i, arr.length, arr)
    }
    for (let i = arr.length - 1; i >= 1; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]]  
      heapify(0, --arr.length; arr)
    }
    return arr
}
```

### 基数排数(Radix Sort)
```javascript
function radixSort (arr) {
  const SIZE = 10
  let buckets = []
  let max = Math.max.apply(null, arr)
  let maxLenght = String(max).length
  for (let i = 0; i < SIZE; i++) {
    buckets[i] = []
  }
  for (let i = 0; i < maxLenght; i++) {
    for (let j = 0; j < arr.length; j++) {
      let value = String(arr[j])
      if (value.length >= i + 1) {
        let num = Number(value[value.length - 1 - i])
        buckets[num].push(arr[j])
      } else {
        buckets[0].push(arr[i])
      }
    }
    arr.length = 0
    for (let k = 0; k < SIZE; k++) {
      let l = buckets[k].length
      for (let l = 0; k < l; k++) {
        arr.push(buckets[k][l])
      }
      buckets[k] = []
    }
  }
  return arr
}
```

### 桶排序(Bucket Sort)
```javascript
function bucketSort (size = 5, arr) {
  if (arr.length < 2 ) {
    return arr
  }
  const max = Math.max.apply(null, arr)
  const min = Math.min.apply(null, arr)

  const bucketNumber = Math.floor((max - min) / size) + 1
  const buckets = []
  buckets.length = bucketNumber
  for (let i = 0; i < bucketNumber; i++) {
    buckets[i] = []
  }
  for (let i = 0; i < arr.length; i++) {
    let index = Math.floor((arr[i] - min) / size)
    buckets[index].push(arr[i])
  }
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = quickSort(buckets[i])
  }
  return buckets.join(',').split(',').filter(v => v !== '').map(Number)
}
```

## 计数排序(Count Sort)
```javascript
function countSort(arr) {
  let index = 0,
      min = Math.min.apply(null, arr),
      max = Math.max.apply(null, arr)
      res = []
  for (let i = min; i <= max; i++) {
    res[i] = 0
  }    
  for (let i = 0; i < arr.length; i++) {
    res[arr[i]]++
  }
  for (let i = min; i <= max; i++) {
    while (res[i]-- > 0) {
      arr[index++] = i
    }
  }
  return arr
}
```

[参考链接](https://sort.hust.cc/)
