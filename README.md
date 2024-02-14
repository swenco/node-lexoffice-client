# JS client library for lexoffice public API.

# Installation
```
npm i node-lexoffice-client
```

# Usage

## Import as ES6 Module

```javascript
import { LexOfficeClient } from 'node-lexoffice-client'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

lexOffice.invoices.get('53b8d208-76d9-4f23-bfda-ce340af8a3b3')
.then((invoice) =>{
	console.log(JSON.stringify(invoice));
})
.catch((err) =>{
	console.log(err);
});
```

## Using with CommonJS 

```javascript
const LexOfficeClient = require('node-lexoffice-client).default;

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

lexOffice.invoices.get('53b8d208-76d9-4f23-bfda-ce340af8a3b3')
.then((invoice) =>{
	console.log(JSON.stringify(invoice));
})
.catch((err) =>{
	console.log(err);
});

```

## Using with promises or async/await

```javascript
lexOffice.invoices.get('53b8d208-76d9-4f23-bfda-ce340af8a3b3')
.then((invoice) =>{
	console.log(JSON.stringify(invoice));
})
.catch((err) =>{
	console.log(err);
});
```
```javascript
getInvoice();

async function getInvoice() {
  try {
    const invoice = await invoices.get('53b8d208-76d9-4f23-bfda-ce340af8a3b3');
    console.log(JSON.stringify(invoice));
  } catch (err) {
    console.log(err);
  }
}
```

# Examples
[See examples directory. ](examples)

# API endpoints
Documentation for the public API can be found here: [lexoffice public API documentation](https://developers.lexoffice.io/docs/)


## Contacts 

### Methods overview
```javascript
contacts.get(id)
contacts.add(contact)
contacts.update(id, contact)
contacts.filter({ "email": "mail@domain.com" })
```

## Countries
### Methods overview
```javascript
countries.list()
```

## Credit notes
```javascript
creditNotes.get(id)
creditNotes.add(creditNote, {finalize:true})
creditNotes.render(id)
```

## Delivery notes
```javascript
deliveryNotes.get(id)
deliveryNotes.add(deliveryNote)
deliveryNotes.render(id)
```

## Down payment invoices
```javascript
downPaymentInvoices.get(id)
```

## Dunnings
```javascript
dunnings.get(id)
dunnings.add(dunning)
dunnings.render(id)
```

## Event subscriptions
```javascript
eventSubscriptions.get(id)
eventSubscriptions.add(eventSubscription)
eventSubscriptions.delete(id)
eventSubscriptions.list()
```

## Files
```javascript
files.download(id)
files.upload(form)
```

## Invoices
```javascript
invoices.get()
invoices.add(invoice, {finalize:true})
invoices.render(id)
```

## Payments
```javascript
payments.get(id)
```

## Payment conditions
```javascript
paymentConditions.list()
```

## Profile
```javascript
profile.get()
```

## Quotations
```javascript
quotations.get(id)
quotations.add(quotation, { finalize: true })
quotations.render(id)
```

## Recurring templates
```javascript
recurringTemplates.get(id)
recurringTemplates.list()
```

## Vouchers
```javascript
vouchers.get(id)
vouchers.add(voucher)
vouchers.update(id, voucher)
vouchers.filter({ "voucherNumber": voucherNumber })
vouchers.uploadFile(form, id)
```

## Voucherlist
```javascript
voucherlist.filter({ "voucherType": "invoice" })
```
### Filteroptions:
```
voucherType:       salesinvoice, salescreditnote, purchaseinvoice, purchasecreditnote, invoice, downpaymentinvoice, creditnote, orderconfirmation, quotation, deliverynote
voucherStatus:     open,draft,paid,paidoff,voided
archived:          0
contactId:         97c5794f-8ab2-43ad-b459-c5980b055e4d
voucherDateFrom:   2023-07-01
voucherDateTo:     2023-07-31
createdDateFrom:   2023-07-01
createdDateTo:     2023-07-31
updatedDateFrom:   2023-07-01
updatedDateTo:     2023-07-31
page:              0
size:              250
sort:              updatedDate,DESC
```


# Error handling

```javascript
import { LexOfficeClient, RequestError, RequestNotFoundError, RequestInternalServerError } from 'node-lexoffice-client'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

lexOffice.invoices.get('53b8d208-76d9-4f23-bfda-ce340af8a3b3')
.then((invoice) =>{
	console.log(JSON.stringify(invoice));
})
.catch((err) =>{

  console.log(err);

  if (err instanceof RequestError) {
    console.log('We have a RequestError!');

    if (err instanceof RequestNotFoundError) {
        console.log('404 RequestNotFoundError');
    }

    if (err instanceof RequestInternalServerError) {
      console.log('500 RequestInternalServerError');
    }

  }

});
```

Import all from LexOfficeClient.

```javascript
import * as lexAPI from 'node-lexoffice-client'

const lexOffice = new lexAPI.LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

lexOffice.invoices.get('53b8d208-76d9-4f23-bfda-ce340af8a3b3')
.then((invoice) =>{
	console.log(JSON.stringify(invoice));
})
.catch((err) =>{

  console.log(err);

  if (err instanceof lexAPI.RequestError) {
    console.log('Ooops RequestError!');

    if (err instanceof lexAPI.RequestNotFoundError) {
        console.log('404 RequestNotFoundError');
    }

    if (err instanceof lexAPI.RequestInternalServerError) {
      console.log('500 RequestInternalServerError');
    }

  }

});
```
**HTTP errors**
```
400	RequestBadRequestError	
401	RequestUnauthorizedError	
402	RequestPaymentRequiredError	
403	RequestForbiddenError		
404	RequestNotFoundError		
405	RequestMethodNotAllowedError		
406	RequestMethodNotAcceptableError		
409	RequestConflictError		
415	RequestUnsupportedMediaTypeError		
429	RequestTooManyRequestsError		
```

**Server errors**
```
500	RequestInternalServerError
503	RequestServiceUnavailableError
504	RequestGatewayTimeoutError
```

**Legacy errors (only files, profiles and contacts endpoints)**
```
400	RequestBadRequestLegacyError
406	RequestMethodNotAcceptableLegacyError		
500	RequestInternalServerLegacyError
```






