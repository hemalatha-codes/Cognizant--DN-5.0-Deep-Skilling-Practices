public class FinancialForecast {
    public static double calculateFutureValue(double presentValue, double growthRate, int years) {
        // 1. The Base Case: If years reach 0, stop recursion and return the initial value.
        if (years <= 0) {
            return presentValue;
        }
        
        // 2. The Recursive Call: Calculate the value for the previous year, then apply this year's growth.
        // FV = FV(years - 1) * (1 + rate)
        return calculateFutureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        System.out.println("--- Financial Forecasting Tool ---");

        double initialInvestment = 1000.0; // Starting with $1000
        double annualGrowthRate = 0.05;    // 5% growth rate
        int forecastYears = 10;            // Predicting 10 years into the future

        System.out.println("Present Value: $" + initialInvestment);
        System.out.println("Expected Annual Growth Rate: " + (annualGrowthRate * 100) + "%");
        System.out.println("Forecasting " + forecastYears + " years into the future...\n");

        double futureValue = calculateFutureValue(initialInvestment, annualGrowthRate, forecastYears);

        // Formatting the output to 2 decimal places for currency
        System.out.printf("Projected Future Value: $%.2f%n", futureValue);
    }
}