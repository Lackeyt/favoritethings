$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    const fav1 = $("input#fav1").val();
    const fav2 = $("input#fav2").val();
    const fav3 = $("input#fav3").val();

    let favoriteThingsArray = [fav1, fav2, fav3];

    alert(favoriteThingsArray);
    
  })
});