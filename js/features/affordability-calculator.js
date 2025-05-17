/**
 * Affordability Calculator Component
 * This script initializes and manages the EMI calculator functionality
 */

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  initializeAffordabilityCalculator();
});

function initializeAffordabilityCalculator() {
  const calculator = document.querySelector('.affordability-calculator');
  if (!calculator) {
    console.error('Affordability calculator not found in the DOM');
    return;
  }
  
  // Get input elements
  const propertyPriceInput = document.getElementById('property-price');
  const downPaymentInput = document.getElementById('down-payment');
  const loanTermInput = document.getElementById('loan-term');
  const interestRateInput = document.getElementById('interest-rate');
  
  // Get output display elements
  const propertyPriceOutput = document.querySelector('[data-output="property-price"]');
  const downPaymentOutput = document.querySelector('[data-output="down-payment"]');
  const loanTermOutput = document.querySelector('[data-output="loan-term"]');
  const interestRateOutput = document.querySelector('[data-output="interest-rate"]');
  
  const monthlyEMIOutput = document.querySelector('[data-output="monthly-emi"]');
  const totalInterestOutput = document.querySelector('[data-output="total-interest"]');
  const totalAmountOutput = document.querySelector('[data-output="total-amount"]');
  
  // Get chart canvas
  const chartCanvas = document.getElementById('calculator-chart');
  let chart;
  
  // Check if all required elements exist
  if (!propertyPriceInput || !downPaymentInput || !loanTermInput || !interestRateInput) {
    console.error('One or more input elements are missing');
    return;
  }
  
  if (!propertyPriceOutput || !downPaymentOutput || !loanTermOutput || !interestRateOutput) {
    console.error('One or more output elements are missing');
    return;
  }
  
  if (!monthlyEMIOutput || !totalInterestOutput || !totalAmountOutput) {
    console.error('One or more result elements are missing');
    return;
  }
  
  // Initialize chart if canvas exists and Chart.js is loaded
  if (chartCanvas && typeof Chart !== 'undefined') {
    initializeChart();
  } else if (!chartCanvas) {
    console.error('Chart canvas element not found');
  } else {
    console.error('Chart.js is not loaded');
  }
  
  // Set up input event listeners
  propertyPriceInput.addEventListener('input', updateCalculator);
  downPaymentInput.addEventListener('input', updateCalculator);
  loanTermInput.addEventListener('input', updateCalculator);
  interestRateInput.addEventListener('input', updateCalculator);
  
  // Set initial display values
  propertyPriceOutput.textContent = formatCurrency(propertyPriceInput.value);
  downPaymentOutput.textContent = `${downPaymentInput.value}%`;
  loanTermOutput.textContent = `${loanTermInput.value} Years`;
  interestRateOutput.textContent = `${interestRateInput.value}%`;
  
  // Initial calculation
  updateCalculator();
  
  /**
   * Updates calculator results based on current input values
   */
  function updateCalculator() {
    // Get values from inputs
    const propertyPrice = parseFloat(propertyPriceInput.value);
    const downPaymentPercent = parseFloat(downPaymentInput.value);
    const loanTerm = parseFloat(loanTermInput.value);
    const interestRate = parseFloat(interestRateInput.value);
    
    // Update outputs
    propertyPriceOutput.textContent = formatCurrency(propertyPrice);
    downPaymentOutput.textContent = `${downPaymentPercent}%`;
    loanTermOutput.textContent = `${loanTerm} Years`;
    interestRateOutput.textContent = `${interestRate}%`;
    
    // Calculate loan amount
    const downPaymentAmount = propertyPrice * (downPaymentPercent / 100);
    const loanAmount = propertyPrice - downPaymentAmount;
    
    // Calculate EMI
    // Formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
    // Where P = Loan amount, R = Monthly interest rate, N = Number of monthly installments
    
    const monthlyInterestRate = (interestRate / 12) / 100;
    const numberOfPayments = loanTerm * 12;
    
    let emi = 0;
    
    // Handle edge case where interest rate is 0 or very small
    if (monthlyInterestRate > 0) {
      emi = loanAmount * monthlyInterestRate * 
             Math.pow(1 + monthlyInterestRate, numberOfPayments) / 
             (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    } else {
      emi = loanAmount / numberOfPayments;
    }
    
    const totalAmount = emi * numberOfPayments;
    const totalInterest = totalAmount - loanAmount;
    
    // Update result outputs
    monthlyEMIOutput.textContent = formatCurrency(emi);
    totalInterestOutput.textContent = formatCurrency(totalInterest);
    totalAmountOutput.textContent = formatCurrency(totalAmount);
    
    // Update chart if exists
    if (chart) {
      updateChart(loanAmount, totalInterest);
    }
  }
  
  /**
   * Initializes the doughnut chart
   */
  function initializeChart() {
    const ctx = chartCanvas.getContext('2d');
    
    // Get initial values
    const propertyPrice = parseFloat(propertyPriceInput.value);
    const downPaymentPercent = parseFloat(downPaymentInput.value);
    const downPaymentAmount = propertyPrice * (downPaymentPercent / 100);
    const loanAmount = propertyPrice - downPaymentAmount;
    
    const loanTerm = parseFloat(loanTermInput.value);
    const interestRate = parseFloat(interestRateInput.value);
    
    const monthlyInterestRate = (interestRate / 12) / 100;
    const numberOfPayments = loanTerm * 12;
    
    let emi = 0;
    
    // Handle edge case where interest rate is 0
    if (monthlyInterestRate > 0) {
      emi = loanAmount * monthlyInterestRate * 
             Math.pow(1 + monthlyInterestRate, numberOfPayments) / 
             (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    } else {
      emi = loanAmount / numberOfPayments;
    }
    
    const totalAmount = emi * numberOfPayments;
    const totalInterest = totalAmount - loanAmount;
    
    // Create chart
    chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Principal', 'Interest'],
        datasets: [{
          data: [loanAmount, totalInterest],
          backgroundColor: [
            '#3f51b5', // Primary color
            '#ff4081'  // Secondary color
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.label || '';
                if (label) {
                  label += ': ';
                }
                label += formatCurrency(context.raw);
                return label;
              }
            }
          }
        }
      }
    });
  }
  
  /**
   * Updates chart data with new values
   */
  function updateChart(principal, interest) {
    if (!chart) return;
    
    chart.data.datasets[0].data = [principal, interest];
    chart.update();
  }
  
  /**
   * Formats number as Indian currency
   */
  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }
}