Calculator - This is my solution to the Calculator project for The Odin Project's Foundations course. I built this entirely with Vanilla JavaScript, HTML, and CSS to practice complex state management, handling edge cases, and advanced DOM manipulation. It was a highly rewarding project because it forced me to think deeply about how to handle continuous user inputs, debug complex logic, and build a clean, modern UI from scratch.

How It Works:

The calculator handles basic math operations and supports continuous evaluation (like 5 + 5 + 5). I structured the logic using if/else conditions. When an operator is clicked, the code checks if a second number is already present. If it is, it evaluates the first expression, assigns that result as the new first number, clears out the second number, and updates the operator variable to the newly clicked one.

Users can interact with the calculator via mouse clicks or by typing on their keyboard. I implemented full keyboard support by attaching a global keydown event listener that correctly maps keys (including Enter, Backspace, and Escape) to the calculator's logic.

I also included two different ways to clear data. The AC (All Clear) button completely wipes the memory and clears the display. For smaller mistakes, I programmed the C button to work like a Backspace. It uses the JavaScript .slice() method to remove just the last character typed.

Takeaways:

One of the most interesting bugs I encountered was related to handling decimals. Initially, if a user typed 5, then +, and then ., the display would incorrectly go backwards and change the first number to 5. instead of starting the second number as 0.. I realized my if statements were just checking if a firstNumber existed, which wasn't enough. I fixed this by refactoring the logic to check if (!operatorChosen) first. This acted as a strict gatekeeper—if an operator was already selected, the code knew to securely route the decimal point to the secondNumber.

Initially, I was attaching an individual event listener to every single keypad button. I quickly realized this violated the "Don't Repeat Yourself" coding rule, so I Googled a better approach and learned how to iterate through a NodeList using .forEach() and extract the value using e.target.textContent. This made my code cleaner. However, I learned another hard lesson about DRY later on. Because I didn't read the final assignment requirements before coding, I left my logic in the open. When it came time to add keyboard support at the very end, I realized I should have wrapped that logic in reusable named functions so both the mouse and keyboard could share the exact same code. While completely rewriting the file to refactor this is a bit too much work for now, it was a massive lesson, always read the full project scope before starting, and encapsulate logic in functions for easier reuse and debugging.

I spent extra time making the UI feel good, using a semi-transparent  effect and shadows. However, my biggest design lesson came from the button interactions. Initially, I added a scale(1.1) hover effect to the keypad, but realized it caused the buttons to pop out and overlap in the tight grid. I learned that for a realistic calculator, buttons shouldn't pop up on hover they should push down on click. I refactored the CSS to use transform: scale(0.95).

Getting the keypad buttons to align perfectly was tough. For a while, my "big buttons" (AC and =) weren't aligning properly with the standard-sized buttons below them. I had to research Flexbox sizing (flex: 1 vs flex: 2) and gap properties to finally get the desing i want.

Before coding, I researched how physical calculators handle edge cases like dividing by 0 or typing a number that is way too long for the screen. Since I decided to allow long numbers for now, I ran into an issue where the digits would push outside the display. I solved this by applying word-break: break-all in my CSS so the text wraps neatly inside the container.

During this project, I experienced my very first Git crash! It was a scary moment, but I was extremely relieved that I had recently pushed my code to GitHub. I was able to simply clone my repository back down and keep working. It was a massive lesson in why frequent commits are so important.