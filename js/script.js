const calculateMonthlyInstallment = () => {
  // Getting values from form
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const loanInterest = parseFloat(document.getElementById('loanInterest').value);
  const loanYears = parseFloat(document.getElementById('loanYears').value);

  // Checking if all fields are valid numbers
  if (isNaN(loanAmount) || isNaN(loanInterest) || isNaN(loanYears)) {
    document.getElementById('monthlyInstallment').textContent = 'Invalid input';
    return;
  }

  // Convert annual interest rate to monthly interest rate
  const monthlyInterestRate = loanInterest / 100;

  // Calculate total number of months
  const totalMonths = loanYears * 12;
    
  // Calculate monthly installment using the provided formula
  const firstcal = (loanAmount * monthlyInterestRate * loanYears) + loanAmount;
  const monthlyInstallment = firstcal / totalMonths;

  // Displaying result with exact precision
  document.getElementById('monthlyInstallment').textContent = '$' + monthlyInstallment.toFixed(2);
};

// Adding event listener to form submission
document.getElementById('car-loan-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Preventing default form submission
  calculateMonthlyInstallment(); // Calculate and display monthly installment
});
