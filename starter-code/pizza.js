// Write your Pizza Builder JavaScript in this file.


$(document).ready(function(){

  function totalPrice(){
    var precio = 10;
    var precioIndividual;
    var visiblePrices = $(".price li:visible");
    for(var i = 0; i<visiblePrices.length; i++){
      precioIndividual = parseInt(visiblePrices[i].innerHTML.slice(1,2));
      precio += precioIndividual;
    }
    return precio;
  }

 $(".btn-pepperonni").on("click",function(){
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price ul :nth-child(1)").toggle();
    $("strong").text("$"+totalPrice());



  //   inicial.toggle(function(){
  //     inicial= inicial - precio;
  //      $(".price strong").text("$"+inicial);
  //   },function (){
  //     inicial = inicial + precio;
  //    $(".price strong").text("$"+inicial);}
  //  );
 });

  var precio = $(".price ul :nth-child(1)")[0].innerHTML[1];


  $(".btn-mushrooms").on("click",function(){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price ul :nth-child(2)").toggle();
    $("strong").text("$"+totalPrice());

  });

  $(".btn-green-peppers").on("click", function(){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price ul :nth-child(3)").toggle();
    $("strong").text("$"+totalPrice());
  });


  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $(".price ul :nth-child(5)").hide();
  $("strong").text("$"+totalPrice());

  $(".btn-crust").on("click", function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price ul :nth-child(5)").toggle();
    $("strong").text("$"+totalPrice());
  });


  $(".btn-sauce").removeClass("active");
  $(".sauce").removeClass("sauce-white");
  $(".price ul :nth-child(4)").hide();
  $("strong").text("$"+totalPrice());

  $(".btn-sauce").on("click",function(){
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price ul :nth-child(4)").toggle();
    $("strong").text("$"+totalPrice());
  });

      $("strong").text("$"+13);

});
