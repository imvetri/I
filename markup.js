// text
// how to hide an element from DOM -
// 1. remove the markup/ html
// 2. retain DOM - visually hidden - display: none || visibility || opacity

// paint individdual words with unique color ?
// Hello world - VIBGYOR
// Given sentence, paint it with given list of colors and rotate

/* - MARKUP
<p>
<span>H</span>
<span>E</span>
<span>L</span>
<span>.</span>
..
</p>

*/


/* - MARKUP with inline style
<p>
<span style="color:#12321a;">H</span>
<span style="color:#12111a;">E</span>
<span>L</span>
<span>.</span>
..
</p>

*/
/* - MARKUP with inline style
<p>
<span class="redColor">H</span>
<span class="greenColor">E</span>
<span>L</span>
<span>.</span>
..
</p>


*/
// 1 million letters - VIBGYOR
// VIBGYOR


// Given a function that takes word and colors, returns 
// Given a string - Cycle through the colors 

function returnString(word, colors){

    // Return this JSON
    /*
    {
        letter: "",
        color: 
    }
    */

    let currentColor = -1;
    
    
    function renderSpanWithColor(letter){
        currentColor = getNextColor(currentColor);
        return `<span color="${colors[currentColor]}">${letter}</span>`;
    }

    let letters = word.split("") // better techniques are there. Having a working version
    return letters.map(renderSpanWithColor).join("")

}