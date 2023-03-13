import { EmailValidatorAdapter, EmailValidatorAdapterFn } from './validation/email-validator-adapter';
import { emailValidatorAdapterFn } from './validation/email-validator-adapter-fn';
import { EmailValidatorProtocol } from './validation/email-validator-protocol';

function validateEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
  if (emailValidator.isEmail(email)) {
    console.log('Valid!');
  } else {
    console.log('Invalid!');
  }
}

function validateEmailFn(emailValidator: EmailValidatorAdapterFn, email: string): void {
  if (emailValidator(email)) {
    console.log('Valid!');
  } else {
    console.log('Invalid!');
  }
}

const email = 'luiz@email.com';

validateEmailClass(new EmailValidatorAdapter(), 'luiz@email.com');
validateEmailFn(emailValidatorAdapterFn, email);
