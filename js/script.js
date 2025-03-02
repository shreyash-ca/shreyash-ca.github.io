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
        // Set the date we're counting down to using a more precise date constructor
        // Use UTC time to avoid timezone issues
        var weddingDate = new Date();
        weddingDate.setUTCFullYear(2025);
        weddingDate.setUTCMonth(2); // March is 2 (zero-based)
        weddingDate.setUTCDate(11);
        weddingDate.setUTCHours(14, 30, 0, 0); // Convert 8:00 PM IST to UTC (UTC+5:30)
        var countDownDate = weddingDate.getTime();

        console.log("Countdown initialized for:", new Date(countDownDate).toUTCString());
        console.log("Days until wedding:", Math.floor((countDownDate - new Date().getTime()) / (1000 * 60 * 60 * 24)));
        
        // Get the timer element
        var timerElement = document.getElementById("time");
        
        if (!timerElement) {
            console.error("Timer element not found!");
            return;
        }
        
        // Create flip clock HTML structure
        function createFlipClock() {
            return `<div class="flip-clock">
                <div class="flip-unit-container">
                    <div class="flip-unit" id="days-tens">
                        <div class="digit">0</div>
                    </div>
                    <div class="flip-unit" id="days-ones">
                        <div class="digit">0</div>
                    </div>
                    <div class="unit-label">days</div>
                </div>
                <div class="time-separator">:</div>
                <div class="flip-unit-container">
                    <div class="flip-unit" id="hours-tens">
                        <div class="digit">0</div>
                    </div>
                    <div class="flip-unit" id="hours-ones">
                        <div class="digit">0</div>
                    </div>
                    <div class="unit-label">hours</div>
                </div>
                <div class="time-separator">:</div>
                <div class="flip-unit-container">
                    <div class="flip-unit" id="minutes-tens">
                        <div class="digit">0</div>
                    </div>
                    <div class="flip-unit" id="minutes-ones">
                        <div class="digit">0</div>
                    </div>
                    <div class="unit-label">min</div>
                </div>
                <div class="time-separator">:</div>
                <div class="flip-unit-container">
                    <div class="flip-unit" id="seconds-tens">
                        <div class="digit">0</div>
                    </div>
                    <div class="flip-unit" id="seconds-ones">
                        <div class="digit">0</div>
                    </div>
                    <div class="unit-label">sec</div>
                </div>
            </div>`;
        }
        
        // Initialize flip clock
        timerElement.innerHTML = createFlipClock();
        
        // Update the count down every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();
            
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Format values to have leading zeros if needed
            days = days.toString().padStart(2, '0');
            hours = hours.toString().padStart(2, '0');
            minutes = minutes.toString().padStart(2, '0');
            seconds = seconds.toString().padStart(2, '0');
            
            // Update each digit with animation
            updateDigitWithAnimation('#days-tens', days[0]);
            updateDigitWithAnimation('#days-ones', days[1]);
            updateDigitWithAnimation('#hours-tens', hours[0]);
            updateDigitWithAnimation('#hours-ones', hours[1]);
            updateDigitWithAnimation('#minutes-tens', minutes[0]);
            updateDigitWithAnimation('#minutes-ones', minutes[1]);
            updateDigitWithAnimation('#seconds-tens', seconds[0]);
            updateDigitWithAnimation('#seconds-ones', seconds[1]);
            
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                timerElement.innerHTML = '<div class="end-msg">Celebration in progress! Bless the couple for a happy life!</div>';
            }
        }, 1000);
        
        // Function to update digits with animation
        function updateDigitWithAnimation(selector, newValue) {
            const digitElement = document.querySelector(`${selector} .digit`);
            const currentValue = digitElement.textContent;
            
            if (currentValue !== newValue) {
                // Only add the flip class if not already animating
                if (!digitElement.classList.contains('flip')) {
                    // Store the current value for the animation
                    digitElement.setAttribute('data-before', currentValue);
                    
                    // Add flip class for animation
                    digitElement.classList.add('flip');
                    
                    // After animation completes, update the value and remove class
                    setTimeout(() => {
                        digitElement.textContent = newValue;
                        digitElement.classList.remove('flip');
                    }, 300); // Exactly 300ms to match the CSS transition timing
                }
            }
        }
        
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
