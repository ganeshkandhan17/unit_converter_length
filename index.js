function convert(){
    let input=Number(document.getElementById("in").value);
    let ans=0;
    if(input==0){
        window.alert("Enter number");
    }
    let unin1=document.getElementById("unin1").value;
    let unin2=document.getElementById("unin2").value;
    if(unin1==""||unin2==""){
        window.alert("Select the unit to convert");
    }
    if(unin1==unin2){
        window.alert("both the units are same");
    }
    if(unin1=="mm"&&unin2=="cm"){
        ans=input/10;
    }
    if(unin1=="mm"&&unin2=="m"){
        ans=input/1000;
    }
    if(unin1=="mm"&&unin2=="km"){
        ans=input/1000000;
    }
    if(unin1=="cm"&&unin2=="m"){
        ans=input/100;
    }
    if(unin1=="cm"&&unin2=="km"){
        ans=input/100000;
    }
    if(unin1=="m"&&unin2=="km"){
        ans=input/1000;
    }
    if(unin1=="cm"&&unin2=="mm"){
        ans=input*10;
    }
    if(unin1=="m"&&unin2=="mm"){
        ans=input*1000;
    }
    if(unin1=="km"&&unin2=="mm"){
        ans=input*1000000;
    }
    if(unin1=="m"&&unin2=="cm"){
        ans=input*100;
    }
    if(unin1=="km"&&unin2=="cm"){
        ans=input*100000;
    }
    if(unin1=="km"&&unin2=="m"){
        ans=input*1000;
    }
    document.getElementById("ans").value=ans+""+unin2;
}