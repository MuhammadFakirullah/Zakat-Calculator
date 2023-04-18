//zakat wang simpanan
//1. simpanan tetap
function calculate4() {
    var savingsAmount = document.getElementById("savingsAmount").value;
    var startDate = new Date(document.getElementById("startDate").value);
    var currentDate = new Date();
  
    var oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    var diffDays = Math.round(Math.abs((currentDate - startDate) / oneDay)); // Difference in days
    var diffYears = Math.floor(diffDays / 365); // Difference in years
  
    if (savingsAmount >= 11504.75 && diffYears >= 1) { // Eligible for Zakat
      var zakatAmount = (savingsAmount * 2.5) / 100;
      document.getElementById("output4").innerHTML = "Jumlah zakat perniagaan yang perlu dibayar: RM " + zakatAmount.toFixed(2);
    } else { // Not eligible for Zakat
      document.getElementById("output4").innerHTML = "Tidak memenuhi syarat untuk membayar zakat.";
    }
  }
  
  //2. simpanan tidak tetap
  let records = [];
  
  // Function to add a new record to the array
  function addRecord() {
    let depositDate = document.getElementById("depositDate").value;
    let withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    let entryAmount = parseFloat(document.getElementById("entryAmount").value);
    let lastRecordBalance = records.length > 0 ? records[records.length - 1].balance : 0;
    let balance = lastRecordBalance + entryAmount - withdrawAmount;
  
    // Check if the balance is eligible for zakat payment
    if (balance < 11504.75) {
      alert("Tidak memenuhi syarat untuk membayar zakat.");
      return;
    }
  
    // Add a new record to the array
    records.push({ depositDate, withdrawAmount, entryAmount, balance });
  
    // Clear the form inputs
    document.getElementById("depositDate").value = "";
    document.getElementById("withdrawAmount").value = "";
    document.getElementById("entryAmount").value = "";
  
    // Display the records to the user
    let recordsHTML = "";
    for (let record of records) {
      recordsHTML += `
        <p>Tarikh deposit: ${record.depositDate}</p>
        <p>Jumlah yang dideposit: RM${record.entryAmount.toFixed(2)}</p>
        <p>Jumlah Pengeluaran: RM${record.withdrawAmount.toFixed(2)}</p>
        <p>Baki dalam akaun: RM${record.balance.toFixed(2)}</p>
        <hr>
      `;
    }
    document.getElementById("records").innerHTML = recordsHTML;
  }
  
  // Function to calculate the zakat amount
  function calculateZakat5() {
    // Check if there are any records
    if (records.length === 0) {
      alert("Sila isikan sekurang-kurangnya satu(1) rekod.");
      return;
    }
  
    // Calculate the zakat amount based on the lowest balance
    let lowestBalance = Infinity;
    for (let record of records) {
      if (record.balance < lowestBalance) {
        lowestBalance = record.balance;
      }
    }
    let zakatAmount = lowestBalance * 0.025;
  
    // Display the zakat amount to the user
    document.getElementById("zakatAmount").innerHTML = `
      <p>Jumlah zakat simpanan yang perlu dibayar: RM${zakatAmount.toFixed(2)}</p>
    `;
  }
  