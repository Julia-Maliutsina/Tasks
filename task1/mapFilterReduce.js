Array.prototype.myMap=function myMap(func) {
  let result=[];
  for (let i=0; i<this.length; i++) {
    result.push(func(this[i]));
  };
  return result;
}

Array.prototype.myFilter=function myFilter(func) {
  if (!func) {
    throw new Error('Function is not defined');
  }
  let result=[];
  for (let i=0; i<this.length; i++) {
    if(func(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
}

Array.prototype.myReduce=function myReduce(func,initial) {
  if (!func) {
    throw new Error('Function is not defined');
  }
  var result=initial;
  for (let i=0; i<this.length; i++) {
    if (result!==undefined) {
      result=func(result,this[i]);
    }  
    else {
      result=this[i];
    }
  }
  return result;
}
