import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observer} from 'mobx-react';
import {observable, computed, action, autorun} from 'mobx';

class App extends Component {

    render(){
        const todoStore = observable({
            todos:[],
            get completedCount(){
                return this.todos.filter(todo=>todo.completed).length;
            }
        });
        autorun(()=>{
            console.log('Completed %d of %d items',
                todoStore.completedCount,
                todoStore.todos.length);
        });
        todoStore.todos.push({title:'Go for tea.',completed:false});
        todoStore.todos[0].completed = true;
        return (
            <div>
                <h2>See console result by press F12</h2>
            </div>
        )
    }



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
