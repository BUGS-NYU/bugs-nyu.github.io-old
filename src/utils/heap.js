// heap = [elements, comparator]

export function heapNew(comp) {
  return [[], comp];
}

export function heapLength(heap) {
  return heap[0].length;
}

export function heapPush(heap, value) {
  const heapData = heap[0];
  const comp = heap[1];

  let currentIdx = heapData.length;
  let parentIdx = (currentIdx - 1) >> 1;
  heapData.push(undefined);

  let prnt = heapData[parentIdx];
  while (currentIdx > 0 && comp(value, prnt) < 0) {
    heapData[currentIdx] = prnt;
    currentIdx = parentIdx;
    parentIdx = (currentIdx - 1) >> 1;
    prnt = heapData[parentIdx];
  }

  heapData[currentIdx] = value;
}

export function heapPop(heap) {
  const heapData = heap[0];
  const comp = heap[1];

  if (heapData.length === 0) {
    throw new Error("no element");
  }

  let retValue = heapData[0];
  let current = heapData[heapData.length - 1];
  let currentIdx = 0;
  let leftIdx = currentIdx * 2 + 1;
  let rightIdx = leftIdx + 1;

  while (leftIdx < heapData.length) {
    const left = heapData[leftIdx];
    let changed = false;
    let idx = undefined;
    let val = undefined;

    if (comp(left, current) < 0) {
      changed = true;
      idx = leftIdx;
      val = left;
    }

    if (rightIdx < heapData.length) {
      const right = heapData[rightIdx];
      if (comp(right, current) < 0 && comp(right, left) < 0) {
        changed = true;
        idx = rightIdx;
        val = right;
      }
    }

    if (!changed) break;

    heapData[currentIdx] = val;
    currentIdx = idx;
    leftIdx = currentIdx * 2 + 1;
    rightIdx = leftIdx + 1;
  }

  heapData[currentIdx] = current;
  heapData.splice(heapData.length - 1, 1);
  return retValue;
}

// const heap = heapNew((a, b) => a - b);

// heapPush(heap, 12);
// heapPush(heap, 1);
// heapPush(heap, -2);
// heapPush(heap, 30);
// heapPush(heap, 21);

// console.log(heapPop(heap));
// console.log(heapPop(heap));
// console.log(heapPop(heap));
// console.log(heapPop(heap));
// console.log(heapPop(heap));
