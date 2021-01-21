function createQuote (quote, callback)
    {
        let myQuote = "like I aways say, " + quote ;
        callback (MyQuote) ; // 2
    }

function logQuote(quote)
    {
        console.log (quote + 'Yes..') ;
    }
createQuote ("you will getting better!", logQuote) ; // 1