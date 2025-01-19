// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock()
{
    const now = new Date();
    const minutes = now.getMinutes(); // Minutes (0-59)
    const seconds = now.getSeconds(); // Seconds (0-59)
    const hours = now.getHours(); // Hours (0-23)

    console.log(hours, minutes, seconds);
}
let counter1= setInterval(clock,1000);

setTimeout(()=>{
    clearInterval(counter1);
  },5000);
