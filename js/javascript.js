var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(json =>{
  const user = json.results[0]
  console.log(user)
  document.getElementById('name').innerHTML= user.name.first+" "+user.name.last
  document.getElementById('cell').innerHTML= user.cell
  document.getElementById('email').innerHTML= user.email
 
  //verifica año de nacimiento para que en 1997 tenga >=18 años (en 1997 inicia estudiios)
  var anonac =parseInt(user.dob.date.slice(0,4))
  if (anonac>1979){
      document.getElementById('birth').innerHTML= "1979"+ user.dob.date.slice(4,10)
  }
  else{
  document.getElementById('birth').innerHTML= user.dob.date.slice(0,10)
  }

  document.getElementById('adress').innerHTML= user.location.street.number+" "+user.location.street.name+", "+user.location.state+", "+user.location.country
  document.getElementById('picture').src= user.picture.large
  
})



      
