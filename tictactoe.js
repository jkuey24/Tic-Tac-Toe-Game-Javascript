var clicks=0;
var array= [0,0,0,0,0,0,0,0,0];

function whoWon(array){
  if (findSum(array)===3) {
    $("h1").text($("#player1").val() + " Wins!");

  }
  else if (findSum(array)=== -3){
    $("h1").text($("#player2").val() + " Wins!");

  }
  else {
    return "null";
  }
};


function findSum(array)
{
  if (sum (array,0,1,2)===3 ||
    sum (array,3,4,5)===3 ||
    sum (array,6,7,8)===3 ||
    sum (array,0,3,6)===3 ||
    sum (array,1,4,7)===3 ||
    sum (array,2,5,8)===3 ||
    sum (array,0,4,8)===3 ||
    sum (array,2,4,6)===3){
    return 3;
    }
  else if (sum (array,0,1,2)===-3 ||
    sum (array,3,4,5)===-3 ||
    sum (array,6,7,8)===-3 ||
    sum (array,0,3,6)===-3 ||
    sum (array,1,4,7)===-3 ||
    sum (array,2,5,8)===-3 ||
    sum (array,0,4,8)===-3 ||
    sum (array,2,4,6)===-3){
    return -3;
    }
  else return 0;

};


function sum(array,x,y,z){
   return array[x]+array[y]+array[z];

  };


function handleClickOnElement(element) {
  element.unbind('click');
  if (clicks%2 === 0) {
    element.append('<img src="apple_mac_os_x_snow_leopard_for_mac512x512.png">');

    array[parseInt(element.attr("id"))]=1;

  } else {
    element.append('<img src="hero_lion.png">');
    array[parseInt(element.attr("id"))]=-1;

  }

  clicks++;
  if (clicks>8){
  $("h1").text("Board full, start a new game");
  };
  console.log(array);
  console.log(whoWon(array));
}


$(document).ready(function(){


  $("#0").click(function(){
    handleClickOnElement($("#0"));
  });

  $("#1").click(function(){
    handleClickOnElement($("#1"));
  });
  $("#2").click(function(){
    handleClickOnElement($("#2"));
  });
  $("#3").click(function(){
    handleClickOnElement($("#3"));
  });
  $("#4").click(function(){
    handleClickOnElement($("#4"));
  });
  $("#5").click(function(){
    handleClickOnElement($("#5"));
  });
  $("#6").click(function(){
    handleClickOnElement($("#6"));
  });
  $("#7").click(function(){
    handleClickOnElement($("#7"));
  });
  $("#8").click(function(){
    handleClickOnElement($("#8"));
  });


  $("#submit1").click(function(){

     var player1 = $("#player1").val();

     $("#player1").hide();
     $("#player1header").text(player1);
     $("#submit1").hide();

   });

   $("#submit2").click(function(){

     var player2 = $("#player2").val();
     $("#player2").hide();
     $("#player2header").text(player2);
     $("#submit2").hide();

   });


   $("#reset").click(function(){
     location.reload(true);

  });

  


});
