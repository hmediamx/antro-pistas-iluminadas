/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'fondo1',
            type:'image',
            rect:['0px','-33px','940px','183px','auto','auto'],
            fill:["rgba(0,0,0,0)",'fondo1.jpg','0px','0px']
         },
         {
            id:'texto1',
            type:'image',
            rect:['347px','85px','402px','54px','auto','auto'],
            fill:["rgba(0,0,0,0)",'texto1.png','0px','0px']
         },
         {
            id:'fondo2',
            type:'image',
            rect:['0px','-32px','942px','182px','auto','auto'],
            fill:["rgba(0,0,0,0)",'fondo2.jpg','0px','0px']
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['0px','34px','941px','47px','auto','auto'],
            opacity:0.69811320754717,
            fill:["rgba(255,0,223,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Text2',
            type:'text',
            rect:['200px','39px','auto','auto','auto','auto'],
            text:"Audio e iluminación profesional",
            align:"left",
            font:['Verdana, Geneva, sans-serif',30,"rgba(255,255,255,1.00)","700","none","normal"]
         },
         {
            id:'fondo3',
            type:'image',
            rect:['0px','0px','940px','285px','auto','auto'],
            fill:["rgba(0,0,0,0)",'fondo3.jpg','0px','0px']
         },
         {
            id:'chica',
            type:'image',
            rect:['73px','-13px','750px','144px','auto','auto'],
            fill:["rgba(0,0,0,0)",'chica.png','0px','0px']
         },
         {
            id:'Rectangle3',
            type:'rect',
            rect:['0px','-32px','942px','182px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,0,223,1.00)'],
            ["style", "opacity", '0.69811320754717'],
            ["style", "top", '164px'],
            ["style", "width", '941px']
         ],
         "${_chica}": [
            ["style", "top", '-13px'],
            ["style", "opacity", '0'],
            ["style", "left", '73px'],
            ["style", "height", '144px']
         ],
         "${_Text2}": [
            ["style", "top", '29px'],
            ["style", "opacity", '0'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '200px'],
            ["style", "font-size", '30px']
         ],
         "${_Rectangle3}": [
            ["style", "height", '182px'],
            ["style", "opacity", '0'],
            ["style", "top", '-32px'],
            ["style", "width", '942px']
         ],
         "${_fondo3}": [
            ["style", "top", '0px'],
            ["style", "height", '285px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '940px']
         ],
         "${_fondo1}": [
            ["style", "top", '-33px'],
            ["style", "height", '183px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '940px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '130px'],
            ["style", "width", '940px']
         ],
         "${_fondo2}": [
            ["style", "top", '-32px'],
            ["style", "height", '182px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '942px']
         ],
         "${_texto1}": [
            ["style", "top", '85px'],
            ["style", "opacity", '0'],
            ["style", "left", '227px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8534,
         autoPlay: true,
         timeline: [
            { id: "eid54", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 3655, duration: 230, easing: "easeOutBack" },
            { id: "eid72", tween: [ "style", "${_chica}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid75", tween: [ "style", "${_chica}", "opacity", '1', { fromValue: '0'}], position: 5689, duration: 430 },
            { id: "eid84", tween: [ "style", "${_Rectangle3}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid89", tween: [ "style", "${_Rectangle3}", "opacity", '1', { fromValue: '0'}], position: 8129, duration: 392 },
            { id: "eid56", tween: [ "style", "${_fondo3}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid64", tween: [ "style", "${_fondo3}", "opacity", '1', { fromValue: '0'}], position: 5505, duration: 435, easing: "easeOutBack" },
            { id: "eid49", tween: [ "style", "${_Text2}", "top", '39px', { fromValue: '29px'}], position: 3660, duration: 225, easing: "easeOutBack" },
            { id: "eid42", tween: [ "style", "${_Rectangle2}", "top", '34px', { fromValue: '164px'}], position: 3025, duration: 625, easing: "easeOutBack" },
            { id: "eid34", tween: [ "style", "${_fondo2}", "opacity", '1', { fromValue: '0'}], position: 2530, duration: 500, easing: "easeOutQuad" },
            { id: "eid27", tween: [ "style", "${_texto1}", "left", '337px', { fromValue: '227px'}], position: 510, duration: 490, easing: "easeOutQuad" },
            { id: "eid11", tween: [ "style", "${_fondo1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 510 },
            { id: "eid14", tween: [ "style", "${_texto1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid30", tween: [ "style", "${_texto1}", "opacity", '1', { fromValue: '0'}], position: 510, duration: 490 },
            { id: "eid68", tween: [ "style", "${_fondo3}", "top", '-31px', { fromValue: '0px'}], position: 5515, duration: 1236 },
            { id: "eid91", tween: [ "style", "${_fondo3}", "top", '-35px', { fromValue: '-31px'}], position: 6751, duration: 1441 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-160908871");
