var colors=['red','green','blue'];
var col;


console.log(col);
document.getElementById('output').innerHTML=colors;
function check()
{
      col=document.getElementById('inbox').value;
      if(colors.indexOf(col)==-1)
      {
            alert(col + " is not present in the array.");
            colors.push(col);
            document.getElementById('output').innerHTML=colors;
      }     
      else
      {
            alert(col + " is already present in the array.");
            document.getElementById('output').innerHTML=colors;
      }
}
