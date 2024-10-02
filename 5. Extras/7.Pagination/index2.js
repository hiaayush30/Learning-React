//In a paginated API,you also want to return info about the next as well as the previous page
const express=require("express");
const app=express();

app.use(express.json());
const todos=[
    {title:"Todo 1",description:"This is Todo 1"},
    {title:"Todo 2",description:"This is Todo 2"},
    {title:"Todo 3",description:"This is Todo 3"},
    {title:"Todo 4",description:"This is Todo 4"},
    {title:"Todo 5",description:"This is Todo 5"},
    {title:"Todo 6",description:"This is Todo 6"},
    {title:"Todo 7",description:"This is Todo 7"},
    {title:"Todo 8",description:"This is Todo 8"},
    {title:"Todo 9",description:"This is Todo 9"},
    {title:"Todo 10",description:"This is Todo 10"},
    {title:"Todo 11",description:"This is Todo 11"},
    {title:"Todo 12",description:"This is Todo 12"},
    {title:"Todo 13",description:"This is Todo 13"},
    {title:"Todo 14",description:"This is Todo 14"},
    {title:"Todo 15",description:"This is Todo 15"},
    {title:"Todo 16",description:"This is Todo 16"},
    {title:"Todo 17",description:"This is Todo 17"},
    {title:"Todo 18",description:"This is Todo 18"}
]
app.get("/todos",(req,res,next)=>{
    const page=parseInt(req.query.page) || 1
    const limit=parseInt(req.query.limit) || 5
    
    const startIndex=(page-1)*limit;
    const endIndex=page*limit 

    const resultTodos={};
    resultTodos.todos=todos.slice(startIndex,endIndex) //so todos of index 0 to 4 (ie 1 to 5)
    
    if(endIndex<todos.length){
        resultTodos.next={
            page:page+1,
            limit:limit
        }
    }

    if(startIndex>0){
        resultTodos.previous={
            page:page-1,
            limit:limit
        }
    }
    

   res.json({
    todos:resultTodos
   })
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});
