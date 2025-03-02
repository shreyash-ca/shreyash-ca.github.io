/**
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
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
    try {
        // Set the wedding date - March 11, 2025 at 8:00 PM IST
        // Using ISO 8601 format for maximum compatibility
        var weddingDate = new Date('2025-03-11T20:00:00+05:30');
        var countDownDate = weddingDate.getTime();
        
        console.log("Countdown target date:", weddingDate.toString());
        console.log("Current date:", new Date().toString());
        console.log("Milliseconds until wedding:", countDownDate - new Date().getTime());
        
        // Get the timer element
        var timerElement = document.getElementById("time");
        
        if (!timerElement) {
            console.error("Timer element not found!");
            return;
        }
        
        // Create a simpler countdown display without flip animations
        function createCountdownDisplay() {
            return `<div class="simple-countdown">
                <div class="countdown-segment">
                    <div class="countdown-value" id="days-value">00</div>
                    <div class="countdown-label">days</div>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-segment">
                    <div class="countdown-value" id="hours-value">00</div>
                    <div class="countdown-label">hours</div>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-segment">
                    <div class="countdown-value" id="minutes-value">00</div>
                    <div class="countdown-label">min</div>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-segment">
                    <div class="countdown-value" id="seconds-value">00</div>
                    <div class="countdown-label">sec</div>
                </div>
            </div>`;
        }
        
        // Initialize countdown display
        timerElement.innerHTML = createCountdownDisplay();
        
        // Update the count down every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();
            
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            var days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Format values to have leading zeros if needed
            var daysFormatted = days.toString().padStart(2, '0');
            var hoursFormatted = hours.toString().padStart(2, '0');
            var minutesFormatted = minutes.toString().padStart(2, '0');
            var secondsFormatted = seconds.toString().padStart(2, '0');
            
            // Debug output to console
            console.log("Time remaining:", { days: daysFormatted, hours: hoursFormatted, minutes: minutesFormatted, seconds: secondsFormatted });
            
            // Update the elements directly without animations
            document.getElementById("days-value").textContent = daysFormatted;
            document.getElementById("hours-value").textContent = hoursFormatted;
            document.getElementById("minutes-value").textContent = minutesFormatted;
            document.getElementById("seconds-value").textContent = secondsFormatted;
            
            // If the count down is over, show message
            if (distance < 0) {
                clearInterval(x);
                timerElement.innerHTML = '<div class="end-msg">Celebration in progress! Bless the couple for a happy life!</div>';
            }
        }, 1000);
        
    } catch (error) {
        console.error("Error in countdown script:", error);
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

console.log('%cYour presence is requested!%c\n\nRegards: Vinit Shahdeo', styles1, styles2);

console.log(
    `%cShaadi me zaroor aana!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)
