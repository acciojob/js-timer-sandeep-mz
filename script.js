// write js code here if required
// Function to format the current date and time as a string
        function formatDateTime() {
            const now = new Date();
            const day = now.getDate();
            const month = now.getMonth() + 1; // Months are zero-based, so add 1
            const year = now.getFullYear();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            // Format the date and time
            const formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

            return formattedDateTime;
        }

        // Function to update the timer element with the current date and time
        function updateTimer() {
            const timerElement = document.getElementById("timer");
            timerElement.textContent = formatDateTime();
        }

        // Call the updateTimer function to display the initial date and time
        updateTimer();

        // Update the timer every second (1000 milliseconds)
        setInterval(updateTimer, 1000);