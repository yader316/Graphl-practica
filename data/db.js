import  mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/cliente', {useNewUrlParser: true, useUnifiedTopology: true } );

//Definir el schema de cliente

const clienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    emails: Array,
    edad: Number,
    tipo: String,
    pedidos: Array
});

const Clientes = mongoose.model('clientes', clienteSchema);

export { Clientes };
