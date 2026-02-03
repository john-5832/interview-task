
function buildtree(comments){
    const map ={};
    const tree ={};

    comments.forEach(comment =>{
        map[comment.id]= {...comment,Children:[]};
    
    });

    comments.forEach(comment=>{
        if(comment.parentId === null){
            tree.push(map[comment.id]);
        }else{
            map[comment.parentId].children.push(map[comment.id]);
        }
    });
    return tree;
}

const comments = [
{ id: 1, parentId: null, text: "Hello" },
{ id: 2, parentId: 1, text: "Hi there" },
{ id: 3, parentId: 1, text: "Greetings" },
{ id: 4, parentId: 2, text: "Welcome" }
];

console.log(buildtree(comments))