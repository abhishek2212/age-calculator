let btn=document.getElementById("cal");
btn.addEventListener("click",function(){
  // console.log("adasd")
  let inp1=document.getElementById("inp1").value;
  let inp2=document.getElementById("inp2").value;
  // let err=document.getElementById("err");
  let res=document.getElementById("res");
  
  if(inp1=='' && inp2==''){
    // err.style.display="block";
    alert("Please fill the correct information")
  }else{
    // err.style.display="none";
    let dob= new Date(inp1);
    let check=new Date(inp2);
    let milliday=1000*60*60*24;
    let ageInDay=(check-dob)/milliday;
    let ageInYears=Math.floor(ageInDay/365);
    res.innerHTML = `<h3>Your Age : years = ${ageInYears}; </h3> Days = ${ageInDay} `;
  }
  
});