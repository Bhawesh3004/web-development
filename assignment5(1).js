var burger_price = 10;
var sandwich_price = 8;

document.getElementById("money1").innerHTML = "$"+burger_price;
document.getElementById("money2").innerHTML = "$"+sandwich_price;



var brg_sum,snd_sum,subtot;
function itemtotal()
{
      var bquant=document.getElementById("quant1").value;
      var squant=document.getElementById("quant2").value;
      brg_sum=bquant*burger_price;
      snd_sum=squant*sandwich_price;   
      document.getElementById("tot1").innerHTML = "$"+brg_sum;
      document.getElementById("tot2").innerHTML = "$"+snd_sum;
}
function submit()
{
      var bquant=document.getElementById("quant1").value;
      var squant=document.getElementById("quant2").value;
      document.getElementById("squant1").innerHTML = ""+bquant;
      document.getElementById("squant2").innerHTML = " "+squant;
      document.getElementById("stot1").innerHTML = brg_sum;
      document.getElementById("stot2").innerHTML = snd_sum;
      subtot=brg_sum+snd_sum;
      document.getElementById("subtotal").innerHTML = subtot;
}    