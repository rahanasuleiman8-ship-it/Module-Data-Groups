function sumValues(list) {
  let total = 0;
  // total += list[0];
  // total += list[1];
  // total += list[2];
  // total += list[3];
  // total += list[4];
  // return total;

  for (const items of list) {
    total += items;
  }
}

sumValues([1, 2, 3, 4, 5]);
