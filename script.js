document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const snowflakesContainer = document.querySelector('.snowflakes');
    const startButton = document.getElementById('startButton');
    const bgMusic = document.getElementById('bgMusic');
    const speechBubble = document.querySelector('.speech-bubble');
    const birthdayText = document.getElementById('birthdayText');
    const memory1 = document.getElementById('memory1');
    const memory2 = document.getElementById('memory2');
    const memory3 = document.getElementById('memory3');
    const memory4 = document.getElementById('memory4');
    const memory5 = document.getElementById('memory5');
    const memory6 = document.getElementById('memory6');
    const memory7 = document.getElementById('memory7');
    const memory8 = document.getElementById('memory8');
    const memory9 = document.getElementById('memory9');
    const memory10 = document.getElementById('memory10');
    const startContainer = document.querySelector('.start-container');
    
    // Function to show speech bubble
    function showSpeechBubble() {
        speechBubble.style.opacity = '1';
        speechBubble.style.transform = 'translateY(0)';
        
        // Hide after 3 seconds
        setTimeout(() => {
            speechBubble.style.opacity = '0';
            speechBubble.style.transform = 'translateY(10px)';
        }, 3000);
    }
    
    // Function to show text with fade in/out
    function showText(text, duration = 3000) {
        return new Promise((resolve) => {
            birthdayText.textContent = text;
            birthdayText.style.opacity = '1';
            
            setTimeout(() => {
                birthdayText.style.opacity = '0';
                setTimeout(resolve, 1000);
            }, duration);
        });
    }
    
    // Function to show memory with index
    function showMemory(index, duration) {
        return new Promise((resolve) => {
            const memory = document.getElementById(`memory${index}`);
            
            // First ensure the element is reset and ready
            memory.style.opacity = '0';
            memory.style.display = 'block';
            
            // Force a reflow to ensure the initial state is applied
            void memory.offsetHeight;
            
            // Start fade in
            memory.style.transition = 'opacity 1.5s ease-in-out';
            memory.style.opacity = '1';
            
            setTimeout(() => {
                // Start fade out
                memory.style.opacity = '0';
                
                // After fade out completes, hide the element
                setTimeout(() => {
                    memory.style.display = 'none';
                    memory.style.transition = 'none'; // Reset transition for next time
                    resolve();
                }, 1500); // Match this with the transition duration
            }, duration);
        });
    }
    
    // Start button click handler
    startButton.addEventListener('click', async (e) => {
        console.log('Click event fired!', e);
        
        try {
            // Disable start button
            startButton.style.pointerEvents = 'none';
            
            // Fade out start button
            startContainer.style.opacity = '0';
            startContainer.style.transform = 'scale(0.9)';
            
            // Start playing music
            try {
                await bgMusic.play();
            } catch (e) {
                console.log('Audio play failed:', e);
            }
            
            // Show birthday text
            await showText('Happy Birthday, Ali!', 5000);
            await showText('Our memories will be presented here shortly..', 3000);
            
            // Add a small delay before showing first memory
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show all memories with fade transitions (4 seconds each)
            await showMemory(1, 4000);
            await showMemory(2, 4000);
            await showMemory(3, 4000);
            await showMemory(4, 4000);
            await showMemory(5, 4000);
            await showMemory(6, 4000);
            await showMemory(7, 4000);
            await showMemory(8, 4000);
            await showMemory(9, 4000);
            await showMemory(10, 4000);
            
            // After all memories, show final messages
            await showText("You're now 16 years old, and more to come!", 4000);
            await showText("I hope this letter that I made, gets to you well.", 4000);
            
            // Fade out the last message
            birthdayText.style.opacity = '0';
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show the frame with final message
            const messageFrame = document.getElementById('messageFrame');
            const messageContainer = document.querySelector('.message-frame-container');
            const today = new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });

            const finalMessage = `
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="font-size: 1.8em; color: #9c64ff; margin-bottom: 10px; font-family: 'Dancing Script', cursive;">To My Dearest Ali,</div>
                    <div style="font-size: 1em; color: #888; margin-bottom: 20px; font-family: 'Dancing Script', cursive;">${today}</div>
                    <div style="height: 2px; background: linear-gradient(90deg, transparent, #e0b4ff, transparent); margin: 20px 0;"></div>
                </div>
                
                <p>HAPPPYYYYY HAPPYYYY BIRTHDAAYYYYY ALIIIIIIII!! i hope u enjoy ur birthdayy and sana maging sofer sofer happyyy kaaaa! I pray that you win in life, achieve all your dreams and get everyting you want.</p>
                
                <p>I want to see u at the top, becoming the person you've always wanted to be. I'll support you so loudly and proudly that you won't hear the voices of those who doubted u.</p>
                
                <p>Just know that i'm here for u, and i believe in u with all my heart. I know hindi na tayo nakakapag usap these past few weeks, but i just want to say I really really miss you so much. I really wanted to chat u pero im happy kasi nakikita ko na masaya ka with ur friends. I hope mapag usapan natin yung dapat pag usapan peroo now wag mo muna isipin lahat and mag enjoyy kaa.</p>
                
                <p>Thank you for always bringing out the best in me, thank you for not giving up on me. IM ALWAYS PROUD OF YOU PRETTYYYYY! I love you so much. You deserve everything in this world, I can't thank you enough for making me feel love even in my weakest moments.</p>
                
                <p>These are just words but these words are what I truly feel and what I would do in this relationship. God is the center of our relationship and he is always there to strengthen us. I'm forever grateful and blessed to have met someone like you.</p>
                
                <div style="text-align: right; margin-top: 50px;">
                    <div>With all my love,</div>
                    <div style="font-size: 1.5em; color: #9c64ff; margin-top: 10px;">Josh</div>
                    <div style="font-size: 0.8em; color: #999; margin-bottom: 30px;">Happy birthday bebe ku! ❤️</div>
                    
                    <button id="proceedButton" style="
                        background: #9c64ff;
                        color: white;
                        border: none;
                        padding: 12px 25px;
                        font-size: 1.1em;
                        border-radius: 25px;
                        cursor: pointer;
                        margin-top: 20px;
                        font-family: 'Dancing Script', cursive;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 15px rgba(156, 100, 255, 0.3);
                    ">Proceed to next</button>
                </div>
            `;
            
            // Set the final message with HTML
            messageFrame.innerHTML = finalMessage;
            
            // Make container visible and animate frame in
            messageContainer.style.display = 'flex';
            messageContainer.style.pointerEvents = 'auto';
            messageFrame.style.opacity = '1';
            messageFrame.style.transform = 'scale(1)';
            
            // Force a reflow to ensure styles are applied
            void messageFrame.offsetHeight;
            
            // Set focus and ensure it's scrollable
            messageFrame.setAttribute('tabindex', '0');
            messageFrame.focus({preventScroll: true});
            
            // Ensure the frame is in the viewport
            messageFrame.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Add a subtle heartbeat effect to the frame
            const heartbeatInterval = setInterval(() => {
                messageFrame.style.boxShadow = `0 0 20px ${Math.random() > 0.5 ? 'rgba(255, 192, 203, 0.7)' : 'rgba(147, 112, 219, 0.7)'}`;
            }, 1000);
            
            // Handle proceed button click
            document.getElementById('proceedButton').addEventListener('click', async () => {
                // Fade out the message frame
                messageFrame.style.opacity = '0';
                messageFrame.style.transform = 'scale(0.95)';
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Clear the interval and hide the message container
                clearInterval(heartbeatInterval);
                messageContainer.style.display = 'none';
                
                // Create and show the video element
                const video = document.createElement('video');
                video.src = 'img/4.mp4';
                video.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    max-width: 90%;
                    max-height: 90vh;
                    border-radius: 20px;
                    z-index: 9999;
                    opacity: 0;
                    transition: opacity 1s ease-in-out;
                `;
                document.body.appendChild(video);
                
                // Fade in the video
                await new Promise(resolve => setTimeout(resolve, 100));
                video.style.opacity = '1';
                
                // Play the video
                video.controls = false;
                video.play();
                
                // When video ends
                video.onended = async () => {
                    // Fade out the video
                    video.style.opacity = '0';
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    video.remove();
                    
                    // Create container for final message
                    const finalContainer = document.createElement('div');
                    finalContainer.style.cssText = `
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        text-align: center;
                        z-index: 10000;
                    `;
                    
                    // Create final text
                    const finalText = document.createElement('div');
                    finalText.textContent = 'I MISS YOU SO BAD;(';
                    finalText.style.cssText = `
                        font-size: 3em;
                        color: #ff6b9e;
                        margin-bottom: 20px;
                        opacity: 0;
                        font-family: 'Dancing Script', cursive;
                        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                        transition: opacity 1s ease-in-out;
                    `;
                    
                    // Create home link
                    const homeLink = document.createElement('a');
                    homeLink.href = '#';
                    homeLink.textContent = 'Click me to go back to home page';
                    homeLink.style.cssText = `
                        display: inline-block;
                        color: #9c64ff;
                        text-decoration: none;
                        font-size: 1.2em;
                        opacity: 0;
                        transition: all 0.3s ease;
                        font-family: 'Dancing Script', cursive;
                        border-bottom: 1px solid #9c64ff;
                        padding-bottom: 2px;
                    `;
                    
                    // Add hover effect
                    homeLink.onmouseover = () => {
                        homeLink.style.color = '#ff6b9e';
                        homeLink.style.borderBottomColor = '#ff6b9e';
                    };
                    homeLink.onmouseout = () => {
                        homeLink.style.color = '#9c64ff';
                        homeLink.style.borderBottomColor = '#9c64ff';
                    };
                    
                    // Handle home link click
                    homeLink.onclick = (e) => {
                        e.preventDefault();
                        window.location.reload();
                    };
                    
                    // Add elements to container and then to body
                    finalContainer.appendChild(finalText);
                    finalContainer.appendChild(document.createElement('br'));
                    finalContainer.appendChild(homeLink);
                    document.body.appendChild(finalContainer);
                    
                    // Fade in the text and link
                    await new Promise(resolve => setTimeout(resolve, 100));
                    finalText.style.opacity = '1';
                    await new Promise(resolve => setTimeout(resolve, 500));
                    homeLink.style.opacity = '1';
                };
            });
            
        } catch (e) {
            console.error('Error in birthday sequence:', e);
            // Show error message
            await showText("Something went wrong, but I still love you!", 4000);
        }
    });
    
    // Show bubble immediately when page loads
    showSpeechBubble();
    
    // Then show every 10 seconds (5s hidden + 5s visible)
    setInterval(showSpeechBubble, 10000);
    
    // Create snowflakes
    function createSnowflakes() {
        const snowflakesCount = 50;
        
        for (let i = 0; i < snowflakesCount; i++) {
            const snowflake = document.createElement('div');
            const size = Math.random() * 10 + 5; // Random size between 5 and 15px
            const duration = Math.random() * 10 + 5; // Random duration between 5 and 15s
            const delay = Math.random() * 10; // Random delay up to 10s
            const left = Math.random() * 100; // Random horizontal position
            
            snowflake.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: white;
                border-radius: 50%;
                opacity: ${Math.random() * 0.7 + 0.3};
                left: ${left}%;
                top: -20px;
                pointer-events: none;
                animation: fall ${duration}s linear ${delay}s infinite;
            `;
            
            snowflakesContainer.appendChild(snowflake);
        }
    }

    // Initialize snowflakes
    createSnowflakes();

    // Handle window resize
    window.addEventListener('resize', () => {
        // You can add responsive adjustments here if needed
    });
});
