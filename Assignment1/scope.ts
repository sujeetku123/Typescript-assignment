function fav(input: boolean) 
{  
    let x = 200;  
    if (input) 
    {  
             
        let y = x + 1;  //x is here
        return y;  
    }  
    
    return y;   //y doesn't exist here 
}  