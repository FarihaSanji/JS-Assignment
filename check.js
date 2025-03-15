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
  
 