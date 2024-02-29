let mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost",
    database: "clinica",
    user: "root",
    password: "rootroot"
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Conexion exitosa");
    }
}); 

// const docentes = "SELECT * FROM docente";
// conexion.query(docentes, function(error, lista){
//     if(error){
//         throw error;
//     }else{
//         console.log(lista);
//         //console.log(lista.length);
//         //console.log(lista[0]);
//         console.log(lista[0].id);
//         //console.log(lista[lista.length-1]);
//     }
// });

// const select = "select nombre from docente where id = 1";
// conexion.query(select, function(error, result){
//     if(error){
//         throw error;
//     }else{
//         console.log("---------------------------------------------------");
//         console.log(result);
//     }
// });

//  const nuevoRegistro = "insert into historia values ('HCSM1724569239', 1724569239 ,'2024-02-27' , 'Masculino', 22)"
//     conexion.query(nuevoRegistro, function(error, rows){
//         if(error){
//             throw error;
//         }else{
//             console.log("Registro exitoso");
//         }
//  });

// const update = "update docente set nombre = 'Mateo' where id = 3";
// conexion.query(update, function(error, rows){
//     if(error){
//         throw error;
//     }else{
//         console.log("Actualizacion exitosa");
//     }
// });

conexion.end();