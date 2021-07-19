import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import TransactionsListView from 'src/views/transactions/TransactionsListView';
import TransferListView from 'src/views/transfers/TransferListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ServiceListView from 'src/views/service/ServiceListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import PaymentsView from 'src/views/payments/PaymentsView';
import TopupsView from 'src/views/topups/TopupsView';
import PayoutsView from 'src/views/payouts/PayoutsView';
import ProductsView from 'src/views/products/ProductsView';
import CustomersView from 'src/views/customers/CustomersView';
import DisputesView from 'src/views/disputes/DisputesView';
import ActivateView from 'src/views/Activate/ ActivateView';
import { BalancesListView } from 'src/views/balances/ BalancesListView';
import AddProduct from 'src/views/products/ProductsView/AddProduct';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'activate', element: <ActivateView /> },
      { path: 'transactions', element: <TransactionsListView /> },
      { path: 'transfers', element: <TransferListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'services', element: <ServiceListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: 'documentation', element: <AccountView /> },
      { path: 'payments', element: <PaymentsView /> },
      { path: 'Balances', element: <BalancesListView /> },
      { path: 'topups', element: <TopupsView /> },
      { path: 'payouts', element: <PayoutsView /> },
      { path: 'disputes', element: <DisputesView /> },
      { path: 'customers', element: <CustomersView /> },
      { path: 'products', element: <ProductsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'product',
    element: <MainLayout />,
    children: [{ path: 'create', element: <AddProduct /> }]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: 'add-product', element: <AddProduct /> }
    ]
  }
];

export default routes;
