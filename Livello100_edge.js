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
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Sfondo',
            type:'image',
            rect:['162px','373px','747px','223px','auto','auto'],
            clip:['rect(0px 747pxpx 222.99852241332pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"Untitled-1.png",'0px','0px']
         },
         {
            id:'Testo_Inferiore',
            type:'rect',
            rect:['287','511','auto','auto','auto','auto']
         },
         {
            id:'Livello_100_special2',
            type:'image',
            rect:['326px','-235px','32.6%','31.5%','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"Livello%20100_special2.png",'0px','0px'],
            transform:[]
         },
         {
            id:'Facebook',
            type:'rect',
            rect:['337','375','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'YT',
            type:'rect',
            rect:['493','374','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'Separatore_top',
            type:'rect',
            rect:['239px','326px','590px','1px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'twitter',
            type:'rect',
            rect:['650','378','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'Text',
            type:'text',
            rect:['453px','596px','auto','auto','auto','auto'],
            text:"Designed By Alessandro Evangelista<br>Copyright® 2013",
            align:"center",
            font:['Verdana, Geneva, sans-serif',9,"rgba(213,213,213,1.00)","normal","none",""]
         },
         {
            id:'BookMark',
            type:'rect',
            rect:['0','-17','auto','auto','auto','auto']
         },
         {
            id:'Symbol_1',
            type:'rect',
            rect:['-728','656','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'YT',
            symbolName:'YT'
         },
         {
            id:'BookMark',
            symbolName:'BookMark'
         },
         {
            id:'Testo_Inferiore',
            symbolName:'Symbol_4'
         },
         {
            id:'twitter',
            symbolName:'Symbol_3'
         },
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
         },
         {
            id:'Facebook',
            symbolName:'FB'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Testo_Inferiore}": [
            ["transform", "scaleX", '0.99939'],
            ["style", "opacity", '0'],
            ["style", "left", '280.85px']
         ],
         "${_twitter}": [
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '662.11px']
         ],
         "${_Sfondo}": [
            ["style", "top", '373px'],
            ["style", "left", '161.85px'],
            ["style", "height", '222.99852241332px'],
            ["style", "opacity", '0'],
            ["style", "clip", [0,723,129,25], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '747px']
         ],
         "${_Symbol_1}": [
            ["style", "left", '-742px']
         ],
         "${_BookMark}": [
            ["style", "top", '-99px']
         ],
         "${_Text}": [
            ["style", "top", '596px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(213,213,213,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '453px'],
            ["style", "font-size", '9px']
         ],
         "${_Livello_100_special2}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '325.95px'],
            ["style", "width", '32.61%'],
            ["style", "top", '-235px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '31.51%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '699.2px'],
            ["style", "width", '1276.55px']
         ],
         "${_Separatore_top}": [
            ["style", "top", '326.47px'],
            ["style", "height", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '239px'],
            ["transform", "scaleX", '0.7']
         ],
         "${_YT}": [
            ["style", "opacity", '0'],
            ["style", "left", '505px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Facebook}": [
            ["style", "opacity", '0'],
            ["style", "left", '336.73px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: true,
         timeline: [
            { id: "eid13", tween: [ "style", "${_Livello_100_special2}", "top", '60px', { fromValue: '-235px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid64", tween: [ "style", "${_Sfondo}", "opacity", '0.69945629222973', { fromValue: '0.000000'}], position: 0, duration: 2000 },
            { id: "eid48", tween: [ "style", "${_YT}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 1000, easing: "easeInQuint" },
            { id: "eid67", tween: [ "style", "${_Testo_Inferiore}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2000 },
            { id: "eid51", tween: [ "style", "${_Facebook}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 1000, easing: "easeInQuint" },
            { id: "eid35", tween: [ "style", "${_Separatore_top}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2000, easing: "easeInQuint" },
            { id: "eid75", tween: [ "style", "${_Testo_Inferiore}", "left", '280.85px', { fromValue: '280.85px'}], position: 2000, duration: 0, easing: "easeInQuint" },
            { id: "eid78", tween: [ "style", "${_Sfondo}", "clip", [0,723,129,25], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,723,129,25]}], position: 2000, duration: 0, easing: "easeInQuint" },
            { id: "eid45", tween: [ "style", "${_twitter}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1000, easing: "easeInQuint" },
            { id: "eid52", tween: [ "transform", "${_Separatore_top}", "scaleX", '0.7', { fromValue: '0.7'}], position: 0, duration: 0, easing: "easeInQuint" },
            { id: "eid12", tween: [ "style", "${_Livello_100_special2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid176", tween: [ "style", "${_BookMark}", "top", '-20px', { fromValue: '-99px'}], position: 1500, duration: 750, easing: "easeOutBounce" }         ]
      }
   }
},
"FB": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'facebook_logo',
      rect: ['0px','0px','50px','50px','auto','auto'],
      transform: {},
      fill: ['rgba(0,0,0,0)','images/facebook_logo.png','0px','0px','100%','100%']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '50px']
         ],
         "${_facebook_logo}": [
            ["style", "top", '-0.12px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '50px'],
            ["transform", "scaleX", '1'],
            ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0.01px'],
            ["style", "width", '50px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid27", tween: [ "transform", "${_facebook_logo}", "scaleY", '1.2', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutExpo" },
            { id: "eid26", tween: [ "transform", "${_facebook_logo}", "scaleX", '1.2', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutExpo" }         ]
      }
   }
},
"YT": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'youtube_logo_stacked-vfl225ZTx',
      type: 'image',
      rect: ['0px','0px','57px','52px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/youtube_logo_stacked-vfl225ZTx.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_youtube_logo_stacked-vfl225ZTx}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '52px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '57px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '57px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid29", tween: [ "transform", "${_youtube_logo_stacked-vfl225ZTx}", "scaleY", '1.2', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutExpo" },
            { id: "eid28", tween: [ "transform", "${_youtube_logo_stacked-vfl225ZTx}", "scaleX", '1.2', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutExpo" }         ]
      }
   }
},
"Symbol_3": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'logo-twitter1',
      type: 'image',
      rect: ['0px','0px','63px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/logo-twitter1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_logo-twitter1}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '44.777418321179px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0.01px'],
            ["style", "width", '63px']
         ],
         "${symbolSelector}": [
            ["style", "height", '44.766666412354px'],
            ["style", "width", '63px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid36", tween: [ "transform", "${_logo-twitter1}", "scaleX", '1.2', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutExpo" },
            { id: "eid37", tween: [ "transform", "${_logo-twitter1}", "scaleY", '1.2', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutExpo" }         ]
      }
   }
},
"Symbol_4": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group',
      type: 'group',
      rect: ['0px','0px','502','24','auto','auto'],
      c: [
      {
         type: 'text',
         rect: ['0px','0px','auto','auto','auto','auto'],
         id: 'Text2',
         text: 'Contact',
         align: 'left',
         font: ['Verdana, Geneva, sans-serif',20,'rgba(80,80,80,1.00)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['167px','0px','auto','auto','auto','auto'],
         id: 'Text2Copy2',
         text: ',',
         align: 'left',
         font: ['Verdana, Geneva, sans-serif',20,'rgba(80,80,80,1.00)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['181px','0px','auto','auto','auto','auto'],
         align: 'left',
         id: 'Text2Copy3',
         text: 'Giulio',
         cursor: ['pointer'],
         font: ['Verdana, Geneva, sans-serif',20,'rgba(58,139,171,1.00)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['289px','0px','auto','auto','auto','auto'],
         align: 'left',
         id: 'Text2Copy5',
         text: 'Alessandro',
         cursor: ['pointer'],
         font: ['Verdana, Geneva, sans-serif',20,'rgba(58,139,171,1.00)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['408px','0px','109px','auto','auto','auto'],
         id: 'Text2Copy6',
         text: 'for more.',
         align: 'left',
         font: ['Verdana, Geneva, sans-serif',20,'rgba(80,80,80,1.00)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['244px','0px','auto','auto','auto','auto'],
         id: 'Text2Copy4',
         text: 'and',
         align: 'left',
         font: ['Verdana, Geneva, sans-serif',20,'rgba(80,80,80,1.00)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['86px','0px','auto','auto','auto','auto'],
         align: 'left',
         id: 'Text2Copy',
         text: 'Roberto',
         cursor: ['pointer'],
         font: ['Verdana, Geneva, sans-serif',20,'rgba(58,139,171,1.00)','normal','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy}": [
            ["style", "top", '0px'],
            ["style", "left", '86px'],
            ["color", "color", 'rgba(58,139,171,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '20px']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '0px'],
            ["style", "font-size", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '408px'],
            ["style", "width", '109px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '167px'],
            ["style", "font-size", '20px']
         ],
         "${_Text2Copy5}": [
            ["style", "top", '0px'],
            ["style", "left", '289px'],
            ["color", "color", 'rgba(58,139,171,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '20px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '244px'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '24px'],
            ["style", "width", '502px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '0px'],
            ["style", "left", '181px'],
            ["color", "color", 'rgba(58,139,171,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '20px']
         ],
         "${_Group}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"BookMark": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'bookmarks2',
      type: 'image',
      rect: ['14px','-24px','246px','177px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bookmarks.png','0px','0px']
   },
   {
      rect: ['106px','17px','62px','134px','auto','auto'],
      type: 'rect',
      id: 'Rectangle',
      stroke: [1,'rgb(222, 222, 222)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(246,246,246,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bookmarks2}": [
            ["style", "top", '-122px'],
            ["style", "height", '273.54244995117px'],
            ["style", "opacity", '1'],
            ["style", "left", '13.69px'],
            ["style", "width", '246.41667175293px']
         ],
         "${_Rectangle}": [
            ["style", "top", '17.02px'],
            ["style", "height", '133.9666595459px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '59.30859375px']
         ],
         "${symbolSelector}": [
            ["style", "height", '154px'],
            ["style", "width", '192px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid105", tween: [ "style", "${_bookmarks2}", "top", '-1px', { fromValue: '-122px'}], position: 0, duration: 500, easing: "easeInQuint" },
            { id: "eid106", tween: [ "style", "${_bookmarks2}", "top", '-259px', { fromValue: '-1px'}], position: 500, duration: 500, easing: "easeInQuint" },
            { id: "eid111", tween: [ "style", "${_Rectangle}", "top", '138px', { fromValue: '17.02px'}], position: 0, duration: 500, easing: "easeInQuint" },
            { id: "eid112", tween: [ "style", "${_Rectangle}", "top", '17.02px', { fromValue: '138px'}], position: 500, duration: 500, easing: "easeInQuint" }         ]
      }
   }
},
"Symbol_1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','747px','12px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      type: 'rect',
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['default'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['277px','-17px','152px','49px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['283px','-9px','auto','auto','auto','auto'],
      id: 'Text3',
      text: 'Giulio e\' Gay',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',23,'rgba(20,20,20,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '-9px'],
            ["color", "color", 'rgba(20,20,20,1.00)'],
            ["style", "width", '181.9921875px'],
            ["style", "left", '263.1px'],
            ["style", "font-size", '23px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '49.133335113525px'],
            ["style", "top", '-16.87px'],
            ["style", "left", '272.73px'],
            ["style", "width", '161.99948120117px']
         ],
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["style", "height", '12.083333015442px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'default'],
            ["style", "width", '747px']
         ],
         "${symbolSelector}": [
            ["style", "height", '12.083333015442px'],
            ["style", "width", '747px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
         timeline: [
            { id: "eid155", tween: [ "style", "${_RoundRect}", "left", '1033px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInQuint" },
            { id: "eid156", tween: [ "style", "${_RoundRect}", "left", '0px', { fromValue: '1033px'}], position: 1000, duration: 500, easing: "easeInQuint" },
            { id: "eid163", tween: [ "style", "${_Text3}", "width", '181.9921875px', { fromValue: '181.9921875px'}], position: 1000, duration: 0, easing: "easeInQuint" },
            { id: "eid165", tween: [ "style", "${_Rectangle3}", "width", '161.99948120117px', { fromValue: '161.99948120117px'}], position: 0, duration: 0 },
            { id: "eid159", tween: [ "style", "${_Text3}", "left", '1300.1px', { fromValue: '263.1px'}], position: 0, duration: 500, easing: "easeInQuint" },
            { id: "eid160", tween: [ "style", "${_Text3}", "left", '265.1px', { fromValue: '1300.1px'}], position: 1000, duration: 500, easing: "easeInQuint" },
            { id: "eid161", tween: [ "style", "${_Rectangle3}", "left", '1310.22px', { fromValue: '272.73px'}], position: 0, duration: 500, easing: "easeInQuint" },
            { id: "eid162", tween: [ "style", "${_Rectangle3}", "left", '277.22px', { fromValue: '1310.22px'}], position: 1000, duration: 500, easing: "easeInQuint" }         ]
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
})(jQuery, AdobeEdge, "EDGE-929968435");
