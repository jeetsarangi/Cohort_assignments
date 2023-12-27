const fs = require('fs');
const { resolve } = require('path');

class Todo {

    constructor(){
      this.filePath = "todos.json";
    }

    myFileRead(){
      let p = new Promise((resolve)=>{
        fs.readFile(this.filePath,"utf-8",(err,data)=>{
          if(err) throw err;
          resolve(JSON.parse(data));
        });
      });
      return p;
    }

    myFileWrite(content){
      let p = new Promise((resolve)=>{
        fs.writeFile(this.filePath,content,(err)=>{
          if(err) throw err;
          resolve();
        });
      });
      return p;
    }

    getRandomID(){
      return Math.floor(Math.random()*100000000);
    }

    // getsize(){
    //   fs.readFile("todos.json",(err,data)=>{
    //     if(err) throw err;
    //     return JSON.parse(data).length;
    //   });
    // }
  
    async add(todo){

      // console.log(todo);
      const todo_list = await this.myFileRead();
      const newTodo = {
        id: this.getRandomID(),
        title: todo["title"],
        description: todo["description"],
      };
      // console.log(newTodo);
      todo_list.push(newTodo);
      await this.myFileWrite(JSON.stringify(todo_list));
      return newTodo;

      // fs.readFile("todos.json","utf-8",(err,data)=>{
      //   if(err) throw err;
      //   const todo_list = JSON.parse(data);
      //   const newTodo = {
      //     id: this.getRandomID(),
      //     title: todo["title"],
      //     desc: todo["description"],
      //   };
  
      //   todo_list.push(newTodo);
      //   fs.writeFile("todos.json",JSON.stringify(todo_list),(err)=>{
      //     if(err) throw err;
      //     return newTodo;
      //   });
      // });
    }

    async check_ID(id){
      // fs.readFile("todos.json",(err,data)=>{
      //   if(err) throw err;
      //   const todo_list = JSON.parse(data);
      //   const haskey = todo_list.map(obj=>obj.id == id).some(Boolean);
      //   return haskey;
      // });

      const todo_list = await this.myFileRead();
      const haskey = todo_list.map(obj=>obj.id == id).some(Boolean);
      return haskey;

    }

    async remove(id){

      const todo_list = await this.myFileRead();
      const index = todo_list.findIndex(obj=>obj.id == id)
      todo_list.splice(index,1);
      await this.myFileWrite(JSON.stringify(todo_list));


      // fs.readFile("todos.json","utf-8",(err,data)=>{
      //   if(err) throw err;
      //   const todo_list = JSON.parse(data);
      //   const index = todo_list.findIndex(obj=>obj.id == id)
      //   todo_list.splice(index,1);
      //   fs.writeFile("todos.json",JSON.stringify(todo_list),(err)=>{
      //     if(err) throw err;
      //   });

      // });
      
    }
    async update(id, updatedTodo){

      const todo_list = await this.myFileRead();
      const index = todo_list.findIndex(obj=>obj.id == id)
      // todo_list.splice(index,1);
      // const todo_list = JSON.parse(data);
      // const index = todo_list.findIndex(obj=>obj.id == id)
      // console.log(todo_list[index]);
      todo_list[index]['title'] = updatedTodo['title'];
      todo_list[index]['description'] = updatedTodo['description'];
      // console.log(todo_list[index]);
      await this.myFileWrite(JSON.stringify(todo_list));
      return todo_list[index];

      
    }

    // myFileRead(){
    //   let p = new Promise(function(resolve){
    //     fs.readFile("todos.json","utf-8",(err,data)=>{
    //       if(err) throw err;
    //       resolve(JSON.parse(data));
    //     });
    //   });
    //   return p;
    // }

    async getAll(){
      const data = await this.myFileRead();
      return data;
    }
    async get(id){
      const todo_list = await this.myFileRead();
      const todo = todo_list.find(obj=>obj.id == id);
      return todo;

      // fs.readFile("todos.json",(err,data)=>{
      //   if(err) throw err;
      //   const todo = todo_list.find(obj=>obj.id == id)
      //   return todo;
      // });
    }
  }
  
  module.exports = Todo;