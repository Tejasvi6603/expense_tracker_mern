import React from "react";
import { Container, Row } from "react-bootstrap";
import CircularProgressBar from "../../components/CircularProgressBar";
import LineProgressBar from "../../components/LineProgressBar";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import moment from "moment";

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = ({ transactions }) => {
  const TotalTransactions = transactions.length;
  const totalIncomeTransactions = transactions.filter(
    (item) => item.transactionType === "credit"
  );
  const totalExpenseTransactions = transactions.filter(
    (item) => item.transactionType === "expense"
  );

  const totalIncomePercent = (totalIncomeTransactions.length / TotalTransactions) * 100;
  const totalExpensePercent = (totalExpenseTransactions.length / TotalTransactions) * 100;

  const totalTurnOver = transactions.reduce((acc, t) => acc + t.amount, 0);
  const totalTurnOverIncome = totalIncomeTransactions.reduce((acc, t) => acc + t.amount, 0);
  const totalTurnOverExpense = totalExpenseTransactions.reduce((acc, t) => acc + t.amount, 0);

  const TurnOverIncomePercent = (totalTurnOverIncome / totalTurnOver) * 100;
  const TurnOverExpensePercent = (totalTurnOverExpense / totalTurnOver) * 100;

  const categories = [
    "Groceries", "Rent", "Salary", "Tip", "Food",
    "Medical", "Utilities", "Entertainment", "Transportation", "Other"
  ];

  const colors = {
    Groceries: '#FF6384',
    Rent: '#36A2EB',
    Salary: '#FFCE56',
    Tip: '#4BC0C0',
    Food: '#9966FF',
    Medical: '#FF9F40',
    Utilities: '#8AC926',
    Entertainment: '#6A4C93',
    Transportation: '#1982C4',
    Other: '#F45B69',
  };

  // 📊 Doughnut chart data
  const expenseByCategory = categories.map((category) => {
    return transactions
      .filter(t => t.transactionType === "expense" && t.category === category)
      .reduce((acc, t) => acc + t.amount, 0);
  });

  const chartData = categories.map((category, index) => ({
    category,
    amount: expenseByCategory[index]
  })).filter(item => item.amount > 0);

  const doughnutData = {
    labels: chartData.map(d => d.category),
    datasets: [
      {
        data: chartData.map(d => d.amount),
        backgroundColor: chartData.map(d => colors[d.category])
      }
    ]
  };

  // 💰 Budget Tracker (set manually for now)
  const monthlyBudget = 10000;
  const totalThisMonthExpense = transactions.filter(
    (t) => t.transactionType === "expense" &&
           moment(t.date).isSame(new Date(), "month")
  ).reduce((acc, t) => acc + t.amount, 0);

  const budgetUsed = (totalThisMonthExpense / monthlyBudget) * 100;

  return (
    <Container className="mt-5">
      <Row>

        {/* Card 1: Total Transactions */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header bg-black text-white">
              <strong>Total Transactions:</strong> {TotalTransactions}
            </div>
            <div className="card-body">
              <h5 className="text-success">
                Income: <ArrowDropUpIcon />{totalIncomeTransactions.length}
              </h5>
              <h5 className="text-danger">
                Expense: <ArrowDropDownIcon />{totalExpenseTransactions.length}
              </h5>
              <CircularProgressBar percentage={totalIncomePercent.toFixed(0)} color="green" />
              <div className="mt-4">
                <CircularProgressBar percentage={totalExpensePercent.toFixed(0)} color="red" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Turnover */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header bg-black text-white">
              <strong>Total Turnover:</strong> {totalTurnOver} <CurrencyRupeeIcon />
            </div>
            <div className="card-body">
              <h5 className="text-success">
                Income: <ArrowDropUpIcon />{totalTurnOverIncome}
              </h5>
              <h5 className="text-danger">
                Expense: <ArrowDropDownIcon />{totalTurnOverExpense}
              </h5>
              <CircularProgressBar percentage={TurnOverIncomePercent.toFixed(0)} color="green" />
              <div className="mt-4">
                <CircularProgressBar percentage={TurnOverExpensePercent.toFixed(0)} color="red" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Category-wise Income */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header bg-black text-white">
              <strong>Category-wise Income</strong>
            </div>
            <div className="card-body">
              {categories.map(category => {
                const income = transactions
                  .filter(t => t.transactionType === "credit" && t.category === category)
                  .reduce((acc, t) => acc + t.amount, 0);
                const incomePercent = (income / totalTurnOver) * 100;
                return income > 0 && (
                  <LineProgressBar
                    key={category}
                    label={category}
                    percentage={incomePercent.toFixed(0)}
                    lineColor={colors[category]}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Card 4: Category-wise Expense */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header bg-black text-white">
              <strong>Category-wise Expense</strong>
            </div>
            <div className="card-body">
              {categories.map(category => {
                const expense = transactions
                  .filter(t => t.transactionType === "expense" && t.category === category)
                  .reduce((acc, t) => acc + t.amount, 0);
                const expensePercent = (expense / totalTurnOver) * 100;
                return expense > 0 && (
                  <LineProgressBar
                    key={category}
                    label={category}
                    percentage={expensePercent.toFixed(0)}
                    lineColor={colors[category]}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Card 5: Doughnut Chart */}
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card h-100">
            <div className="card-header bg-black text-white">
              <strong>Expense Breakdown (Chart)</strong>
            </div>
            <div className="card-body">
              <Doughnut data={doughnutData} />
            </div>
          </div>
        </div>

        {/* Card 6: Budget Progress */}
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card h-100">
            <div className="card-header bg-black text-white">
              <strong>Monthly Budget Progress</strong> ({monthlyBudget} ₹)
            </div>
            <div className="card-body">
              <p>You've spent {totalThisMonthExpense} ₹ this month.</p>
              <LineProgressBar
                label="Budget Usage"
                percentage={budgetUsed.toFixed(0)}
                lineColor={budgetUsed > 100 ? "red" : "#007bff"}
              />
              {budgetUsed > 100 && <p className="text-danger mt-2">You have exceeded your budget!</p>}
            </div>
          </div>
        </div>

      </Row>
    </Container>
  );
};

export default Analytics;
