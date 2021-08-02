var x = "       ..---..                          .'  _    `.                    __..'  (o)    :                   `..__          ;                        `.       /                           ;      `..---...___              .'                   `~-. .-')    .                         ' _.'   :                           :      \                           '       +                         J         `._                   _.'             `~--....___...---~'        ";

// Let's Code a function that replace a char within a string 
function replace(data) {  
    return data.split("").map(function(s) {
       return s.split('o').join('_');
    })
}

let newX = replace(x).join('');


for(let i=0;i<newX.length;i+=35){
    console.log(newX.slice(i,i+35))
}
