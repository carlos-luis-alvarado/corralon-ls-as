const { response } = require('express');
const Producto = require('../models/producto')

const obtenerProductos = async(req,res=response)=>{
    const productos =await Producto.find({});
    console.log(req.params);
    // res.json(
    //     materiales
    // )
    res.render('../views/pages/index.ejs',{productos})
}

const obtenerProducto = async (req,res=response)=>{
    const {id} = req.params;
    const material = await Producto.findById(id)
    res.json(material)

}
const borrarProducto = async(req,res)=>{
    const producto = await Producto.findByIdAndDelete({_id:req.params.id});
    console.log(producto);

    res.redirect('/corralon-los-alisos/productos/')
}

const nuevoProducto =(req,res=response)=>{
    res.render('../views/pages/crear-producto.ejs');

    // res.json({
    //     msg:'Pagina crear producoto'
    // })
}

const crearProducto = async (req,res=response)=>{
    const body = req.body
    const data = {
        nombre:body.nombre,
        precio_venta:body.precio_venta,
        marca:body.marca,
        descripcion:body.descripcion,
        img:body.img
    }
    const producto = new Producto(data);
    await producto.save();
    res.redirect('/corralon-los-alisos/productos/')
}

const obtenerProductoEditar =async (req,res=response)=>{
    const {id} = req.params;
    const producto = await Producto.findById(id);
    res.render('../views/pages/editar-producto.ejs',{producto});
}

const actualizarProducto = async(req,res=response)=>{
    // console.log(req.body);
    const id = req.body.id;
    await Producto.findOneAndUpdate({_id:id},{
        nombre:req.body.nombre,
        marca:req.body.marca,
        descripcion:req.body.descripcion,
        img:req.body.img,
        precio_venta:req.body.precio_venta,
    });
    // console.log(resto);
    res.redirect('/corralon-los-alisos/productos/')
}

const buscarProductos = async(req,res=response)=>{
    // console.log(req.params);
    console.log(req.query.nombre);
    const nombre = req.query.nombre;
    let re = new RegExp(nombre,'g')
    const productos = await Producto.find({nombre:{$regex:re}});

    res.render('../views/pages/index.ejs',{productos})

}

module.exports = {
    obtenerProductos,
    obtenerProducto,
    nuevoProducto,
    crearProducto,
    borrarProducto,
    obtenerProductoEditar,
    actualizarProducto,
    buscarProductos
}