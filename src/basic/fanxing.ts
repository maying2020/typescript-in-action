// 泛型：不预先确定的数据类型具体的类型在使用的类型才能确定
function log(value:any):any{
  console.log(value)
  return value
}

// 进行泛型的改造
function log1<T>(value:T):T{
  console.log(value)
  return value
}

// 调用泛型
log1<string[]>(['a','b'])

//使用ts的类型推断调用
log1(['a','b'])


// 使用泛型定义一个函数类型

type Log= <T>(value:T)=>T
let myLog:Log = log1

// 泛型接口

interface Log1{
  <T>(value:T):T
}

interface Log2<T>{
  (value:T):T
}
let myLog1:Log2<number> = log1

// interface Log2<T= string>{
//   (value:T):T
// } 定义一个默认类型
// let myLog1:Log2 = log1
// myLog1('1')


// 泛型类与泛型约束

// 泛型不能应用于类的静态成员
class Dog4<T>{
  run(value:T){
    console.log(value);
    return value
  }
}

let dog4 = new Dog4<number>()
dog4.run(3)

// 当实力化的时候不传入类型 那方法的参数可以时候任意的类型
let dog5 = new Dog4()
dog5.run('sw')

// 泛型的约束


interface Len {
  length:number
}

function log2<T extends Len>(value:T):T{
  console.log(value,value.length)
  return value
}

// T继承了Len的接口 就证明T受到了约束 参数必须得具有length属性

// log2(2) //错误 number类型的没有length属性

// 泛型的好处
// 1.函数和类可以支持多种类型，增加的程序的可扩展性
// 2.不必写多条函数重载，联合类型声明，增强代码的可读性
// 3.灵活控制类型之间的约束

// 总结：
// 泛型不仅可以保持类型的一致性，又不失程序的灵活性，同时也可以通过泛型约束，控制类型之间的约束。从代码的上来看，可读性，简洁性，远优于函数重载，联合类型声明以及 any 类型的声明。