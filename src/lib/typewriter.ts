let typedChars = ""; 
let index  = 0;
let typewriter:ReturnType<typeof setInterval>;
const typedChar = (Name:String) => {
    if(index < Name.length){
        typedChars += Name[index];
        index++
    }else {
        
        clearInterval(typewriter);
    }

   }

export  const typing = (Name:String) => {
    typewriter = setInterval(typedChar, 100, Name );
    return typedChars;
    }


