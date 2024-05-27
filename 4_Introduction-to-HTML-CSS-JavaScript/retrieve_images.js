const imgSet = document.getElementsByTagName('img');
let output = '';
for(let  i= 0; i < imgSet.length; i++){
    output += "<p>Source for image ";
    output += i;
    output += ": ";
    output += imgSet[i].src;
    output += "<\/p>";
}

document.write(output);