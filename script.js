/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

const superDigit = (n, k) => {
    let sum = 0;
    
    for(let i = 0; i < n.length; i++) {
        sum +=Number(n[i]);
    }
    if(String(sum).length > 1) {
        sum = superDigit(String(sum), 1)
    }
    if(k > 1) {
        sum *=k;
        return superDigit(String(sum), 1)
    }
    
    console.log(sum);
    return sum;       
}


/////////////////////////////////////////////////////////////////////
const superDigit = (n, k) => {
  const p = (n.split('').map(Number).reduce((a, b) => a + b, 0) * k).toString();
  return p.length > 1 ? superDigit(p, 1) : p;
}
