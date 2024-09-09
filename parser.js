function(obj,parse) { 
  console.log("Hola desde github!");
  return createInvoiceIntegration({integrationId:  Math.ceil(Math.random()*999999999).toString() }); 
}
