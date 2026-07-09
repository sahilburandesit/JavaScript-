// ==========================================
// 1. SCOPE DEMONSTRATION (var vs let vs const)
// ==========================================
const TAX_RATE = 0.15; // Global constant (cannot be reassigned)

function demonstrateScope() {
    if (true) {
        var legacyVar = "I escape the block!"; // Function-scoped
        let modernLet = "I am trapped in this block."; // Block-scoped
        console.log(`[Inside Block] var: ${legacyVar}`);
    }
    console.log(`[Outside Block] var still works: ${legacyVar}`);
    // console.log(modernLet); // ❌ Throws ReferenceError because let is block-scoped
}
demonstrateScope();

// ==========================================
// 2. BILLING CALCULATOR CORE LOGIC
// ==========================================
function calculateBill() {
    // Read input elements (using let since their assignments change per calculation)
    let rawPrice = parseFloat(document.getElementById("price-input").value);
    let quantity = parseInt(document.getElementById("qty-input").value);

    // Form calculations
    let subtotal = rawPrice * quantity;
    let taxAmount = subtotal * TAX_RATE;
    let finalTotal = subtotal + taxAmount;

    // Create a transaction summary object
    const orderSummary = {
        itemsCount: quantity,
        costBeforeTax: subtotal,
        calculatedTax: taxAmount,
        grandTotal: finalTotal
    };

    // Execute and display
    displayReceipt(orderSummary);
}

// ==========================================
// 3. DESTRUCTURING & TEMPLATE LITERALS
// ==========================================
function displayReceipt(summaryObj) {
    // OBJECT DESTRUCTURING: Unpack properties directly into clean variable names
    const { itemsCount, costBeforeTax, calculatedTax, grandTotal } = summaryObj;

    const receiptBox = document.getElementById("receipt-box");
    receiptBox.style.display = "block";

    // TEMPLATE LITERALS: Multi-line strings injecting data natively using ${}
    receiptBox.innerHTML = `
        <h3>🧾 Receipt Summary</h3>
        <p><strong>Total Items:</strong> ${itemsCount} units</p>
        <p><strong>Subtotal:</strong> $${costBeforeTax.toFixed(2)}</p>
        <p><strong>Tax ( ${(TAX_RATE * 100)}% ):</strong> $${calculatedTax.toFixed(2)}</p>
        <hr style="border: 0; border-top: 1px dashed #ccc;">
        <p style="font-size: 18px; color: #e74c3c;"><strong>Grand Total: $${grandTotal.toFixed(2)}</strong></p>
    `;

    // Log the visual breakdown using our earlier console tool
    console.clear();
    console.log("--- New Bill Generated ---");
    console.table(summaryObj);
}
