import { Router } from 'express';
import { findAllInvoices, findInvoicesById } from './invoice.services.ts';

const router = Router();

//localhost:3000/api/invoices

router.get('/', (_request, response) => {
  const invoices = findAllInvoices();

 // setTimeout(() => {
   response.status(200).json(invoices); 
 // }, 3000);
  
});

router.get('/:id', (request, response) => {
  const id = Number(request.params.id);

  const invoice = findInvoicesById(id);

  if (!invoice)
    response.status(404).json({
      error: {
        status: 404,
        message: 'Invoice not found.'
      }
    });

  response.status(200).json(invoice);
});

export default router;
