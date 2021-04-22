# HW2 

# 第一題 檔案 Star.js
function star(n){
    for (var i=0;i<n;i++)
    console.log('*')
}

star(5)

PS C:\Users\90121\Desktop\網頁設計\wp109b\week8\HW2> deno run Star.js
*
*
*
*
*

# 第二題 檔案 Between.js
function between(a,r){
    for(var i=a;i<=r;++i)
    console.log(i)
}

between(15,17)

PS C:\Users\90121\Desktop\網頁設計\wp109b\week8\HW2> deno run Between.js
15
16
17

# 第三題 檔案 PrimeBetween.js
function isPrime(n){
    if(n<2) return 0
    for(var x=2;x*x<=n;++x) if(n%x == 0) return 0
    return 1
}

function between(a,b)
{
    for(var i=a;i<=b;++i) if(isPrime(i))
    console.log(i)
}

between(15,30)

PS C:\Users\90121\Desktop\網頁設計\wp109b\week8\HW2> deno run PrimeBetween.js 
17
19
23
29