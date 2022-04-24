function getCount(str) {
    var a=str.match(/[a,e,u,i,o]/g);
    if(a==null){
        return 0

    }else{
        return a.length
    }
}

console.log(getCount("ttttrtryrytttppp"));
