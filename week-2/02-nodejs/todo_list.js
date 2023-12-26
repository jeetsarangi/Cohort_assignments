class Todo {

    constructor(){
      this.todo_list = [];
    }

    getRandomID(){
      return Math.floor(Math.random()*100000000);
    }

    getsize(){
        return this.todo_list.length;
    }
  
    add(todo){
      const newTodo = {
        id: this.getRandomID(),
        title: todo["title"],
        desc: todo["description"],
      };

      this.todo_list.push(newTodo);
      return newTodo;
    }

    check_ID(id){
      const haskey = this.todo_list.map(obj=>obj.id == id).some(Boolean);
      return haskey;
    }

    remove(id){

      const index = this.todo_list.findIndex(obj=>obj.id == id)
      this.todo_list.splice(index,1);
      
    }
    update(id, updatedTodo){
      
      const index = this.todo_list.findIndex(obj=>obj.id == id)
      this.todo_list[index]['title'] = updatedTodo['title'];
      this.todo_list[index]['description'] = updatedTodo['description'];

      return this.todo_list[index];
    }
    getAll(){
      return this.todo_list;
    }
    get(id){
      const index = this.todo_list.findIndex(obj=>obj.id == id)
      return this.todo_list[index];
    }
    clear(){
      this.todo_list = [];
    }
  
  }
  
  module.exports = Todo;