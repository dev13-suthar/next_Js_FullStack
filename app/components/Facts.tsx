import React from 'react'

const Tip = [
    "Budgeting: Creating and sticking to a budget is the foundation of effective financial management.",
    "Emergency Fund: Aim to save 3-6 months' worth of living expenses in an easily accessible emergency fund.",
    "Debt Management: Prioritize paying off high-interest debt to save money on interest over time.",
    "Credit Score: Regularly monitor your credit score and report to ensure accuracy and maintain a healthy score.",
    "Investing Early: Start investing early to take advantage of compound interest, which can significantly grow your wealth over time.",
    "Diversification: Diversify your investments to spread risk and improve potential returns.",
    "Retirement Savings: Contribute regularly to retirement accounts, such as a 401(k) or IRA, to secure your financial future.",
    "Financial Goals: Set specific, measurable, achievable, relevant, and time-bound (SMART) financial goals.",
    "Expense Tracking: Keep track of your expenses to identify spending patterns and areas where you can save.",
    "Automatic Savings: Automate your savings to ensure consistent contributions towards your financial goals.",
    "Insurance: Protect yourself and your assets with appropriate insurance coverage (health, life, disability, etc.).",
    "Tax Planning: Understand tax implications of your financial decisions and seek ways to minimize your tax burden legally.",
    "Emergency Fund Accessibility: Keep your emergency fund in a high-yield savings account for easy access and better returns.",
    "Credit Utilization: Keep your credit utilization ratio below 30% to maintain a good credit score.",
    "Financial Education: Continuously educate yourself about personal finance to make informed decisions.",
    "Expense Reduction: Regularly review and reduce unnecessary expenses to improve your savings rate.",
    "Net Worth Tracking: Monitor your net worth over time to gauge your financial progress.",
    "Interest Rates: Compare interest rates on savings accounts, loans, and credit cards to get the best deals.",
    "Long-term Planning: Plan for long-term financial goals like buying a house, children's education, and retirement.",
    "Professional Advice: Consider consulting a financial advisor for personalized advice and strategies tailored to your situation."
]

function getRandom(max:number){
    return Math.floor(Math.random()*max)+1;
}
  

const Facts = () => {
  return (
    <div className='mt-14 p-1'>
        <p className='text-xl'>Tip:</p>
        <p className='font-light text-yellow-200 mt-2 text-2xl'>
            {Tip[getRandom(Tip.length-1)]}
        </p>
    </div>
  )
}

export default Facts