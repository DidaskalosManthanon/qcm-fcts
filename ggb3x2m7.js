var parameters = {
    "id": "ggb3x2m7",
    "width":1457,
    "height":841,
    "showMenuBar":true,
    "showAlgebraInput":true,
    "showToolBar":true,
    "customToolBar":"0 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
    "showToolBarHelp":true,
    "showResetIcon":false,
    "enableLabelDrags":false,
    "enableShiftDragZoom":true,
    "enableRightClick":false,
    "errorDialogsActive":false,
    "useBrowserForJS":false,
    "allowStyleBar":false,
    "preventFocus":false,
    "showZoomButtons":true,
    "capturingThreshold":3,
    // add code here to run when the applet starts
    "appletOnLoad":function(api){ /* api.evalCommand('Segment((1,2),(3,4))');*/ },
    "showFullscreenButton":true,
    "scale":1,
    "disableAutoScale":false,
    "allowUpscale":false,
    "clickToLoad":false,
    "appName":"classic",
    "buttonRounding":0.7,
    "buttonShadows":false,
    "language":"fr",
    // use this instead of ggbBase64 to load a material from geogebra.org
    // "material_id":"RHYH3UQ8",
    // use this instead of ggbBase64 to load a .ggb file
    // "filename":"myfile.ggb",
    "ggbBase64":"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",
    };
    // is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
    var views = {'is3D': 0,'AV': 1,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};
    var applet = new ggb3x2m7(parameters, '5.0', views);
    window.onload = function() {applet.inject('ggb3x2m7')};
    applet.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');
    