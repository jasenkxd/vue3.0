import {reactive} from "vue"
function ToDoAdd(state){
    let stu=reactive({
        stu:{
          id:'',
          name:'',
          age:''
        }
      })
      function add(){
        console.log(stu,'stu')
        let newstu=Object.assign({},stu);
        state.stus.push(newstu);
        stu.id="";
        stu.name="";
        stu.age="";
      };
      return {stu,add}
  }
export default ToDoAdd