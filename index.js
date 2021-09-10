// Your code here
function mapToNegativize(a) {
  const b = [];

  for (const c in a) {
    b.push(a[c] * -1);
  }
  return b;
};

function mapToNoChange(a) {
  const b = [];

  for (const c in a) {
    b.push(a[c]);
  }
  return b;
};

function mapToDouble(a) {
  const b = [];

  for (const c in a) {
    b.push(a[c] * 2);
  }
  return b;
};

function mapToSquare(a) {
  const b = [];

  for (const c in a) {
    b.push(a[c] ** 2);
  }
  return b;
};

function reduceToTotal(a, p = 0) {
  for (const c in a) {
    p += a[c];
  }
  return p;
};

function reduceToAllTrue(a) {
  let p = true;

  for(const c in a) {
    if (!!a[c] === false) {
      p = false
    }
  }

  return p;
}
  

function reduceToAnyTrue(a) {
  let p = false;

  for(const c in a) {
    if (!!a[c] === true) {
      p = true
    }
  }
  
  return p;

};


let sourceArray = [1, 2, true, "razmatazz", false]
reduceToAllTrue(sourceArray)
