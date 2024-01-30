$(document).ready(function() {

    // Slider
    if(window.location.href.indexOf('index') > -1) {//Esto soluciona el error de sincronización de JS con la página about - para que funcionen los temas
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slidewidth: 1200,
        pager: true,
        responsive: true,
        
        });
    }
    // posts - Listado dinámico de artículos/posts
    //podemos usar las CDNs de momentjs
    if(window.location.href.indexOf('index') > -1) {
    var posts =[
        {
            title:'Prueba de Titulo 1',
            date: 'Publicado el día: '+ moment().format('DD')+" de "+ moment().format('MMMM')+ " del " + moment().format('YYYY'),
            content:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tieneuna distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).'
        },
        {
            title:'Prueba de Titulo 2',
            date: 'Publicado el día: '+ moment().format('DD')+" de "+ moment().format('MMMM')+ " del " + moment().format('YYYY'),
            content:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tieneuna distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).'
        },
        {
            title:'Prueba de Titulo 3',
            date: 'Publicado el día: '+ moment().format('DD')+" de "+ moment().format('MMMM')+ " del " + moment().format('YYYY'),
            content:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tieneuna distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).'
        },
        {
            title:'Prueba de Titulo 4',
            date: 'Publicado el día: '+ moment().format('DD')+" de "+ moment().format('MMMM')+ " del " + moment().format('YYYY'),
            content:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tieneuna distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).'
        },
        {
            title:'Prueba de Titulo 5',
            date: 'Publicado el día: '+ moment().format('DD')+" de "+ moment().format('MMMM')+ " del " + moment().format('YYYY'),
            content:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tieneuna distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).'
        },
        
        ];
    
    posts.forEach((item, index)=>{
        var post = `
            <article class="post">
            <h2>${item.title}</h2>
            <span class="fecha">${item.date}</span>
            <p> 
                ${item.content}
            </p>
            <a href="#" class="button-more">Leer más</a>
        </article>
        `;
        $("#posts").append(post);
        });
    }
    // Selector de Tema
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
    }, 500);
    return false;
    });

    // Login Falso
    $('#login form').submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
        
    });
    var form_name = localStorage.getItem("form_name");
    

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br/><hr/><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();
        $("#logout").click(function(){    
            localStorage.clear();//borrar localStorage
            location.reload();//Actualiza la pagina para salir de login del usuario
        });
    }
    // Acordeon
    if(window.location.href.indexOf('about') > -1) {//esta funcionalidad se ejecuta cuando este en la pagina about
        $("#acordeon").accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1) {//Solo se ejecuta cuando esta en la pagina reloj

        setInterval(function(){ //Esta función nos permite ejecutar en bucle cada seg o cada tiempo que indique unas instrucciones
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
    }
    // Validacion Formularios
    if(window.location.href.indexOf('contacto') > -1) {//Solo se ejecuta cuando esta en la pagina contacto
    
        $("form input[name='date]").datepicker();
    }
});
