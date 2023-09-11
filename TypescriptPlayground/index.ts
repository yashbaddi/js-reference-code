console.log("hey")

const users={
    name:"",
    email:"",
    password:""
}
// console.log(type users)

// users.isgod=false
// let hey:Number=45
// hey=4

interface User {
    readonly name:String,
    email:String,
    phone?:Number|String|Boolean

}

const yash={
    name:"Yash",
    email:"yash@gmail",
} as const

// yash

function add(x:number,y:number):never{
    // const z=x+y
    throw new Error()
    
}

function forever(a:string|number):never{
    if(typeof a ==="string"){
        return "something"
    }
     if(typeof a ==="number"){
        return "number"
    }
    if(typeof a==="boolean"){
        return "boo;"
    }
    // while(true){
    //     console.log("hey")
    // }
}

function getTheLast<T extends number|string>(a:T[]):T{
    return a[a.length-1]
}

const res=getTheLast(["1",2])


const values={0:8,1:5} as const

values[0]=4