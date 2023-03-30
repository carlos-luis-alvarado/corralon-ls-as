
const {Schema,model} = require('mongoose');

const ProductoSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    precio_venta: {
        type:Number,
        default:0
    },
    // precio_compra:{
    //     type:Number,
    // },
    marca:{
        type:String,
        required:[true,'La marca es obligatoria']
    },
    descripcion:{type:String},
    img:{type:String}
});

module.exports = model('Producto',ProductoSchema)