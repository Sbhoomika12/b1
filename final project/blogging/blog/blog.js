var a = {};
function addnewarticle()
{
    var x=document.getElementById("fName").value;
    var y =document.getElementById("Description").value;
    a[x]=y;
    localStorage.setItem('user', JSON.stringify(a));
    console.log('test')
}