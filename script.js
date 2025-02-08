const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

  const height=  parseInt(document.querySelector('#height').value);
  const weight=  parseInt(document.querySelector('#weight').value);
  const results=  document.querySelector('#results');
  const remark=  document.querySelector('#remark');

  if(height===''|| height<0 || isNaN(height)){
     results.innerHTML=`please give a valid height ${height}`;
  }

 else if(weight===''|| weight<0 || isNaN(weight)){
    results.innerHTML=`please give a valid weight ${weight}`;
 }

 else {
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    results.innerHTML=`<span>${bmi}</span>`

    if(bmi<18.6)
    {
        //results.innerHTML=`<span>${bmi}</span>   <span>You are under Weight!</span>`
        remark.innerHTML='You are under Weight!';
    }
    if(bmi<24.9)
    {
        //results.innerHTML=`<span>${bmi}</span>   <span>You are in normal range</span>`
        remark.innerHTML='You are in normal range';
    }

    if(bmi>24.9)
    {
        //results.innerHTML=`<span>${bmi}</span>   <span>You are over Weight!</span>`
        remark.innerHTML='You are over weight';
    }
 }



})