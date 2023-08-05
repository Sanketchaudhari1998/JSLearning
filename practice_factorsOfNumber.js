function factorsOf(num) {
     console.log(`----- factors of ${num} -----`);
    for (let index = 1; index <= num; index++) {
       
        if (num%index== 0) {
             console.log(index); 
        }
        
    }
    
}
factorsOf(4)
factorsOf(25)
factorsOf(50)
factorsOf(16)
factorsOf(10)