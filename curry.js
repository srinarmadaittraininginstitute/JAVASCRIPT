function add (a) {
  return function(b){
document.write(a+" "+b)
   return a + b;
  }
}
document.write(" Sum = "+add(3)(4))
