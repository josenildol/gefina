const invoices = [{
  id: 1,  
  amount: 125039,
  status: 'pending',
  issueDate: '07-10-2026',
  dueDate: '05-11-2026',
  customer: {nome: 'Josenildo Soares', email: 'josenildo.soares@example.com'}
},{ 
    id: 2,
    amount: 1234,
  status: 'paid',
  issueDate: '03-09-2026',
  dueDate: '05-10-2026',
  customer: {nome: 'Grafica Nova', email: 'nova@grafica.com'}

},{ 
    id: 3,
    amount: 1000,
  status: 'paid',
  issueDate: '10-10-2026',
  dueDate: '05-11-2026',
  customer: {nome: 'fitech', email: 'fitech@example.com'}

}]

export function findAllInvoices() {
    return invoices;
}

export function findInvoicesById(id:number) {
    return invoices.find(element => element.id === id ); 
   
}