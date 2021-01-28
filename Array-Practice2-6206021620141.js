let furniture = ['Table', 'Chairs', 'Couch'];

function interator(furniture){
    console.log(furniture);
    for (let index = 0 ; index < furniture.length ; index++) {
        console.log(furniture[index]);
        
        for (let char of furniture[index]) {
            console.log( " ",char );
          }
    }
}

interator(furniture);