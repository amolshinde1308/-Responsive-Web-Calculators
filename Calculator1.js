$(document).ready(function () {
    let expression = "";

    // Function to update the display
    function updateDisplay() {
        $("#inputBox").val(expression || "0");
    }

    // Append value to the expression
    $(".btn").on("click", function () {
        const value = $(this).data("value");

        if (value !== undefined) {
            expression += value;
            updateDisplay();
        }
    });

    // Clear the input
    $("#clear").on("click", function () {
        expression = "";
        updateDisplay();
    });

    // Delete last character
    $("#delete").on("click", function () {
        expression = expression.slice(0, -1);
        updateDisplay();
    });

    // Evaluate the expression
    $("#equals").on("click", function () {
        try {
            expression = eval(expression).toString();
            updateDisplay();
        } catch (error) {
            expression = "Error";
            updateDisplay();
            setTimeout(() => {
                expression = "";
                updateDisplay();
            }, 1500);
        }
    });
});