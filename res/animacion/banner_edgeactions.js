/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8534, function(sym, e) {
         // introducir código aquí
         this.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-160908871");