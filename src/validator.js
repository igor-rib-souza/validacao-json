import { DateTime } from 'luxon';

class Validator {
  validateName(name) {
    return typeof name === 'string' && name.length >= 5 && name.length <= 60;
  }

  validateCPF(cpf) {
    return typeof cpf === 'string' && /^\d{11}$/.test(cpf);
  }

  validateDOB(dob) {
    const dobDateTime = DateTime.fromFormat(dob, "ddMMyyyy");
    const minAgeDateTime = DateTime.local().minus({ years: 18 });

    return dobDateTime.isValid && dobDateTime <= minAgeDateTime;
  }

  validateIncome(income) {
    if (income) {
      return !isNaN(parseFloat(income)) && parseFloat(income) >= 0;
    }
    return true;
  }

  validateMaritalStatus(status) {
    if (status) {
      return ['C', 'S', 'V', 'D'].includes(status.toUpperCase());
    }
    return true;
  }
}

export default Validator;

