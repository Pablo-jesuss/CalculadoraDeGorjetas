function calculateTip(event) {
  event.preventDefault();
  let bill = document.getElementById('billInput').value;
  let serviceQual = document.getElementById('serviceQualSelect').value;
  let numOfPeople = document.getElementById('peopleInput').value;

  if (bill == '' || serviceQual == 0) {
    alert("Por favor, preencha os valores");
    return;
  }

  if (numOfPeople == "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById('each').style.display = "none";
  } else {
    document.getElementById('each').style.display = "block";
  }

  let total = (bill * serviceQual) / numOfPeople;
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('totalTip').style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('totalTip').style.display = "none";
  document.getElementById('each').style.display = "none";
  document.getElementById('tipsForm').addEventListener('submit', calculateTip);
  });