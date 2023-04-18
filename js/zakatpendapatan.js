function calculateZakat() {
    // Get input value from user
    let grossIncome = parseFloat(document.getElementById("gross-income").value);

    // Check if the income exceeds the minimum threshold
    if (grossIncome <= 11504.75) {
      // If income is less than or equal to the threshold, display a message and exit
      document.getElementById("result").innerHTML = "Tidak memenuhi syarat untuk membayar zakat.";
    } else {
      // Calculate income zakat
      let incomeZakat = grossIncome * 0.025;
      // Display income zakat need to pay
      document.getElementById("result").innerHTML = "Jumlah zakat pendapatan yang perlu dibayar (setahun): RM" + incomeZakat.toFixed(2);
    }
}

function calculateZakat1() {
  // get input values
  let grossIncome = document.getElementById("gross_income").value;
  let selfExpense = document.getElementById("self_expense").value;
  let wifeExpense = document.getElementById("wife_expense").value;
  let childBelow18Expense = document.getElementById("child_below18_expense").value;
  let childAbove18Expense = document.getElementById("child_above18_expense").value;
  let parentsExpense = document.getElementById("parents_expense").value;
  let selfEducationExpense = document.getElementById("self_education_expense").value;

  // calculate total expense
  let totalExpense = parseInt(selfExpense) + parseInt(wifeExpense) + parseInt(childBelow18Expense) + parseInt(childAbove18Expense) + parseInt(parentsExpense) + parseInt(selfEducationExpense);

  // calculate net income
  let netIncome = parseInt(grossIncome) - (parseInt(grossIncome) * 0.11) - parseInt(totalExpense);

  // calculate zakat
  let zakat = netIncome * 0.025;

  // display result
  let resultDiv = document.getElementById("result1");
  if (parseInt(netIncome) <= 11504.75) {
    resultDiv.innerHTML = "Tidak memenuhi syarat untuk membayar zakat.";
  } else {
    resultDiv.innerHTML = "Jumlah zakat pendapatan yang perlu dibayar (setahun): RM" + zakat.toFixed(2);
  }
}

function calculateZakat2() {
  // get input values
  let grossIncome = document.getElementById("gross_income2").value;
  let selfExpense = document.getElementById("self_expense2").value;
  let wifeExpense = document.getElementById("wife_expense2").value;
  let childBelow18Expense = document.getElementById("child_below18_expense2").value;
  let childAbove18Expense = document.getElementById("child_above18_expense2").value;
  let parentsExpense = document.getElementById("parents_expense2").value;
  let selfEducationExpense = document.getElementById("self_education_expense2").value;

  // calculate total expense
  let totalExpense = parseInt(selfExpense) + parseInt(wifeExpense) + parseInt(childBelow18Expense) + parseInt(childAbove18Expense) + parseInt(parentsExpense) + parseInt(selfEducationExpense);

  // calculate net income
  let netIncome = parseInt(grossIncome) - parseInt(totalExpense);

  // calculate zakat
  let zakat = netIncome * 0.025;

  // display result
  let resultDiv = document.getElementById("result2");
  if (parseInt(netIncome) <= 11504.75) {
    resultDiv.innerHTML = "Tidak memenuhi syarat untuk membayar zakat.";
  } else {
    resultDiv.innerHTML = "Jumlah zakat pendapatan yang perlu dibayar (setahun): RM" + zakat.toFixed(2);
  }
}

