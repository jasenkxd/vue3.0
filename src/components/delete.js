import {reactive} from "vue"
function ToDoListFn(){
    let state=reactive({
      stus:[
        {
          id:1,
          name:"a",
          age:19
        },{
          id:2,
          name:"b",
          age:99
        },{
          id:3,
          name:"c",
          age:68
        }
      ]
    })
    function deFn(id){
      console.log(id,'id')
      state.stus=state.stus.filter(item=>item.id!=id);
    }
    return {state,deFn}
  }
  export default ToDoListFn