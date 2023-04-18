//zakat pelaburan
//1. kiraan saham yg dimiliki melebihi setahun

function calculateZakat6() {
    // Get the values from the form
    let currentValue = parseFloat(document.getElementById("current-value").value);
    let currentBalance = parseFloat(document.getElementById("current-balance").value);
    let dividend = parseFloat(document.getElementById("dividend").value);
    let relatedCost = parseFloat(document.getElementById("related-cost").value);
  
    // Calculate the zakat amount
    let totalAssets = currentValue + currentBalance + dividend - relatedCost;
    if (totalAssets > 11504.75) {
      let zakat = totalAssets * 0.025;
      document.getElementById("zakat-result").innerHTML = `Jumlah zakat pelaburan yang perlu dibayar: RM${zakat.toFixed(2)}`;
    } else {
      document.getElementById("zakat-result").innerHTML = "Tidak memenuhi syarat untuk membayar zakat.";
    }
  }
  
  //2. Kiraan saham yang dijual beli dalam tempoh setahun
  function calculateZakat7() {
    // Get input values
    let currentValue = parseFloat(document.getElementById("currentValue").value);
    let currentBalance = parseFloat(document.getElementById("currentBalance").value);
    let relatedCost = parseFloat(document.getElementById("relatedCost").value);
  
    // Calculate the zakat amount
    let totalAssets = currentValue + currentBalance - relatedCost;
    if (totalAssets > 11504.75) {
      let zakat = totalAssets * 0.025;
      document.getElementById("result123").innerHTML = `Jumlah zakat pelaburan yang perlu dibayar: RM${zakat.toFixed(2)}`;
    } else {
      document.getElementById("result123").innerHTML = "Tidak memenuhi syarat untuk membayar zakat.";
    }
  }
  