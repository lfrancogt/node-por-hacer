const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}

const completado = {
    completado: {
        demand: true,
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear tareas por hacer', {
        descripcion
    })
    .command('borrar', 'Borrar tareas por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar tareas por hacer', {
        descripcion,
        completado
    })
    .command('listar', 'Listar ')
    .help()
    .argv;

module.exports = {
    argv
}