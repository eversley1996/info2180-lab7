window.onload= function (){
    loadPage();
}

let loadPage = () =>{
  let button = document.getElementById("lookup");
  
  button.addEventListener("click", function(){
      var httpRequest = new XMLHttpRequest();
      
      var country= document.getElementById("country").value.toLowerCase();
      
      let url="./world.php?country=" + country.trim() + "&all=false";
      
      httpRequest.open("GET", url, true);
      
      httpRequest.send(null);
      
      httpRequest.onreadystatechange = function(){
          if (httpRequest.readyState == 4 && httpRequest.status == 200){
              var result = this.responseText;
              document.getElementById("result").innerHTML = result;
          }
      }
      
  });
}
