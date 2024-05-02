function startCounting(spanId, targetCount) {
  let count = 0;
  let intervalId = setInterval(() => {
      // Update the counter value and display it
      count++;

      // Check if the target count is reached
      if (count > targetCount) {
          clearInterval(intervalId); // Stop the counting when the target is reached
      } else {
document.getElementById(spanId).innerText = count;
      }
  }, 10); // Adjust the interval duration (in milliseconds) as needed
}

// Automatically start counting for each span when the page loads
startCounting('counter1', 850);
startCounting('counter2', 230);
startCounting('counter3', 5450);
startCounting('counter4', 780);





