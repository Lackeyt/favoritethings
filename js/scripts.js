$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    const fav1 = $("input#fav1").val();
    const fav2 = $("input#fav2").val();
    const fav3 = $("input#fav3").val();

    let favoriteThingsArray = [fav1, fav2, fav3];
    
    const ftArrayNew = [];
    ftArrayNew.push(favoriteThingsArray[1], favoriteThingsArray[0], favoriteThingsArray[2]);

    $("li.thing1").text(favoriteThingsArray[1]);
    $("li.thing2").text(favoriteThingsArray[0]);
    $("li.thing3").text(favoriteThingsArray[2]);
    $("#output").show()
  });
});