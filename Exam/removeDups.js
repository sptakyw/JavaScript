function removeDups(word){
    /*let unique = [...new Set(word)];
    console.log(unique);*/
    unique =[];
    for(i=0;i<word.length;i++){
        check=0;
        for (j=i+1;j<word.length;j++){
            if(word[i] == word[j]){
                check++;
            }
        }
        if(check==0){
            unique.push(word[i]);
        }
    }
    return console.log(unique);
}
removeDups([1,0,1,0]);
removeDups(["The","big","cat"]);
removeDups(["John","Taylor","John"]);