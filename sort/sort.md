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

}
```

### 计数排数

### 桶排序

## 基数排序

[参考链接](https://sort.hust.cc/)
