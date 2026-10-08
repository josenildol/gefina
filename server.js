import express from 'express';



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

const app = express();

app.get('/api/health', (request, response) => {
    response.status(200).json({ success: {
    status: 200,
    message: 'Server is running.'
    }});
});

app.get('/api/invoices', (request, response) => {
    response.status(200).json(invoices);
});

app.get('/api/invoices/:id', (request, response) => {
   const id = Number(request.params.id);  
   
   const invoice = invoices.find(element => element.id === id  );

   if (!invoice) 
    return response.status(404).json({ error: {
        status: 404,
        message: 'Invoice not found.'
    }});
   
    response.status(200).json(invoice);
    
});


app.use((request, response) => {
    response.status(404).json({ error: {
        status: 404,
        message: 'Resource not found.'
    }});
});

app.listen(3000);