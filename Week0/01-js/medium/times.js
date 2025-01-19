function calculateTime(n) {
    // Record the start time
    const startTime = new Date();
  
    // Calculate the sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    // Record the end time
    const endTime = new Date();
  
    // Calculate the time difference in seconds
    const timeTaken = (endTime - startTime) / 1000;
  
    return timeTaken;
  }
  
  // Example usage
  console.log(`Time taken to compute sum from 1 to 100: ${calculateTime(100)} seconds`);
  console.log(`Time taken to compute sum from 1 to 100000: ${calculateTime(100000)} seconds`);
  console.log(`Time taken to compute sum from 1 to 1000000000: ${calculateTime(1000000000)} seconds`);
  