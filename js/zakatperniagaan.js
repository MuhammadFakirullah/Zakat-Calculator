//zakat perniagaan

function calculateZakat3() {
    // Get the values of the input fields
    let grossIncome = parseFloat(document.getElementById("grossIncome").value);
    let costCapital = parseFloat(document.getElementById("costCapital").value);
  
    // Calculate the net profit per year
    let netProfit = grossIncome - costCapital;
  
    // Check if net profit is greater than or equal to RM11504.75
    if (netProfit >= 11504.75) {
      // Calculate the zakat need to pay
      let zakat = netProfit * 0.025; // 2.5% Zakat rate
  
      // Display the zakat need to pay
      document.getElementById("result3").innerHTML = `<p>Jumlah zakat perniagaan yang perlu dibayar (setahun): RM ${zakat.toFixed(2)}.</p>`;
    } else {
      // Display not eligible message
      document.getElementById("result3").innerHTML = "<p>Tidak memenuhi syarat untuk membayar zakat.</p>";
    }
  }