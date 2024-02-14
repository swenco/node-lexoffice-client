import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for a file with an id.
 ****************************************/

lexOffice.files.download('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((file) => {
		console.log(file);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Upload data for a file with an id.
 ****************************************/

const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

const form = new FormData();

form.append('file', fs.createReadStream(path.join(__dirname, 'filename.pdf')));
form.append('type', 'voucher');

lexOffice.files.upload(form)
	.then((file) => {
		console.log(file);
	})
	.catch((err) => {
		console.error(err);
	});