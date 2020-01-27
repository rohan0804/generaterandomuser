function  createnode(el){
 return document.createElement(el);
}

function append(parent,el){
    return parent.appendChild(el);
}

var ul=document.getElementById('authors');
console.log(ul);
const url='https://randomuser.me/api/?results=10';
fetch(url)
.then((resp)=>resp.json())
.then((data)=>{
    let authors=data.results;
    console.log(authors);
    for(i=0;i<authors.length;i++){
        console.log(authors[i]);
        console.log(authors[i].picture.medium);
        console.log(authors[i].picture.medium);
        let li=document.createElement('li');
        let img=document.createElement('img');
        let span=document.createElement('span');
        img.src=authors[i].picture.medium;
        span.innerHTML=`${authors[i].name.first} ${authors[i].name.last}`;
        li.appendChild(img);
        li.appendChild(span);
        ul.appendChild(li); 
    }
    console.log(authors);
})
.catch((err)=>{
    console.log(JSON.stringify(err));
})