import Validator from './validator.js';
import JSONHandler from './jsonHandler.js';

function main() {
    const filepath = process.argv[2];
    const handler = new JSONHandler();
    const validator = new Validator();
  
    try {
      const clients = handler.readJSONFile(filepath);
      const errorReport = [];
  
      clients.forEach(client => {
        const clientErrors = [];
  
        if (!validator.validateName(client.nome)) 
          clientErrors.push({ campo: "nome", mensagem: "Nome inválido" });
  
        if (!validator.validateCPF(client.cpf)) 
          clientErrors.push({ campo: "cpf", mensagem: "CPF inválido" });
  
        if (!validator.validateDOB(client.dt_nascimento)) 
          clientErrors.push({ campo: "dt_nascimento", mensagem: "Data de nascimento inválida" });
  
        if (!validator.validateIncome(client.renda_mensal)) 
          clientErrors.push({ campo: "renda_mensal", mensagem: "Renda mensal inválida" });
  
        if (!validator.validateMaritalStatus(client.estado_civil)) 
          clientErrors.push({ campo: "estado_civil", mensagem: "Estado civil inválido" });
  
        if (clientErrors.length > 0)
          errorReport.push({ dados: client, erros: clientErrors });
      });
  
      const timestamp = DateTime.now().toFormat("ddMMyyyy-HHmmss");
      const errorFilePath = `erros-${timestamp}.json`;
  
      handler.writeJSONFile(errorFilePath, errorReport);
    } catch (err) {
      console.error(err.message);
    }
  }
  
  main();