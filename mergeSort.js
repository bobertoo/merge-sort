var digits = [7, 4, 3, 6, 5, 1, 9, 2, 8, 0];

const mergeSort = (array1) => {
  if (array1.length === 1) {
    return array1;
  }
  let array2 = array1.splice(array1.length / 2);
  array1 = mergeSort(array1);
  array2 = mergeSort(array2);
  return merge(array1, array2);
}

const merge = (array1, array2) => {
  let mergedArrays = [], counter1 = 0, counter2 = 0;
  while (counter1 < array1.length && counter2 < array2.length) {
    if (array1[counter1] < array2[counter2]) {
      mergedArrays.push(array1[counter1]);
      counter1++;
    }
    else {
      mergedArrays.push(array2[counter2]);
      counter2++;
    }
  }
  if (counter1 < array1.length) {
    while (counter1 < array1.length) {
      mergedArrays.push(array1[counter1]);
      counter1++;
    }
  }
  else {
    while (counter2 < array2.length) {
      mergedArrays.push(array2[counter2]);
      counter2++;
    }
  }
  return mergedArrays;
}

console.log(mergeSort(digits));
