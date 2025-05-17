// Affordability Calculator Component

export function initializeAffordabilityCalculator() {
  const calculator = document.querySelector('.affordability-calculator');
  if (!calculator) return;
  
  const propertyPriceInput = document.getElementById('property-price');
  const downPaymentInput = document.getElementById('down-payment');
  const loanTermInput = document.getElementById('loan-term');
  const interestRateInput = document.getElementById('interest-rate');
  
  const propertyPriceOutput = document.querySelector('[data-output="property-price"]');
  const downPaymentOutput = document.querySelector('[data-output="down-payment"]');
  const loanTermOutput = document.querySelector('[data-output="loan-term"]');
  const interestRateOutput = document.querySelector('[data-output="interest-rate"]');
  
  const monthlyEMIOutput = document.querySelector('[data-output="monthly-emi"]');
  const totalInterestOutput = document.querySelector('[data-output="total-interest"]');
  const totalAmountOutput = document.querySelector('[data-output="total-amount"]');
  
  const chartCanvas = document.getElementById('calculator-chart');
  let chart;
  
  // Initialize chart if canvas exists
  if (chartCanvas) {
    initializeChart();
  }
  
  // Set up input event listeners
  if (propertyPriceInput) {
    propertyPriceInput.addEventListener('input', updateCalculator);
    propertyPriceOutput.textContent = formatCurrency(propertyPriceInput.value);
  }
  
  if (downPaymentInput) {
    downPaymentInput.addEventListener('input', updateCalculator);
    downPaymentOutput.textContent = `${downPaymentInput.value}%`;
  }
  
  if (loanTermInput) {
    loanTermInput.addEventListener('input', updateCalculator);
    loanTermOutput.textContent = `${loanTermInput.value} Years`;
  }
  
  if (interestRateInput) {
    interestRateInput.addEventListener('input', updateCalculator);
    interestRateOutput.textContent = `${interestRateInput.value}%`;
  }
  
  // Initial calculation
  updateCalculator();
  
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
    
    const emi = loanAmount * monthlyInterestRate * 
               Math.pow(1 + monthlyInterestRate, numberOfPayments) / 
               (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    
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
    
    const emi = loanAmount * monthlyInterestRate * 
               Math.pow(1 + monthlyInterestRate, numberOfPayments) / 
               (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    
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
  
  function updateChart(principal, interest) {
    chart.data.datasets[0].data = [principal, interest];
    chart.update();
  }
  
  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }
}