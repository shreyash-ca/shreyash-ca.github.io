/**
 * @author Ashutosh Tiwari <checkashu@gmail.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

/**
 *
 * Despite so many new Bollywood and English song options, I prefered to use two-decade-old song, Din Shagna Da!
 *
 * Ever attended a North Indian Wedding? As soon as the DJ plays Din Shagna Da song, it means that the much-awaited moment is here
 * and the bride is all set to put her first foot forward to the wedding venue under a breathtaking phoolon ki chaadar.
 * Let's keep the sky-high status of this song untouched!
 *
 * When the website is backed up with a soul-stirring track, the feeling becomes absolutely surreal. 
 * Choose a heart-touching track! 🎵 ❤️
 *
 * Listen here: https://youtu.be/X0MDALpV29s
 *
 */
$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});

// Countdown Timer
document.addEventListener('DOMContentLoaded', function() {
    // Add global error handler for debugging on GitHub Pages
    window.onerror = function(message, source, lineno, colno, error) {
        console.error('Countdown error:', message, 'at', source, lineno, colno);
        console.error(error);
        
        // Display fallback on any error
        var timerElement = document.getElementById("time");
        if (timerElement) {
            timerElement.innerHTML = "Counting down to our wedding on March 11, 2025!";
        }
        return true; // Prevents default error handling
    };
    
    try {
        console.log("Initializing countdown...");
        
        // Set the wedding date - March 11, 2025 at 8:00 PM IST
        // Using hardcoded timestamp to avoid date parsing issues
        var countDownDate = new Date(2025, 2, 11, 20, 0, 0, 0).getTime(); // Month is 0-indexed
        
        // Manual calculation of time remaining (for debugging)
        var now = new Date().getTime();
        var rawDistance = countDownDate - now;
        var rawDays = Math.floor(rawDistance / (1000 * 60 * 60 * 24));
        
        console.log("Countdown details:");
        console.log("- Target date milliseconds:", countDownDate);
        console.log("- Current date milliseconds:", now);
        console.log("- Raw days remaining:", rawDays);
        console.log("- Target date string:", new Date(countDownDate).toString());
        console.log("- Current date string:", new Date().toString());
        
        // Get the timer element
        var timerElement = document.getElementById("time");
        
        if (!timerElement) {
            throw new Error("Timer element not found");
        }
        
        // Super simple HTML for countdown to minimize errors
        function createSimpleCountdown() {
            return `<div class="simple-countdown">
                <div class="countdown-segment">
                    <div class="countdown-value" id="days-value">--</div>
                    <div class="countdown-label">days</div>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-segment">
                    <div class="countdown-value" id="hours-value">--</div>
                    <div class="countdown-label">hours</div>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-segment">
                    <div class="countdown-value" id="minutes-value">--</div>
                    <div class="countdown-label">min</div>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-segment">
                    <div class="countdown-value" id="seconds-value">--</div>
                    <div class="countdown-label">sec</div>
                </div>
            </div>`;
        }
        
        // Initialize countdown display
        timerElement.innerHTML = createSimpleCountdown();
        
        // Make sure all elements exist before starting countdown
        var daysElement = document.getElementById("days-value");
        var hoursElement = document.getElementById("hours-value");
        var minutesElement = document.getElementById("minutes-value");
        var secondsElement = document.getElementById("seconds-value");
        
        if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
            throw new Error("Countdown elements not found");
        }
        
        console.log("Countdown elements initialized successfully");
        
        // Function to add leading zero (no dependency on padStart)
        function padZero(num) {
            return (num < 10) ? "0" + num : num.toString();
        }
        
        // Update the count down every 1 second
        var countdownInterval = setInterval(function() {
            try {
                // Get today's date and time
                var now = new Date().getTime();
                
                // Find the distance between now and the count down date
                var distance = countDownDate - now;
                
                // If the countdown is over
                if (distance < 0) {
                    clearInterval(countdownInterval);
                    timerElement.innerHTML = '<div class="end-msg">Celebration in progress! Bless the couple for a happy life!</div>';
                    return;
                }
                
                // Time calculations
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                // Format with leading zeros
                var daysFormatted = padZero(days);
                var hoursFormatted = padZero(hours);
                var minutesFormatted = padZero(minutes);
                var secondsFormatted = padZero(seconds);
                
                // Update elements (with error handling)
                daysElement.textContent = daysFormatted;
                hoursElement.textContent = hoursFormatted;
                minutesElement.textContent = minutesFormatted;
                secondsElement.textContent = secondsFormatted;
                
            } catch (error) {
                console.error("Error in countdown interval:", error);
                clearInterval(countdownInterval);
                
                // Show static message on error
                timerElement.innerHTML = "Counting down to our wedding on March 11, 2025!";
            }
        }, 1000);
        
    } catch (error) {
        console.error("Error in countdown initialization:", error);
        // Display a fallback message if there's an error
        var timerElement = document.getElementById("time");
        if (timerElement) {
            timerElement.innerHTML = "Counting down to our wedding on March 11, 2025!";
        }
    }
});

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 29th Nov, 2020!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Ashutosh Tiwari', styles1, styles2);

console.log(
    `%cShaadi me zaroor aana!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)
