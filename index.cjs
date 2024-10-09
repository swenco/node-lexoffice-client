'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Axios = require('axios');
var uri = require('encodeuricomponent-tag');

class Client {
  
  constructor(apiKey) {
    this.axios = Axios.create({
      baseURL: 'https://api.lexoffice.io/v1',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }
}

function isAxiosError(error) {
	return typeof (error).isAxiosError !== 'undefined' && (error).isAxiosError;
}

function isLexofficeLegacyError(error) {
	return error.response && error.response.data.IssueList;
}


function handleRequestError(error) {
	if (isAxiosError(error) && isLexofficeLegacyError(error)) {
	  const statusText = error.response.statusText;
	  const status = error.response.status;
	  const issueList = error.response.data.IssueList;
	  switch (status) {
		case 400:
		  return new RequestBadRequestLegacyError(statusText, issueList);
		case 406:
		  return new RequestMethodNotAcceptableLegacyError(statusText, issueList);
		case 500:
		  return new RequestInternalServerLegacyError(statusText, issueList);
		default:
		  return new RequestLexofficeLegacyError(statusText, status, issueList);
	  }
	} else if (isAxiosError(error) && error.response) {
	  const status = error.response.status;
	  const timestamp = error.response.data.timestamp
		? new Date(error.response.data.timestamp)
		: undefined;
	  const errorDescription = error.response.data.error;
	  const path = error.response.data.path;
	  const traceId = error.response.data.traceId;
	  const messageOrig = error.response.data.message;
	  const message =
		messageOrig ??
		'No further error informations provided by the API for this status code on this specific endpoint.';
	  const errorDetails = error.response.data.details;
  
	  switch (status) {
		case 400:
		  return new RequestBadRequestError(
			message,
			messageOrig,
			errorDescription,
			traceId,
			timestamp,
			path,
			errorDetails,
		  );
		case 401:
		  return new RequestUnauthorizedError(
			message,
			messageOrig,
			errorDescription,
			traceId,
			timestamp,
			path,
			errorDetails,
		  );
		case 402:
		  return new RequestPaymentRequiredError(
			message,
			messageOrig,
			errorDescription,
			traceId,
			timestamp,
			path,
			errorDetails,
		  );
		case 403:
		  return new RequestForbiddenError(
			message,
			messageOrig,
			errorDescription,
			traceId,
			timestamp,
			path,
			errorDetails,
		  );
		case 404:
		  return new RequestNotFoundError(
			message,
			messageOrig,
			errorDescription,
			traceId,
			timestamp,
			path,
			errorDetails,
		  );
		case 405:
		  return new RequestMethodNotAllowedError(
			message,
			messageOrig,
			errorDescription,
			traceId,
			timestamp,
			path,
			errorDetails,
		  );
		case 406:
		  return new RequestMethodNotAcceptableError(
			message,
			messageOrig,
			errorDescription,
			traceId,
			timestamp,
			path,
			errorDetails,
		  );
		case 409:
		  return new RequestConflictError(
			message,
			messageOrig,
			errorDescription,
			traceId,
			timestamp,
			path,
			errorDetails,
		  );
		case 415:
		  return new RequestUnsupportedMediaTypeError(
			message,
			messageOrig,
			errorDescription,
			traceId,
			timestamp,
			path,
			errorDetails,
		  );
		case 429:
		  return new RequestTooManyRequestsError(
			message,
			messageOrig,
			errorDescription,
			traceId,
			timestamp,
			path,
			errorDetails,
		  );
		case 500:
		  return new RequestInternalServerError(
			message,
			messageOrig,
			errorDescription,
			traceId,
			timestamp,
			path,
			errorDetails,
		  );
		case 503:
		  return new RequestServiceUnavailableError(
			message,
			messageOrig,
			errorDescription,
			traceId,
			timestamp,
			path,
			errorDetails,
		  );
		case 504:
		  return new RequestGatewayTimeoutError(
			message,
			messageOrig,
			errorDescription,
			traceId,
			timestamp,
			path,
			errorDetails,
		  );
		default:
		  return new RequestError(
			message,
			messageOrig,
			status,
			errorDescription,
			traceId,
			timestamp,
			path,
			errorDetails,
		  );
	  }
	}
  
	return new RequestError('Unknown Request Error');
  }


  class RequestError extends Error {
  
	constructor(
	  message,
	  messageOrig,
	  status,
	  errorDescription,
	  traceId,
	  timestamp,
	  path,
	  errorDetails,
	) {
	  super('[LexOfficeClient Error] ' + message);
	  this.messageOrig = messageOrig;
	  this.status = status;
	  this.error = errorDescription;
	  this.traceId = traceId;
	  this.timestamp = timestamp;
	  this.path = path;
	  this.details = errorDetails;
	}
  }
  
  class RequestLexofficeError extends RequestError {

  }
  
  class RequestLexofficeLegacyError extends RequestError {
	constructor(statusText, status, issueList) {
	  super('Legacy: ' + statusText, undefined, status);
	  this.issueList = issueList;
	}
  }
  
  // Regular Errors
  class RequestBadRequestError extends RequestLexofficeError {
	constructor(
	  message,
	  messageOrig,
	  errorDescription,
	  traceId,
	  timestamp,
	  path,
	  errorDetails,
	) {
	  super(message, messageOrig, 400, errorDescription, traceId, timestamp, path, errorDetails);
	}
  }
  
  class RequestUnauthorizedError extends RequestLexofficeError {
	constructor(
	  message,
	  messageOrig,
	  errorDescription,
	  traceId,
	  timestamp,
	  path,
	  errorDetails,
	) {
	  super(message, messageOrig, 401, errorDescription, traceId, timestamp, path, errorDetails);
	}
  }
  
  class RequestPaymentRequiredError extends RequestLexofficeError {
	constructor(
	  message,
	  messageOrig,
	  errorDescription,
	  traceId,
	  timestamp,
	  path,
	  errorDetails,
	) {
	  super(message, messageOrig, 402, errorDescription, traceId, timestamp, path, errorDetails);
	}
  }
  
  class RequestForbiddenError extends RequestLexofficeError {
	constructor(
	  message,
	  messageOrig,
	  errorDescription,
	  traceId,
	  timestamp,
	  path,
	  errorDetails,
	) {
	  super(message, messageOrig, 403, errorDescription, traceId, timestamp, path, errorDetails);
	}
  }
  
  class RequestNotFoundError extends RequestLexofficeError {
	constructor(
	  message,
	  messageOrig,
	  errorDescription,
	  traceId,
	  timestamp,
	  path,
	  errorDetails,
	) {
	  super(message, messageOrig, 404, errorDescription, traceId, timestamp, path, errorDetails);
	}
  }
  
  class RequestMethodNotAllowedError extends RequestLexofficeError {
	constructor(
	  message,
	  messageOrig,
	  errorDescription,
	  traceId,
	  timestamp,
	  path,
	  errorDetails,
	) {
	  super(message, messageOrig, 405, errorDescription, traceId, timestamp, path, errorDetails);
	}
  }
  
  class RequestMethodNotAcceptableError extends RequestLexofficeError {
	constructor(
	  message,
	  messageOrig,
	  errorDescription,
	  traceId,
	  timestamp,
	  path,
	  errorDetails,
	) {
	  super(message, messageOrig, 406, errorDescription, traceId, timestamp, path, errorDetails);
	}
  }
  
  class RequestConflictError extends RequestLexofficeError {
	constructor(
	  message,
	  messageOrig,
	  errorDescription,
	  traceId,
	  timestamp,
	  path,
	  errorDetails,
	) {
	  super(message, messageOrig, 409, errorDescription, traceId, timestamp, path, errorDetails);
	}
  }
  class RequestUnsupportedMediaTypeError extends RequestLexofficeError {
	constructor(
	  message,
	  messageOrig,
	  errorDescription,
	  traceId,
	  timestamp,
	  path,
	  errorDetails,
	) {
	  super(message, messageOrig, 415, errorDescription, traceId, timestamp, path, errorDetails);
	}
  }
  
  class RequestTooManyRequestsError extends RequestLexofficeError {
	constructor(
	  message,
	  messageOrig,
	  errorDescription,
	  traceId,
	  timestamp,
	  path,
	  errorDetails,
	) {
	  super(message, messageOrig, 429, errorDescription, traceId, timestamp, path, errorDetails);
	}
  }
  
  class RequestInternalServerError extends RequestLexofficeError {
	constructor(
	  message,
	  messageOrig,
	  errorDescription,
	  traceId,
	  timestamp,
	  path,
	  errorDetails,
	) {
	  super(message, messageOrig, 500, errorDescription, traceId, timestamp, path, errorDetails);
	}
  }
  class RequestServiceUnavailableError extends RequestLexofficeError {
	constructor(
	  message,
	  messageOrig,
	  errorDescription,
	  traceId,
	  timestamp,
	  path,
	  errorDetails,
	) {
	  super(message, messageOrig, 503, errorDescription, traceId, timestamp, path, errorDetails);
	}
  }
  class RequestGatewayTimeoutError extends RequestLexofficeError {
	constructor(
	  message,
	  messageOrig,
	  errorDescription,
	  traceId,
	  timestamp,
	  path,
	  errorDetails,
	) {
	  super(message, messageOrig, 504, errorDescription, traceId, timestamp, path, errorDetails);
	}
  }
  // Legacy errors
  class RequestBadRequestLegacyError extends RequestLexofficeLegacyError {
	constructor(statusText, issueList) {
	  super(statusText, 400, issueList);
	}
  }
  class RequestMethodNotAcceptableLegacyError extends RequestLexofficeLegacyError {
	constructor(statusText, issueList) {
	  super(statusText, 406, issueList);
	}
  }
  class RequestInternalServerLegacyError extends RequestLexofficeLegacyError {
	constructor(statusText, issueList) {
	  super(statusText, 500, issueList);
	}
  }

class ArticleClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/articles/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(article) {

		return this.axios
			.post(uri`/articles`, article)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async update(id, article) {

		return this.axios
			.put(uri`/articles/${id}`, article)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async filter(filter) {

		return this.axios
			.get(uri`/articles`, { params: filter })
			.then((res) => {
				return (res.data)
			}
			)
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class CountryClient extends Client {

	async list() {

		return this.axios
			.get(`/countries`)
			.then((result) => {
				return (result.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class ContactClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/contacts/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(contact) {

		return this.axios
			.post(uri`/contacts`, contact)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async update(id, contact) {

		return this.axios
			.put(uri`/contacts/${id}`, contact)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async filter(filter) {

		return this.axios
			.get(uri`/contacts`, { params: filter })
			.then((res) => {
				return (res.data)
			}
			)
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class CreditNoteClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/credit-notes/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(creditNote, optionalFinalized) {

		return this.axios
			.post('/credit-notes', creditNote, { params: optionalFinalized })
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async render(id) {

		return this.axios
			.get(uri`/credit-notes/${id}/document`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class DeliveryNoteClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/delivery-notes/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(deliveryNote) {

		return this.axios
			.post('/delivery-notes', deliveryNote)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async render(id) {

		return this.axios
			.get(uri`/delivery-notes/${id}/document`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class DunningClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/dunnings/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(dunning, optionalPrecedingSalesVoucherId) {

		return this.axios
			.post('/dunnings', dunning, { params: optionalPrecedingSalesVoucherId })
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async render(id) {

		return this.axios
			.get(uri`/dunnings/${id}/document`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class DownPaymentInvoiceClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/down-payment-invoices/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class EventSubscriptionClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/event-subscriptions/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(eventSubscription) {

		return this.axios
			.post('/event-subscriptions', eventSubscription)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async delete(id) {

		return this.axios
			.delete(uri`/event-subscriptions/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async list() {

		return this.axios
			.get(`/event-subscriptions`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class FileClient extends Client {

	async download(documentFileId, optionalParameter) {

		return this.axios
			.get(uri`/files/${documentFileId}`, {
				headers: {
					Accept: '*/*',
				},
				params: optionalParameter,
				responseType: 'arraybuffer',
			})
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async upload(data) {

		return this.axios
			.post('/files', data, {
				headers: {
					...data.getHeaders(),
				},
			})
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class InvoiceClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/invoices/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(invoice, optionalFinalized) {

		return this.axios
			.post('/invoices', invoice, { params: optionalFinalized })
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async render(id) {

		return this.axios
			.get(uri`/invoices/${id}/document`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class OrderConfirmationClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/order-confirmations/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(orderConfirmation) {

		return this.axios
			.post('/order-confirmations', orderConfirmation)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async render(id) {

		return this.axios
			.get(uri`/order-confirmations/${id}/document`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class PaymentClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/payments/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class PaymentConditionsClient extends Client {

	async list() {

		return this.axios
			.get(`/payment-conditions`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class PostingCategoryClient extends Client {

	async list() {

		return this.axios
			.get(`/posting-categories`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class PrintLayoutClient extends Client {

	async list() {

		return this.axios
			.get(`/print-layouts`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class ProfileClient extends Client {

	async get() {

		return this.axios
			.get(`/profile`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class QuotationClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/quotations/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(quotation, optionalFinalized) {

		return this.axios
			.post('/quotations', quotation, { params: optionalFinalized })
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async render(id) {

		return this.axios
			.get(uri`/quotations/${id}/document`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class RecurringTemplateClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/recurring-templates/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async list(optionalFilter) {

		return this.axios
			.get(uri`/recurring-templates`, { params: optionalFilter })
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}
}

class VoucherClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/vouchers/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(voucher) {

		return this.axios
			.post('/vouchers', voucher)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async update(id, voucher) {

		return this.axios
			.put(uri`/vouchers/${id}`, voucher)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async filter(voucherNumber) {

		return this.axios
			.get(`/vouchers`, { params: voucherNumber })
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async uploadFile(data, id) {

		return this.axios
			.post(uri`/vouchers/${id}/files`, data, {
				headers: {
				...data.getHeaders(),
				},
			})
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class VoucherListClient extends Client {

	async filter(filterParameter) {

		return this.axios
			.get(`/voucherlist`, { params: filterParameter })
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

class LexOfficeClient {

	#ArticleClient;
	#CountryClient;
	#ContactClient;
	#CreditNoteClient;
	#DeliveryNoteClient;
	#DunningClient;
	#DownPaymentInvoiceClient;
	#EventSubscriptionClient;
	#FileClient;
	#InvoiceClient;
	#OrderConfirmationClient;
	#PaymentClient;
	#PaymentConditionsClient;
	#PostingCategoryClient;
	#PrintLayoutClient;
	#ProfileClient;
	#QuotationClient;
	#RecurringTemplateClient;
	#VoucherClient;
	#VoucherListClient;

	constructor(lexApiKey) {

		this.#ArticleClient = new ArticleClient(lexApiKey);
		this.#CountryClient = new CountryClient(lexApiKey);
		this.#ContactClient = new ContactClient(lexApiKey);
		this.#CreditNoteClient = new CreditNoteClient(lexApiKey);
		this.#DeliveryNoteClient = new DeliveryNoteClient(lexApiKey);
		this.#DunningClient = new DunningClient(lexApiKey);
		this.#DownPaymentInvoiceClient = new DownPaymentInvoiceClient(lexApiKey);
		this.#EventSubscriptionClient = new EventSubscriptionClient(lexApiKey);
		this.#FileClient = new FileClient(lexApiKey);
		this.#InvoiceClient = new InvoiceClient(lexApiKey);
		this.#OrderConfirmationClient = new OrderConfirmationClient(lexApiKey);
		this.#PaymentClient = new PaymentClient(lexApiKey);
		this.#PaymentConditionsClient = new PaymentConditionsClient(lexApiKey);
		this.#PostingCategoryClient = new PostingCategoryClient(lexApiKey);
		this.#PrintLayoutClient = new PrintLayoutClient(lexApiKey);
		this.#ProfileClient = new ProfileClient(lexApiKey);
		this.#QuotationClient = new QuotationClient(lexApiKey);
		this.#RecurringTemplateClient = new RecurringTemplateClient(lexApiKey);
		this.#VoucherClient = new VoucherClient(lexApiKey);
		this.#VoucherListClient = new VoucherListClient(lexApiKey);

	}

	get articles () {
		return this.#ArticleClient;
	}

	get countries () {
		return this.#CountryClient;
	}

	get contacts () {
		return this.#ContactClient;
	}

	get creditNotes () {
		return this.#CreditNoteClient;
	}

	get deliveryNotes () {
		return this.#DeliveryNoteClient;
	}

	get dunnings () {
		return this.#DunningClient;
	}

	get downPaymentInvoices () {
		return this.#DownPaymentInvoiceClient;
	}

	get eventSubscriptions () {
		return this.#EventSubscriptionClient;
	}
	
	get files () {
		return this.#FileClient;
	}

	get invoices () {
		return this.#InvoiceClient;
	}

	get orderConfirmations () {
		return this.#OrderConfirmationClient;
	}

	get payments () {
		return this.#PaymentClient;
	}

	get paymentConditions () {
		return this.#PaymentConditionsClient;
	}

	get postingCategories () {
		return this.#PostingCategoryClient;
	}

	get printLayouts () {
		return this.#PrintLayoutClient;
	}

	get profile () {
		return this.#ProfileClient;
	}

	get quotations () {
		return this.#QuotationClient;
	}

	get recurringTemplates () {
		return this.#RecurringTemplateClient;
	}

	get vouchers () {
		return this.#VoucherClient;
	}

	get voucherlist () {
		return this.#VoucherListClient;
	}

}

exports.LexOfficeClient = LexOfficeClient;
exports.RequestBadRequestError = RequestBadRequestError;
exports.RequestBadRequestLegacyError = RequestBadRequestLegacyError;
exports.RequestConflictError = RequestConflictError;
exports.RequestError = RequestError;
exports.RequestForbiddenError = RequestForbiddenError;
exports.RequestGatewayTimeoutError = RequestGatewayTimeoutError;
exports.RequestInternalServerError = RequestInternalServerError;
exports.RequestInternalServerLegacyError = RequestInternalServerLegacyError;
exports.RequestMethodNotAcceptableError = RequestMethodNotAcceptableError;
exports.RequestMethodNotAcceptableLegacyError = RequestMethodNotAcceptableLegacyError;
exports.RequestMethodNotAllowedError = RequestMethodNotAllowedError;
exports.RequestNotFoundError = RequestNotFoundError;
exports.RequestPaymentRequiredError = RequestPaymentRequiredError;
exports.RequestServiceUnavailableError = RequestServiceUnavailableError;
exports.RequestTooManyRequestsError = RequestTooManyRequestsError;
exports.RequestUnauthorizedError = RequestUnauthorizedError;
exports.RequestUnsupportedMediaTypeError = RequestUnsupportedMediaTypeError;
exports.default = LexOfficeClient;
exports.handleRequestError = handleRequestError;
