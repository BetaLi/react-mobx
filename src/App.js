import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observer} from 'mobx-react';
import {observable, computed, action, autorun} from 'mobx';
import Alert from 'react-icons/lib/go/alert';


class App extends Component {

    render(){
        const age = observable(10);
        const dispose = autorun(()=>{
            if(age.get()<0){
                throw new Error("age error")
            }
            console.log("Age is %d ",age.get());
        });
        age.set(15);

        dispose.onError(e =>{
           alert("Please set a correct number.");
        });
        age.set(-10);
        return (
            <div style={{fontSize:'30px'}}><Alert size={50} color={'red'}/>See result at console.</div>
        );
    }




    // render(){
    //     const number = observable([1,2,3]);
    //     const sum = computed(()=>number.reduce((a,b)=>a+b,0));
    //     const disposer = autorun(()=>console.log(sum.get()));
    //     number.push(4);
    //     disposer();
    //     number.push(5);
    //     return (
    //         <div>See result at console.</div>
    //     )
    // }





    // render(){
    //     const x = observable(1);
    //     const y = observable(3);
    //
    //     const result = computed(()=>{
    //         if(x.get()===0){
    //             throw new Error('discovery a error');
    //         }else {
    //             return y.get()/x.get();
    //         }
    //     });
    //     y.set(15);
    //     x.set(12);
    //     //x.set(0);
    //     return (
    //         <div>{result.get()}</div>
    //     );
    // }


    
    // render(){
    //     const name = observable("Jone");
    //
    //     const upCaseName = computed(()=>{
    //         name.get().toUpperCase();
    //     });
    //     upCaseName.observe(change=>console.log(change.newValue));
    //     name.set("Dave");
    //     return (
    //         <div></div>
    //     )
    // }
    

    // render(){
    //     class Foo{
    //         @observable length = 2;
    //         @computed get Square(){
    //             return this.length*this.length;
    //         }
    //         // set Squar(value){
    //         //    return this.length = Math.sqrt(value);
    //         // }
    //     }
    //     const foo = new Foo();
    //     return (
    //         <div>
    //             {foo.Square}
    //         </div>
    //     )
    // }





    // render(){
    //     class OrderLine{
    //         @observable price = 0;
    //         @observable count = 1;
    //
    //         @computed get total(){
    //             return this.price*this.count;
    //         }
    //     }
    //     const orderLine = new OrderLine();
    //     return (
    //         <div>
    //             {orderLine.total}
    //         </div>
    //     )
    // }




    // render(){
    //     const map = observable.map({"key":"value"});
    //     map.set("key","Flash");
    //
    //     const array = observable([1,2,3]);
    //     array[1] = 10;
    //
    //     const temperature = observable(20);
    //     temperature.set(25);
    //
    //     autorun(()=>{
    //         console.log(map.get("key")+"   "+array+"    "+temperature);
    //     });
    //     return (
    //         <div>
    //             See result by press F12.
    //         </div>
    //     )
    // }

    // render(){
    //     const todoStore = observable({
    //         todos:[],
    //         get completedCount(){
    //             return this.todos.filter(todo=>todo.completed).length;
    //         }
    //     });
    //     autorun(()=>{
    //         console.log('Completed %d of %d items',
    //             todoStore.completedCount,
    //             todoStore.todos.length);
    //     });
    //     todoStore.todos.push({title:'Go for tea.',completed:false});
    //     todoStore.todos[0].completed = true;
    //     return (
    //         <div>
    //             <h2>See console result by press F12 in Chrome</h2>
    //         </div>
    //     )
    // }



    // render(){
    //     const appState=observable({
    //         timer:0
    //     });
    //     @observer
    //     class TimerView extends Component{
    //         render(){
    //             return (
    //                 <div>
    //                     <input type={'button'} onClick={this.onReset.bind(this)} value={'Click me to resetTimer'}/>
    //                     Second passed:{this.props.appState.timer}
    //                 </div>
    //             )
    //         }
    //         onReset(){
    //             this.props.appState.resetTimer();
    //         }
    //     }
    //     appState.resetTimer = action(function reset(){appState.timer=0});
    //     setInterval(action(()=>{appState.timer+=1}),1000);
    //     return (
    //         <div>
    //             <TimerView appState={appState}/>
    //         </div>
    //     )
    // }


    // render(){
    //     class Todo{
    //         id = Math.random();
    //         @observable title;
    //         @observable finished = false;
    //         constructor(title){
    //             this.title = title;
    //         }
    //     }
    //     class TodoList{
    //         @observable todos= [];
    //         @computed get unfinishedTodoCount(){
    //             return this.todos.filter(todo=> !todo.finished).length;
    //         }
    //     }
    //     @observer
    //     class TodoListView extends Component{
    //         render(){
    //             return(
    //                 <div>
    //                     <ul>
    //                         {this.props.todoList.todos.map(todo=><TodoView todo={todo} key={todo.id}/>)}
    //                     </ul>
    //                     Tasks left: {this.props.todoList.unfinishedTodoCount}
    //                 </div>
    //             )
    //         }
    //     }
    //     const TodoView = observer(({todo})=>
    //         <li>
    //             <input type={'checkbox'}
    //                    defaultChecked={todo.finished}
    //                    onChange={(e)=>e.target.checked = todo.finished}
    //                    onClick={()=>todo.finished = !todo.finished}
    //             />{todo.title}
    //         </li>
    //     );
    //     const store = new TodoList();
    //     store.todos.push(new Todo('Get a cup of Coffee'),new Todo('Write simple code.'),new Todo('It is Funny.'));
    //     store.todos[0].finished = true;
    //     return(
    //         <div>
    //             <TodoListView todoList={store}/>
    //         </div>
    //     );
    // }
    
    
    
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
}

export default App;
