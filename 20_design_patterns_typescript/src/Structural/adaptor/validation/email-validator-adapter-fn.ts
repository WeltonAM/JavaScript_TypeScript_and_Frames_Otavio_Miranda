import isEmail from 'validator/lib/isEmail';
import { EmailValidatorAdapterFn } from './email-validator-adapter';

export const emailValidatorAdapterFn: EmailValidatorAdapterFn = (value: string): boolean => {
  return isEmail(value);
};
