let waterStartedBoiling = true; 
const boilWater = 
 new Pormise((resolve, reject) => {
    setTimeout(() =>{
        if (waterStartedBoiling) {
        resolve('water finished boiling')

         } else {
            reject('water did not boil'); 
        }
    }, 3000)
}); 