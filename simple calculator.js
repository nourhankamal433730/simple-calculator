document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const numOneInput = document.getElementById('num1');
    const numTwoInput = document.getElementById('num2');
    const resultText = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const numOneVal = Number(numOneInput.value);
        const numTwoVal = Number(numTwoInput.value);

        if (!isNaN(numOneVal) && !isNaN(numTwoVal)) {
            const btnClicked = e.submitter.id;

            switch (btnClicked) {
                case 'btn-add':
                    resultText.innerText = `Result = ${numOneVal + numTwoVal}`;
                    break;
                case 'btn-sub':
                    resultText.innerText = `Result = ${numOneVal - numTwoVal}`;
                    break;
                case 'btn-mult':
                    resultText.innerText = `Result = ${numOneVal * numTwoVal}`;
                    break;
                case 'btn-div':
                    if (numTwoVal !== 0) {
                        resultText.innerText = `Result = ${numOneVal / numTwoVal}`;
                    } else {
                        resultText.innerText = "Cannot divide by zero";
                    }
                    break;
            }
        } else {
            resultText.innerText = "Please enter valid numbers";
        }
    });
});
















































/*const form = document.getElementById('form');
const numOneInput = document.getElementById('num1');
const numTwoInput = document.getElementById('num2');
const resultText = document.getElementById('result');

// form event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // we can convert the strings into numbers using the Number() function
    const numOneVal = Number(numOneInput.value); 
    const numTwoVal = Number(numTwoInput.value);
    
    console.log(`numOneVal is of type: ${typeof numOneVal}, with a value of ${numOneVal}`);
    console.log(`numTwoVal is of type: ${typeof numTwoVal}, with a value of ${numTwoVal}`);
    // now the numbers add up correctly
    resultText.innerText = `${numOneVal} + ${numTwoVal} = ${numOneVal + numTwoVal}`;
})

form.subEventListener('submit' , function(e) {
    e.preventDefault();
    const numOneval = Number(numOneInput.value);
    const numTwoVal = Number(numTwoInput.value);

    console.log(`numOneVal is of type: ${typeof numOneval}, with a value of ${numOneVal}`);
    console.log(`numTowVal is of type: ${typeof numTwoVal}, with a value of ${numTwoVal}`);

    resultText.innerText= `${numOneval} - ${numTwoVal} = ${numOneval - numTwoVal}`;
})*/
