
// Get Result Display
const result = document.getElementById("MyResult");

// Calculator Function
function calculator(NewValue) {
    result.value += NewValue;
}

// Clear All
function DeleteMe() {
    result.value = "";
}

// Delete Last Character
function DeleteLast() {
    result.value = result.value.slice(0, -1);
}

// Calculate Answer
function answer() {
    let expression = result.value;

    try {
        // Check Empty Input
        if (expression === "") {
            return;
        }

        // Validate Expression
        if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
            throw new Error("Invalid Input");
        }

        // Calculate Result
        let output = Function(
            '"use strict"; return (' + expression + ')'
        )();

        // Check Valid Result
        if (!Number.isFinite(output)) {
            throw new Error("Invalid Calculation");
        }

        result.value = output;

    } catch (error) {
        result.value = "Error";
    }
}
