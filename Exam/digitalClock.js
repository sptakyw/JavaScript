function digitalClock(seconds){
    let hr=Math.floor(seconds/3600);
    seconds=seconds-(hr*3600);
    let min = Math.floor(seconds/60);
    seconds=seconds-(min*60);
    if(hr>=24){
        hr=hr%24;
    }
    if(hr<10){
        hr="0"+hr;
    }
    if(min<10){
        min="0"+min;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    return hr+":"+min+":"+seconds;
}
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));