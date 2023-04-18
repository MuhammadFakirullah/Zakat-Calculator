//zakat KWSP
function calculateKWSPZakat() {
    var fullRights = document.getElementById("fullRights").value;
    var kwspAmount = document.getElementById("kwspAmount").value;
    var withdrawalAmount = document.getElementById("withdrawalAmount").value;
    var zakatAmount;
  
    if (fullRights == "yes") {
      if (kwspAmount > 11504.75) {
        zakatAmount = (kwspAmount * 0.025).toFixed(2);
        document.getElementById("resultkwsp").innerHTML = "Zakat yang perlu dibayar: RM " + zakatAmount;
      } else {
        document.getElementById("resultkwsp").innerHTML = "Tidak memenuhi syarat untuk membayar zakat.";
      }
    } else {
      if (withdrawalAmount > 11504.75) {
        zakatAmount = (withdrawalAmount * 0.025).toFixed(2);
        document.getElementById("resultkwsp").innerHTML = "Zakat yang perlu dibayar: RM " + zakatAmount;
      } else {
        document.getElementById("resultkwsp").innerHTML = "Tidak memenuhi syarat untuk membayar zakat.";
      }
    }
  }