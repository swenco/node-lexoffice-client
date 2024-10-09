import { ArticleClient } from './api/articleClient.js';
import { CountryClient } from './api/countryClient.js';
import { ContactClient } from './api/contactClient.js';
import { CreditNoteClient } from './api/creditNoteClient.js';
import { DeliveryNoteClient } from './api/deliveryNoteClient.js';
import { DunningClient } from './api/dunningClient.js';
import { DownPaymentInvoiceClient } from './api/downPaymentInvoiceClient.js';
import { EventSubscriptionClient } from './api/eventSubscriptionClient.js';
import { FileClient } from './api/fileClient.js';
import { InvoiceClient } from './api/invoiceClient.js';
import { OrderConfirmationClient } from './api/orderConfirmationClient.js';
import { PaymentClient } from './api/paymentClient.js';
import { PaymentConditionsClient } from './api/paymentConditionClient.js';
import { PostingCategoryClient } from './api/postingCategoryClient.js';
import { PrintLayoutClient } from './api/printLayoutClient.js';
import { ProfileClient } from './api/profileClient.js';
import { QuotationClient } from './api/quotationClient.js';
import { RecurringTemplateClient } from './api/recurringTemplateClient.js';
import { VoucherClient } from './api/voucherClient.js';
import { VoucherListClient } from './api/voucherListClient.js';

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

export { LexOfficeClient };
export default LexOfficeClient;
export * from './errors.js';
