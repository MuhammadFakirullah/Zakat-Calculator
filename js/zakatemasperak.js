//zakat emas dan perak
//1. zakat emas
function calculateZakat() {
    let weight = document.getElementById("weight").value;
    let state = document.getElementById("state").value;
    let urufWeight = getUrufWeight(state);
  
    if (weight >= urufWeight) {
      let zakat = (weight - urufWeight) * 238.81 * 0.025;
      document.getElementById("result").innerHTML = "You need to pay RM" + zakat.toFixed(2) + " as Zakat.";
    } else {
      document.getElementById("result").innerHTML = "You're not eligible to pay Zakat.";
    }
  }
  
  function getUrufWeight(state) {
    switch(state) {
      case "Selangor":
      case "Kuala Lumpur":
        return 800;
      case "Johor":
      case "Terengganu":
        return 850;
      case "Perak":
      case "Pahang":
        return 500;
      case "Negeri Sembilan":
        return 200;
      case "Melaka":
        return 180;
      case "Kedah":
        return 170;
      case "Perlis":
        return 85;
      case "Penang":
        return 165;
      case "Sabah":
        return 152;
      case "Sarawak":
        return 90;
      default:
        return 0;
    }
  }
  
  //2. emas yang disimpan
  function calculateZakat8() {
    const goldWeight = document.getElementById("goldWeight").value;
    const storedGoldPrice = goldWeight * 238.81;
    const zakatAmount = storedGoldPrice * 0.025;
  
    if (storedGoldPrice <= 11504.75) {
      document.getElementById("zakatAmount").innerHTML = "You're not eligible to pay zakat.";
    } else {
      document.getElementById("zakatAmount").innerHTML = `Zakat amount to pay: RM ${zakatAmount.toFixed(2)}`;
    }
  }
  

//3. emas yang dicagar
function calculateCollateralZakat() {
    const goldWeight = document.getElementById("goldWeightc").value;
    const loanAmount = document.getElementById("loanAmount").value;
    const saveWages = document.getElementById("saveWages").value;
    const collateralGoldPrice = goldWeight * 238.81;
    const add = loanAmount + saveWages;
    const zakatAmount = (collateralGoldPrice - add) * 0.025;
  
    if (collateralGoldPrice <= 11504.75) {
      document.getElementById("zakatAmountCollateral").innerHTML = "You're not eligible to pay zakat.";
    } else {
      document.getElementById("zakatAmountCollateral").innerHTML = `Zakat amount to pay: RM ${zakatAmount.toFixed(2)}`;
    }
  }