export type InvoicesStatus = 'paid' | 'pending';

interface Customer{
    id: number;
    namw: string;
    email: string;
}


export interface Invoice {
  id: number;
  amount: number;
  status: InvoicesStatus;
  issueDate: string;
  dueDate: string;
  customer: Customer;
  };
