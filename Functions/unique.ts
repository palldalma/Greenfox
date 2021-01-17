function unique(inputArray: number[]): number[] {
  let outputArray: number[] = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (!outputArray.includes(inputArray[i])) {
      //IF IT DOESN'T INCLUDE
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
}

console.log(unique([1, 2, 2, 3, 4, 4, 5]));
