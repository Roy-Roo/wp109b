class vector{
    constructor(array){
        this.a = array
    }

    add(y){
        var r =[]
        var x =this
        for(var i=0;i<x.a.length;i++){
            r[i]= x.a[i]+y.a[i]
        }
        
        return new vector(r)
    }

    sub(y){
        var r =[]
        var x =this
        for(var i=0;i<x.a.length;i++){
            r[i]= x.a[i]-y.a[i]
        }
        
        return new vector(r)
    }

    dot(y){
        var r =[]
        var x =this
        var c = 0
        for(var i=0;i<x.a.length;i++){
            r[i]=x.a[i]*y.a[i]
            c+=r[i]
        }
        
        return c
    }
    
    neg(y){
        var r =[]
        var x =this
        for(var i=0;i<x.a.length;i++){
            r[i]= x.a[i]*(-1)
        }
        
        return new vector(r)
    }
}

var x = new vector([1,1,1])
var y = new vector([2,2,2])

console.log('x.add(y)=',x.add(y))
console.log('x.sub(y)=',x.sub(y))
console.log('x.dot(y)=',x.dot(y))
console.log('x.neg(y)=',x.neg(y))