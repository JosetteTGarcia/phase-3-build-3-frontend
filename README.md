## Pay up or Save up (Frontend)

>Your Way Towards Saving More Than Paying 

## App Philosophy

This app is designed to help you take control of your money! We follow the philosophy that your monthly income should be broken down in to 3 categories: Wants, Needs, and Savings. 

- 50% Towards Needs: Shelter, Food, Living Expenses
- 30% Towards Wants: Those items that make you happy but don't keep you alive
- 20% Towards Savings: Save for a goal, emergencies, or even a bigger purchase

Every day that you track your spending, you will begin to be more aware of your habits! This app aims to remove the burden of guessing how much you are saving for the month and stay on track with personal saving goals. 


## Features
- Track income by adding each paycheck to the app
- Track purchases using the form, `Submit Your Payment!`
- As payments and paychecks are added, the app breaks down the percentage of income that went towards needs, wants, or savings
- Add a new category if not available in drop-down, form menu
- Add a new store if not available in drop-down, form menu
- All Payments page lists all payments submitted by User
- Delete Payments
- Edit Payments (amount, date, description only)


## How to Use
1. On initial render, user should submit their estimated monthly income using the `Add Paycheck Here` form
2. As user spends through the month, add payments using the form,`Submit Your Payment!`
  - `Amount` 
  - `Date of Purchase`
  - `Was this purchase a need?`: Check off the box if the purchase was a "Need" (Living expense, Shelter, Food, etc.)
  - `Store`: Select the store the payment was made to
    - Don't see the right store? Add a new one to the drop-down, menu using the form to the left
  - `Category`: Categorize the payment as user decides (ex. Gas, Groceries, Travel)
    - Don't see the right category? Add a new one to the drop-down, menu using the form to the left
  - `Description`: Notes on payment
3. Navigate to `All Payments` page to review all purchases made throughout the month
4. `Delete Payment` to remove a payment from your Payment History
5. `Edit Payment` to edit the following information about a payment
  - Amount
  - Date
  - Description


## Technologies Used

This web app was made using:
Frontend: 
- [Material UI](https://materializecss.com/) 
- React
- Javascript 
- CSS
- Local JSON server

Backend:
 - Ruby 
 - Sinatra Active Record


 For install:

 - Fork and Clone repo
 - For the backend:
  1. Run: bundle exec rake
  2. db:migrate bundle exec 
  3. rake server 
- For frontend:
  1. bundle install 
  2. yarn start

