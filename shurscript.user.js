// Shur Scripts SA
// GPLv2 Licensed
// http://www.gnu.org/licenses/gpl-2.0.html
//
// ==UserScript==
// @name            ShurScript
// @description     Script para ForoCoches
// @icon            https://raw.github.com/igtroop/shurscript/anycloud/images/icon-48x48.png
// @icon64          https://raw.github.com/igtroop/shurscript/anycloud/images/icon-64x64.png
// @namespace       http://shurscript.es
// @version         0.289.1
// @author          TheBronx
// @author          xusO
// @author          Fritanga / Korrosivo
// @author          Juno / ikaros45
// @author          Electrosa
// @author          igtroop
// @include         http://www.forocoches.com*
// @include         http://forocoches.com*
// @grant           GM_log
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_deleteValue
// @grant           GM_xmlhttpRequest
// @grant           GM_registerMenuCommand
// @grant           GM_addStyle
// @grant           GM_getResourceText
// @grant           GM_getResourceURL
// @grant           GM_getMetadata
// @run-at          document-end
// @updateURL       https://github.com/igtroop/shurscript/raw/anycloud/shurscript.meta.js
// @downloadURL     https://github.com/igtroop/shurscript/raw/anycloud/shurscript.user.js
// @require         https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js
// @require         https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @require         https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/plugins/bootbox.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/plugins/Markdown.Converter.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/plugins/bootstrap-tokenfield.min.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/plugins/icheck.min.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/core.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/components/eventbus.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/components/sync.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/components/shurbar.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/components/modulemanager.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/components/topbar.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/components/templater.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/components/autoupdater.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/components/preferences.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/components/parser.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/components/notifications.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/Quotes.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/FilterThreads.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/BetterPosts.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/Scrollers.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/NestedQuotes.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/BottomNavigation.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/RefreshSearch.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/HighlightOP.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/ImageUploader.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/ThreadUpdater.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/AutoIcons.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/PrivateMode.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/Integrations.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/Reader.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/AutoSpoiler.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/History.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/ImageGallery.js
// @require         https://github.com/igtroop/shurscript/raw/anycloud/modules/Announces.js
// @resource        bootstrapcss https://github.com/igtroop/shurscript/raw/anycloud/css/bootstrap.css
// @resource        modalcss https://github.com/igtroop/shurscript/raw/anycloud/css/modal.css
// @resource        shurbarcss https://github.com/igtroop/shurscript/raw/anycloud/css/shurbar.css
// @resource        modalhtml https://github.com/igtroop/shurscript/raw/anycloud/html/modal.html
// @resource        quotehtml https://github.com/igtroop/shurscript/raw/anycloud/html/quote.html
// @resource        imageuploadercss https://github.com/igtroop/shurscript/raw/anycloud/css/imageuploader.css
// @resource        imageuploaderhtml https://github.com/igtroop/shurscript/raw/anycloud/html/imageuploader.html
// @resource        autoiconscss https://github.com/igtroop/shurscript/raw/anycloud/css/autoicons.css
// @resource        readercss https://github.com/igtroop/shurscript/raw/anycloud/css/reader.css
// @resource        readerhtml https://github.com/igtroop/shurscript/raw/anycloud/html/reader.html
// @resource        historycss https://github.com/igtroop/shurscript/raw/anycloud/css/history.css
// @resource        historyhtml https://github.com/igtroop/shurscript/raw/anycloud/html/history.html
// @resource        gallerycss https://github.com/igtroop/shurscript/raw/anycloud/css/gallery.css
// @resource        notificationscss https://github.com/igtroop/shurscript/raw/anycloud/css/notifications.css
// ==/UserScript==

/**
 * Es imprescindible que los archivos js se carguen en este orden:
 * core > componentes > modulos
 */

if (window.top === window) { // [xusoO] Evitar que se ejecute dentro de los iframes WYSIWYG
	// Lanza la carga prematura
	SHURSCRIPT.core.initializeEagerly();

	// Programa la carga normal
	jQuery(document).ready(SHURSCRIPT.core.initialize);
}
