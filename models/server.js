const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config')
class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            home:'/corralon-los-alisos',
            productos:'/corralon-los-alisos/productos'
        }
        //conect db
        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares() {

        //cors
        this.app.use(cors());
        //motor de plantillas ejs
        this.app.set('view engine', 'ejs');
        //this.app.set('views','');
        this.app.use(express.urlencoded({extended:false}))
        //Lectura y parseo del body
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));

        //carga de archivos - file uploads
        // Note that this option available for versions 1.0.0 and newer. 
        // this.app.use(fileUpload({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/',
        //     createParentPath:true
        // }));
    }
    routes(){
        this.app.use(this.paths.home,require('../routes/home')),
        this.app.use(this.paths.productos,require('../routes/productos'))
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidro corriendo en ${this.port}`);
        })
    }

}

module.exports = Server;