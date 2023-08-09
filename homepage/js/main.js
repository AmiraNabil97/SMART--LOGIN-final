

document.getElementById('userName').innerHTML=localStorage.getItem('userName');

document.getElementById('logbutton').addEventListener('click' ,function(){
    localStorage.removeItem('userName');
})