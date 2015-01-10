(function ($, createModule, undefined) {
  'use strics';

  var mod = createModule({
    id: 'AutoSpoiler',
    name: 'Ocultar contenido etiquetas spoiler',
    author: 'franexp, igtroop',
    version: '0.2',
    description: 'Modifica la etiqueta spoiler para ocultarla totalmente.',
    domain: ['/showthread.php', '/newthread.php', '/newreply.php', '/editpost.php']
  });

  var vB_Editor;
  /**
  * Activamos modo de carga normal (aunque viene activo por defecto)
  * aqui se podrian hacer comprobaciones adicionales. No es nuestro caso
  */
  mod.normalStartCheck = function () {
    return true;
  };

  /**
  * Sobreescribimos la funcion de ejecucion
  */
  mod.onNormalStart = function () {
    addButtonStyle();
    /*Buscamos los post con spoiler y modificamos */
    SHURSCRIPT.eventbus.on('parsePost', parsePost);
  };

  /* Pasamos el contenido del post a changeSpoiler */
  function parsePost(event, post) {
    changeSpoiler(post.content);
  }

  /* Modificamos que contengan spoiler */
  function changeSpoiler(element) {
    $(element).find("div[class='spoiler']").each(function () {
        var warning_spoiler = $(this).prev();

        $(this).replaceWith('<div class="shurscript"><button class="btn btn-danger shurscript-spoiler">Mostrar Spoiler</button><div class="panel panel-danger panel-content shurpanel">' + $(this).html() + '</div></div>');
        warning_spoiler.replaceWith("");
    });
    $(element).find('.shurscript .panel-content').each(function(){
      if ( $(this).find('font') ) {
        $(this).find('font').attr('color', 'black');
      }
      var e = $(this).parent().find('.shurscript-spoiler');
      //añadimos evento
      $(e).on('click', function(){showPanel(this)});
    });
  }

  /* Añadimos estilos necesarios */
  function addButtonStyle() {
    GM_addStyle(".shurscript-spoiler {width:100%; margin-bottom: 2px; height: 32px; padding: 0; line-height: 200%;}");
    GM_addStyle(".shurpanel {display: none;}");
    GM_addStyle(".panel-content {padding: 5px !important; border-radius: 0 !important;}");
  }

  /* Trata el evento cuando se pulsa sobre un boton de spoiler */
  function showPanel(element) {
    var sit = $(element).parent().find('.shurpanel');
    if ( $(sit).is(':visible') ) {
      $(sit).slideUp('slow');
      $(element).text('Mostrar Spoiler');
    }else {
      $(sit).slideDown('slow');
      $(element).text('Ocultar Spoiler');
    }
    return false;
  }

})(jQuery, SHURSCRIPT.moduleManager.createModule);
