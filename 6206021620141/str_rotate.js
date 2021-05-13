function rightRotations(str)
{
    console.log (str) ;
    var fin = [] ;
    for (i = 0 ; i<str.length ; i++){
        fin.push(str[i]) ;
    }
    for(i = fin.length-1 ; i > 0 ; i--)
    {
        s = i ;
        var x = fin[s] ;
        for (j = 0 ; j<fin.length-1 ; j++)
        {
            s++ ;
            if (s > fin.length-1)
            {
                s = 0 ;
            }
            x += fin[s] ;
        }
        console.log (x) ;
    }
}

console.log(rightRotations("abc"))
console.log(rightRotations("abcdef"))