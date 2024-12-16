const repeatString = function(word, num) {
    if(num > -1){
    res = [];
    for (let i = 0; i < num; i++) {
        res.push(word)
        
       
    }
    return res.join('');
} else{
    return 'ERROR';
}
    

};

// Do not edit below this line
module.exports = repeatString;
