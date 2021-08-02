var x = "       ..---..                          .'  _    `.                    __..'  (o)    :                   `..__          ;                        `.       /                           ;      `..---...___              .'                   `~-. .-')    .                         ' _.'   :                           :      \                           '       +                         J         `._                   _.'             `~--....___...---~'        ";

function replace(data) {  
    return data.split("").map(function(s) {
       return s.split('o').join('_');
    })
}

let newX = replace(x).join('');


for(let i=0;i<newX.length;i+=35){
    console.log(newX.slice(i,i+35))
}
