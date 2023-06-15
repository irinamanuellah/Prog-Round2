export function isHidingAnOption(input)
{
   let tab = Array.from(input);
   let c=tab.indexOf("C");
   let a=tab.indexOf("A");
   let x=input.indexOf("X");
   let countXa=a-x
   let countXc=c-x;
   let countAc= countXa - countXc

  if(countAc <= countXc){
    return false;
  } else{
    return true;
  }


}