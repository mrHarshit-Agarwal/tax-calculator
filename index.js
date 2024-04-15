

// Function to calculate tax
function calculateTax(grossIncome,extraIncome,deductions,age) {
    // Get input values
    // const grossIncome = parseFloat(document.getElementById('grossIncome').value);
    // const extraIncome = parseFloat(document.getElementById('extraIncome').value);
    // const deductions = parseFloat(document.getElementById('deductions').value);
    // const age = document.getElementById('age').value;

    // Check for errors
    let isError = false;
    if (isNaN(grossIncome) || isNaN(extraIncome) || isNaN(deductions)) {
        isError = true;
    }
    // Check if age is selected
    if (age === '') {
        document.getElementById('ageErrorIcon').style.display = 'inline-block';
        isError = true;
    } else {
        document.getElementById('ageErrorIcon').style.display = 'none';
    }

    // Display error icon if any error
    if (isError) return;

    // Calculate overall income
    const overallIncome = grossIncome + extraIncome - deductions;

    // Calculate tax
    var tax = 0;
    if (overallIncome > 800000) {
        if (age === '1') {
            tax=0.3* (overallIncome-800000);
        } else if (age === '2') {
            tax=0.4* (overallIncome-800000);
        } else if (age === '3') {
            tax=0.1* (overallIncome-800000);
        }
        console.log(tax);
        // document.getElementById('modalContent').innerHTML = "Your tax is: $" + tax.toFixed(2);
        return tax;
    }
}

var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the submit button, open the modal
    document.getElementById("taxForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        console.log("Thanks for submitting");
        const grossIncome = parseFloat(document.getElementById('grossIncome').value);
        const extraIncome = parseFloat(document.getElementById('extraIncome').value);
        const deductions = parseFloat(document.getElementById('deductions').value);
        const age = document.getElementById('age').value;
        let tax=calculateTax(grossIncome,extraIncome,deductions,age);
        console.log(tax)
        modal.style.display = "block"; // Display the modal
        document.getElementById('modalContent').innerHTML = "Your tax is: $" + tax.toFixed(2);
        

    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Display modal with final values
//     const form = document.getElementById("myForm");
//     const message = document.getElementById("message");
//     let messageIndex = 0;
//     const messages = [
//       "Thank you for submitting the form!",
//     ];
    
//     form.addEventListener("submit", (event) => {
//       event.preventDefault();
//       console.log("hello hello");
//       messageIndex = (messageIndex + 1) % messages.length;
//       message.textContent = messages[messageIndex];
//       tax=calculateTax();
    
//       messageBox.style.display = "block";
//     });;
    
    
//     // When the user clicks on the close button, close the modal
//     const close = document.getElementsByClassName("close")[0];
//     close.addEventListener("click", () => {
//       modal.style.display = "none";
//     });
    
//     // When the user clicks anywhere outside of the modal, close it
//     window.addEventListener("click", (event) => {
//       if (event.target == 'modal') {
//         modal.style.display = "none";
//       }
//     });

// //     document.getElementById('modalContent').innerHTML = `Overall Income: ${overallIncome.toFixed(2)}<br>Tax: ${tax.toFixed(2)}`;
// //     document.getElementById('myModal').style.display = 'block';
// // }

// // // Function to close modal
// // function closeModal() {
// //     document.getElementById('myModal').style.display = 'none';
// // }

// // // Close modal when clicking outside of it
// // window.onclick = function(event) {
// //     const modal = document.getElementById('myModal');
// //     if (event.target == modal) {
// //         modal.style.display = 'none';
// //     }
//  }

