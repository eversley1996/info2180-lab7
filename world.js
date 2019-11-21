window.onload= function (){
    let button = document.getElementById("lookup");
    let button2 = document.getElementById("lookupcities");
    loadPage(button);
    loadBtn2(button2);
}

let loadPage = (button) =>{
  
  
  button.addEventListener("click", function(){
      var httpRequest = new XMLHttpRequest();
      
      var country= document.getElementById("country").value.toLowerCase();
      
      let url="./world.php?country=" + country.trim() + "&all=false";
      
      httpRequest.open("GET", url, true);
      
      httpRequest.send(null);
      
      httpRequest.onreadystatechange = function(){
          if (httpRequest.readyState == 4 && httpRequest.status == 200){
              let result = this.responseText;
              document.getElementById("result").innerHTML = result;
          }
      }
      
  });

}

let loadBtn2 = (button2) =>{
    button2.addEventListener("click", function(){
        var httpRequest = new XMLHttpRequest();
        
        var country= document.getElementById("country").value.toLowerCase();
        
        let url="./world.php?country=" + country.trim() + "&all=true";
        
        httpRequest.open("GET", url, true);
        
        httpRequest.send(null);
        
        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState == 4 && httpRequest.status == 200){
                let result = this.responseText;
                document.getElementById("result").innerHTML = result;
            }
        }
        
    });
}
