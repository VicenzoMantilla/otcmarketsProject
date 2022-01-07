const division = (open , marketCap) =>{
    if  ( marketCap === 0){
        return 'You cannot do this Operation';
      } else  {
       return open / marketCap;
      }
}
module.exports= division;