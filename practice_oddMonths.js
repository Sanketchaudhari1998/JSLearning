console.log(`--------- odd months in a year---------`);
function oddMonth() {
    for (let index = 1; index <= 12; index= index + 2) {
        const result = index
        if (result % 2 != 0) {
            switch (result) {
                case 1:
                    console.log(`January`);
                    break;
                    case 2:
                        console.log(`February`);
                    break;
                    case 3:
                        console.log(`March`);
                    break;
                    case 4:
                        console.log(`April`);
                    break;
                    case 5:
                        console.log(`May`);
                    break;
                    case 6:
                        console.log(`June`);
                    break;
                    case 7:
                        console.log(`July`);
                    break;
                    case 8:
                        console.log(`August`);
                    break;
                    case 9:
                        console.log(`September`);
                    break;
                    case 10:
                        console.log(`October`);
                    break;
                    case 11:
                        console.log(`November`);
                    break;
                    case 12:
                        console.log(`December`);
                    break;
            
                default:
                    break;
            }
        }
        
    }
    
}

oddMonth()