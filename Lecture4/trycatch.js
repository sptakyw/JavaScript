try
{
    criticalCode() ;
}
catch(ex)
{
    console.log("Got an error") ;
    logError(ex) ;
}

try
{
    throw "An exception that is thrown every time" ;
}

catch(ex)
{
    console.log ("Got an error") ;
    logError(ex) ;
}

try
{
    throw "An exception that is throw every time" ;
}

catch(ex)
{
    console.log("Got an error") ;
    logError(ex) ;
}

try
{
    criticalCode() ;
}

catch(ex)
{
    console.log("Got an error") ;
    logError(ex) ;
}

finally
{
    console.log("Code that alway will run") ;
}