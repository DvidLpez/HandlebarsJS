$(function(){
    // Guardamos el template
    var templateScript   = $("#entry-template").html();

    // Compilamos el template
    var template = Handlebars.compile(templateScript);

    // Recogemos la data a pintar
    var data = {

        "index":{
            "titulo": "HANDLEBARS",
            "cuerpo": "Página creada con HandlebarsJS",
            "url": "http://handlebarsjs.com/"
        },

        "personas": [
            {nombre: 'David', apellido: 'López', profesion:"Webmaster"},
            {nombre: 'Alberto', apellido: 'López'},
            {nombre: 'Cristina', apellido: 'Nocete'},
            {nombre: 'Eva', apellido: 'López'}
        ]

    };

    // Pasamos la data a una template
    var templateHTML = template(data);
    // Pasamos esta template a la página
    $('.templateIndex').html(templateHTML);
});
