function numberSplit(number){
    ans = Math.floor(number/2);
    if(number %2 == 1 ){
        console.log("{",ans,",",ans+1,"}");
    }else if(number %2 == -1 ){
        console.log("{",ans+1,",",ans,"}");
    }
    else{
        console.log("{",ans,",",ans,"}");
    }
}
numberSplit(4);
numberSplit(10);
numberSplit(11);
numberSplit(-9);