function calculateVAT( price ) {
    
        if (typeof price == 'number' &&  price > 0){
            const amount = (price * 7.5) / 100;
            return amount;
        }
        else {
            return 'Invalid';
        }
    }
    



function  validContact ( contact ) {
    if ( typeof contact !== 'string' ) {
       return 'Invalid';
      }

    else if (contact.length === 11 && contact.startsWith('01') && !contact.includes(' ') ) {
        return true;
      }

     else {
        return false;
     }
        
}



function willSuccess(marks) {

   

     if(Array.isArray(marks)) {
    
    let totalPass= 0;
    let totalFail= 0;
    
          for (const mark of marks) {
            if (mark >= 50) {
             totalPass++;
             }
              else {
            totalFail++;
             }
             }

             if (totalPass > totalFail) {
        return true;
             } 
         else {
        return false;
         }
    }

    

    else {
        return 'Invalid';
    }

   
}




function  validProposal( person1 , person2 ) {
    
    
    if (typeof person1 === "object" && typeof person2 === "object" ) {
                     if (person1.gender !== person2.gender && Math.abs(person1.age - person2.age) <= 7 ) {
                      return true;
                          }

                      else {
                   return false;
                   }
                     }

else {
    return 'Invalid';
}
}





function calculateSleepTime(times) {
 
    if (!Array.isArray(times) || times.some(time => typeof time !== 'number')) {
        return "Invalid";
    }
            
            let totalSecond = 0;
    
            for (let i = 0; i < times.length; i++) {
                totalSecond = times [i] + totalSecond ;
            }
        
            let hours = Math.floor(totalSecond / 3600);
            let minutes = Math.floor((totalSecond % 3600) / 60);
            let seconds = totalSecond % 60;
        
            return {
                hour: hours,
                minute: minutes,
                second: seconds
            }; 
    
}
  
  
