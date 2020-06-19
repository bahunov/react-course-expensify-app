import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage'
import AddExpensePage from '../components/AddExpensePage'
import HelpPage from '../components/HelpPage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import EditExpenseWithId from '../components/EditExpenseWithId'

const AppRouter = () => (
    <BrowserRouter>
    <div>
      <Header/>
        <Switch>
          <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
          <Route path="/create" component={AddExpensePage}/>
          <Route path="/help" component={HelpPage}/>
          <Route path="/edit/:id" component={EditExpenseWithId}/>
          <Route path="/edit" component={EditExpensePage}/>
          <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;