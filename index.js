let countVal = 0;
const addBtn=document.getElementById("increase")
const subBtn=document.getElementById('decrease')
const resetBtn=document.getElementById('reset')
const count=document.getElementById('count')

addBtn.onclick = function() {
  countVal ++;
  count.innerHTML = countVal;
if(countVal>0){
count.style.color= "lightgreen"
  }
}
subBtn.onclick = function() {
  countVal --;
  count.innerHTML = countVal;
if(countVal<0){
count.style.color= "red"
}
}
resetBtn.onclick = function() {
  countVal = 0;
  count.innerHTML = countVal;
}
