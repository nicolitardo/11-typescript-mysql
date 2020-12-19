import router from './router/router';
import Server from './server/server';
import MySQL from './mysql/mysql';

const server = Server.init( 3000 );
server.app.use( router );

// const mysql = new MySQL();
// MySQL.instance;

server.start( () => {
    
    console.log('Servidor corriendo en puerto 3000');

});



