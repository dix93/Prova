
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // alias per le classi usate più di frequente in Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Facebook}", "click", function(sym, e) {
         // Passate a un nuovo URL nella finestra attuale
         // (sostituite "_self" con l'attributo di destinazione appropriato per una nuova finestra)
         window.open("http://www.facebook.com/100Livello", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_YT}", "click", function(sym, e) {
         // Passate a un nuovo URL nella finestra attuale
         // (sostituite "_self" con l'attributo di destinazione appropriato per una nuova finestra)
         window.open("http://www.youtube.com/channel/UCjy4sv8XFGTMCPqj4X64jPw", "_blank");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_facebook_logo}", "mouseover", function(sym, e) {
         // riproduci la linea temporale dalla posizione data (ms o etichetta)
         sym.play('loop');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_facebook_logo}", "mouseout", function(sym, e) {
         sym.playReverse('position');
         // riproduci la linea temporale dalla posizione data (ms o etichetta)
         

      });
      //Edge binding end

   })("FB");
   //Edge symbol end:'FB'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_youtube_logo_stacked-vfl225ZTx}", "mouseover", function(sym, e) {
         // riproduci la linea temporale dalla posizione data (ms o etichetta)
         sym.play('loop');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_youtube_logo_stacked-vfl225ZTx}", "mouseout", function(sym, e) {
         sym.playReverse('position');
         

      });
      //Edge binding end

   })("YT");
   //Edge symbol end:'YT'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_logo-twitter1}", "mouseover", function(sym, e) {
         // riproduci la linea temporale dalla posizione data (ms o etichetta)
         sym.play('loop');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_logo-twitter1}", "mouseout", function(sym, e) {
         sym.playReverse('position');
         

      });
      //Edge binding end

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
   
   })("Symbol_4");
   //Edge symbol end:'Symbol_4'

   //=========================================================
   
   //Edge symbol: 'Symbol_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         x=0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("BookMark");
   //Edge symbol end:'BookMark'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(jQuery, AdobeEdge, "EDGE-929968435");
