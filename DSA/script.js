        // Array Transverse
        
       //let data = [20,11,5,77,58,15,23,66,78,96,32];
        /* 
        for(let i=0; i<data.length; i++){
            document.write(`Place Value ${i} = <b> ${data[i]} </b> <br>`);
        }
        */

        // Accesing

        // let x = 3;
        // document.write(`${data[x]}`);

      /*  function getName(){
                let number = document.getElementById('number').value;
            if(number < data.length && typeof parseInt(number) == "number"){
            alert(data[number]);
            }else{
                alert("Enter valid input")
            }
        } */


        // Accesing

        /* let element = 100;
        let position = 2;

        console.log(`${data}`);

        for( let i=data.length - 1; i>=0; i--){
            if(i >= position){
                data[i+1] = data[i]
                if(i == position){
                    data[i] = element;
                }
            }
            //document.write(`${data [i]} <br>`);
        }
        console.log(`${data}`);
        */

        /* function insertElement(){
            let element = document.getElementById('number').value;
            let position = document.getElementById('position').value;
          //  console.log(data);
            for(i=data.length-1; i>=0; i--){
                if(i >= position){
                    data[i+1] = data[i];
                    if (i == position){
                        data[i] = parseInt(element);
                    }
                }
                
            }
            console.log(data);
        }
        */


        //Delete Array
        
  /*      function deleteElement(){
            let data = [20,11,5,77,58,15,23];
            let position = document.getElementById('position').value;
            position = parseInt(position) - 1;
        for(i = position; i < data.length-1; i++ ){
            data[i] = data[i+1];
        }
        data.length = data.length - 1;
        console.log(data)

    }  */

    // Search in Array
/*
    let data = [20,11,5,77,58,15,23];
    let item = 23;
    let index = undefined;

    // for(i=0; i <= data.length - 1; i++){
    //     if( data[i] == item){
    //         index = item;
    //       //  console.log(i);
    // }
    
    //console.log(data.indexOf(item));
    // data.splice(2,1);
    // console.log(data);
    */  



let a = 2;

for (i=1; i<=10; i++){
    console.log(a*i)
}



