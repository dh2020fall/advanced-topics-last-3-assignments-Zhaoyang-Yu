/* global L:false document:false $:false */
// that first line stops your editor from complaining about these variables
// being undefined, but it will still get mad at you if you accidentlaly try to change
// their values (which you must not do!!)
// `L` is the global Leaflet API object, which must be defined before this
// script is loaded
// `document` is of course the HTML document
// $ is the jQuery object (actually we're not using it here at the moment)
// but just in case you would like to make use of it, it's available


///////////////////////////////////////////////
// VARS!! VARS!! VARS!! VARS!! VARS!! VARS!! //
///////////////////////////////////////////////

//////////////////////////
// Globally Scoped Vars //
//////////////////////////

// In order to access map data, we need some of these variables to
// be defined in global scope. In some cases we can assign values here;
// in others we'll wait till we run the initialization function
// we do this here to make sure we can access them
// whenever we need to -- they have 'global scope'

// map initialization variables
let projectMap, // this will hold the map once it's initialized
    myCenter = [34, 66], // [ 55.4907, -1.594], // *latitude*, then longitude
    myZoom = 2; // set your preferred zoom here. higher number is closer in.
                // I set the zoom wide to give access to context before zooming in


// I'm complicating things a bit with this next set of variables, which will help us
// to make multi-colored markers.
// color options are red, blue, green, orange, yellow, violet, grey, black
// to use one of the ones I haven't provided here, 
// just substitute the color name in the URL value (just before `.png`)
const greenURL = 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
      redURL = 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      violetURL = 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png';

// create new icon classes
// I've added this just in case you want very fine control over your marker placement
const myIconClass = L.Icon.extend({
    options: {
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    }});
// create the new icon types -- cf. https://leafletjs.com/examples/custom-icons/ and
// also https://leafletjs.com/reference-1.5.0.html#icon
const chinaIcon = new myIconClass({iconUrl: redURL}),
      romeIcon = new myIconClass({iconUrl: violetURL}),
      otherIcon = new myIconClass({iconUrl: greenURL});


// storing colors in variables, to make it easier to change all the related features at once
// you should probably do this too. 
let kuCol = 'blue',
    xiongCol = 'yellow',
    parCol = 'yellow',
    ptoCol = 'blue',
    seleuCol = 'blue',
    desCol = 'yellow'
    wallCol = 'black',
    owallCol = 'black',
    hexiCol = 'black';

///////////////////////////////////////////////////////////////////////
// CHANGE THESE VARIABLE NAMES AND THEIR VALUES TO SUIT YOUR PROJECT //
// It's easy to do this in VSCode: right-click on a variable name    //
// and choose "rename symbol"                                        //
///////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////
// DATA DATA DATA DATA                                  //
// DATA DATA DATA DATA                                  //
//////////////////////////////////////////////////////////


//////////////////////////////////
// MAP DATA PART 1: MARKER INFO //
//////////////////////////////////

///////////////////////////////
// YOU NEED TO CHANGE THESE! //
///////////////////////////////

// These are placeholder arrays; we use them to generate other JS variables
// that will be more useful to us later on
// but writing them this way keeps the code as D.R.Y. as possible
let chinaCityInfo =
    [
        {position: [34.266667,108.9],
         title: "Chang'an",
         description: '<p></p>'
        },
        {position: [36.0606,103.8268],
         title: "Lanzhou",
         description: `<p></p>`
        },
        {position: [40.1421,94.6619],
         title: "Dunhuang",
         description: `<p></p>`
        },
        {position: [40.3535,93.864028],
         title: "Yumen Pass",
         description: '<p></p>'
        }
    ],
    romeCityInfo =
    [
        {position: [41.883333,12.5],
         title: "Rome",
         description: "<p></p>"
        },
        {position: [34.551389,38.268056],
         title: "Palmyra",
         description: "<p></p>"
        },
        {position: [34.747,40.73],
         title: "Dura-Europos",
         description: "<p></p>"
        },
        {position: [30.328611,35.441944],
         title: "Petra",
         description: "<p></p>"
        }
    ],
    otherCityInfo =
    [
        {position: [39.4681,75.9938],
         title: "Kashgar",
         description: "<p></p>"
        },
        {position: [36.766667,66.9],
         title: "Balkh",
         description: "<p></p>"
        },
        {position: [24.86650252692691,67.027587890625],
         title: "Barbarikon",
         description: "<p></p>"
        }
    ];


let chinaCity = processMarkerLayer(chinaCityInfo,
                                     {description: 'Cities under the Control of Chinese Dynasties', defaultIcon: chinaIcon}),
    romeCity = processMarkerLayer(romeCityInfo,
                                     {description: 'Cities under the Control of Rome', defaultIcon: romeIcon}),
    otherCity = processMarkerLayer(otherCityInfo,
                                     {description: 'Cities under the Control of other States', defaultIcon: otherIcon});


//////////////////////////////
// MAP DATA PART 2: GEOJSON //
//////////////////////////////

// With this powerful feature you can add arbitrary
// data layers to your map.  It's cool. Learn more at:
// https://leafletjs.com/examples/geojson/
// but essentially: we can add all kinds of features here, including polygons and other shapes
// you can create geoJSON layers here: http://geojson.io/
// and learn more about the format here: https://en.wikipedia.org/wiki/GeoJSON
// to set the line and fill color, you will need to set the `myColor` property as below. 
const asData={
    "type": "FeatureCollection",
    "description": "Approximate Boundaries of Control",
    "features": [
    {
        "type": "Feature",
            "properties": {myColor: xiongCol, title: "Xiongnu Confederation", description: "Prior to the Han-Xiongnu Wars starting in 133 BCE"},
            "geometry": {
            "type": "Polygon",
            "coordinates": [[[122.56347656249999,42.74701217318067],[123.48632812499999,45.02695045318546],[121.81640624999999,48.45835188280866],[112.5,53.014783245859235],[99.49218749999999,55.57834467218206],[76.4208984375,55.57834467218206],[72.6416015625,51.12421275782688],[72.94921875,44.62175409623324],[74.3115234375,44.05601169578525],[75.35522460937499,39.12153746241925],[84.8583984375,39.232253141714885],[90.3076171875,40.68063802521456],[99.722900390625,38.53097889440024],[104.19433593749999,37.47485808497102],[106.5234375,37.92686760148135],[106.5234375,40.81380923056958],[115.00488281250001,40.64730356252251],[122.56347656249999,42.74701217318067]]
                            ]
        }  
    },
    {
      "type": "Feature",
        "properties": {myColor: kuCol, title: "Kushan Empire", description: "In the year 1 CE." },
        "geometry": {
        "type": "Polygon",
        "coordinates": [[[66.357421875,25.60190226111573],[66.8408203125,24.206889622398023],[68.5986328125,23.160563309048314],[70.4443359375,27.410785702577023],[73.0810546875,28.459033019728043],[83.7432861328125,26.098721466341463],[84.04815673828124,27.188685315271673],[77.1240234375,33.358061612778876],[71.8505859375,36.63316209558658],[75.11352539062499,42.39912215986002],[69.90600585937499,41.75492216766298],[66.46728515624999,39.614152077002664],[59.9853515625,39.436192999314095],[61.25976562499999,35.85343961959182],[61.435546875,33.32134852669881],[66.0498046875,31.541089879585808],[66.533203125,28.536274512989916],[66.357421875,25.60190226111573]]
                       ]
        }
    },
    {
      "type": "Feature",
        "properties": {myColor: parCol, title: "Parthian Empire", description: "In the First Century CE"},
        "geometry": {
        "type": "Polygon",
        "coordinates": [[[61.39160156249999,33.30298618122413],[60.97412109375,36.527294814546245],[56.865234375,38.61687046392973],[53.98681640625,36.98500309285596],[51.92138671874999,36.59788913307022],[50.22949218749999,37.142803443716836],[43.26416015625,35.585851593232356],[40.4901123046875,37.112145754751516],[39.57275390625,35.782170703266075],[41.02294921875,35.191766965947394],[40.60546875,33.87041555094183],[44.27490234375,30.183121842195515],[46.38427734375,29.554345125748267],[46.68914794921875,30.979963897240086],[46.93359375,31.672083485607402],[47.8125,32.08257455954592],[51.26220703125,32.46342595776104],[52.33886718749999,31.653381399664],[53.96484375,31.484893386890164],[57.76611328124999,28.613459424004414],[57.2607421875,25.780107118422244],[61.4794921875,24.926294766395593],[64.16015624999999,25.48295117535531],[59.9853515625,31.70947636001935],[61.39160156249999,33.30298618122413]]
                       ]
        }  
    },
    {
        "type": "Feature",
          "properties": {myColor: seleuCol, title: "Seleucid Kingdom", description: "In the year 87 BCE"},
          "geometry": {
          "type": "Polygon",
          "coordinates": [[[33.662109375,36.24427318493909],[33.8818359375,36.1733569352216],[34.69482421875,36.756490329505176],[35.52978515624999,36.58024660149866],[35.79345703125,36.38591277287651],[35.66162109375,35.7286770448517],[35.6396484375,34.687427949314845],[34.6014404296875,31.75853163393717],[35.52978515624999,32.115148622612445],[35.44189453125,31.156408414557],[38.748779296875,34.4069096565206],[39.75952148437499,35.71083783530009],[39.03442382812499,35.93354064249312],[38.7982177734375,35.93798832265393],[38.7158203125,35.85789180225939],[38.583984375,35.871246850027966],[38.40270996093749,35.82672127366604],[38.2049560546875,35.90684930677121],[38.023681640625,36.15118243124803],[38.1719970703125,36.27085020723902],[38.243408203125,36.474306755095235],[38.18847656249999,36.64638529597495],[38.07861328125,36.659606226479696],[37.957763671875,37.06394430056685],[37.8643798828125,37.05956083025126],[37.8094482421875,37.208456662000195],[37.1282958984375,37.21720611325497],[36.85913085937499,37.53150992479082],[36.5185546875,37.483576550426996],[36.3922119140625,37.74031329210266],[35.39794921875,37.74900069437069],[35.277099609375,37.57070524233116],[34.0740966796875,37.35269280367274],[33.662109375,36.24427318493909]]
                         ]
        }  
    },
    {
        "type": "Feature",
          "properties": {myColor: ptoCol, title: "Ptolomaic Kingdom", description: "In the Second Century BCE"},
          "geometry": {
          "type": "Polygon",
          "coordinates": [[[32.431640625,30.977609093348686],[32.27783203125,31.615965936476076],[31.13525390625,31.63467554954133],[26.12548828125,31.63467554954133],[23.1591796875,32.713355353177555],[21.4892578125,32.99023555965106],[20.19287109375,32.491230287947594],[19.86328125,31.89621446335144],[20.126953125,31.147006308556566],[19.6435546875,30.50548389892728],[19.92919921875,30.164126343161097],[22.96142578125,30.164126343161097],[23.88427734375,28.671310915880834],[26.455078125,28.5941685062326],[30.30029296875,25.105497373014686],[35.419921875,24.046463999666567],[32.431640625,29.458731185355344],[32.431640625,30.977609093348686]]
                         ]
        }  
    }
  ]
}

const aoData={
    "type": "FeatureCollection",
    "description": "Other Geographical Areas of Note",
    "features": [
    {
        "type": "Feature",
        "properties": {myColor: hexiCol, title: "Hexi Corridor", description: "A stretch of arable land sandwiched between the Mongolian and Tibetan plateaus. The corridor links Inner China with the Western Regions." },
        "geometry": {
        "type": "LineString",
        "coordinates": [[94.66232299804688,40.13899044275822],[96.9598388671875,40.48455955508278],[98.4979248046875,39.72831341029745],[100.447998046875,38.9380483825641],[102.6397705078125,37.92686760148135],[102.8814697265625,37.59682400108367],[102.8265380859375,37.18657859524883],[103.82080078125,36.05798104702501]
                        ]
        }
    },
    {
      "type": "Feature",
        "properties": {myColor: desCol, title: "Taklamakan Desert", description: "A part of the Tarim Basin. Oasis settlements in the area supplied trading caravans on the Silk Road." },
        "geometry": {
        "type": "Polygon",
        "coordinates": [[[92.21923828124999,38.976492485539396],[90.85693359375,40.48038142908172],[88.11035156249999,41.29431726315258],[83.21044921875,42.71473218539458],[79.95849609375,41.96765920367816],[73.71826171874999,39.639537564366684],[75.91552734375,36.80928470205937],[80.92529296875,35.71083783530009],[92.21923828124999,38.976492485539396]]
                       ]
        }
    }
  ]
}

const wallData={
    "type": "FeatureCollection",
    "description": "The Great Wall of China",
    "features": [
    {
        "type": "Feature",
        "properties": {myColor: wallCol, title: "Han Extension", description: "The section of wall constructed during the Han Dynasty to protect the Hexi Corridor." },
        "geometry": {
        "type": "LineString",
        "coordinates": [[101.8212890625,42.48830197960227],[99.5361328125,40.01078714046552],[96.767578125,40.68063802521456],[92.900390625,40.613952441166596],[88.11035156249999,42.48830197960227]
                       ]
        }
    },
    {
        "type": "Feature",
        "properties": {myColor: owallCol, title: "Section of Wall", description: "Other active sections of wall during the Han Dynasty." },
        "geometry": {
        "type": "LineString",
        "coordinates": [[112.1484375,39.57182223734374],[113.21411132812499,39.27478966170308],[114.521484375,39.918162846609455]
                       ]
        }
    },
    {
        "type": "Feature",
        "properties": {myColor: owallCol, title: "Section of Wall", description: "Other active sections of wall during the Han Dynasty." },
        "geometry": {
        "type": "LineString",
        "coordinates": [[124.541015625,40.613952441166596],[123.70605468750001,42.48019996901214],[118.32550048828126,42.85784648372956],[117.68554687499999,42.601619944327965],[116.49902343749999,41.178653972331674],[115.83984375,40.74725696280421],[114.12597656249999,40.64730356252251],[111.68701171875,41.03793062246529],[110.093994140625,41.04621681452063],[108.643798828125,41.51680395810118],[107.40234375,41.45919537950706]
                       ]
        }
    },
    {
        "type": "Feature",
        "properties": {myColor: owallCol, title: "Section of Wall", description: "Other active sections of wall during the Han Dynasty." },
        "geometry": {
        "type": "LineString",
        "coordinates": [[99.569091796875,39.985538414809746],[103.348388671875,37.900865092570065],[103.831787109375,36.11125252076156]
                       ]
        }
    }
  ]
}

let areaState = processJSONLayer(asData),
    areaOther = processJSONLayer(aoData),
    wall = processJSONLayer(wallData);

////////////////////////////////////////////////
// array of all the layers!!!!!!!
// these layers will be added to the map
// you should change these variable names
// to align with the variables you've defiend above
let allLayers = [chinaCity, romeCity, otherCity, areaState, areaOther, wall];


///////////////////////////////////////
// END DATA!!  END DATA!! END DATA!! //
///////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////
// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS //
/////////////////////////////////////////////


/**
 * create a Leaflet map inside an element, add base layer and return the map as a return value
 * @param {HTMLElement|string} element: can be either a full HTMLElement or the ID attribute
 * of a DOM node
 * @returns {Object} a Leaflet map object 
 */
function createMap (element) {
    const map = L.map(element, {renderer:L.canvas(), preferCanvas: true}).setView(myCenter, myZoom);
    // now we add the base layer
    // you can change this if you want!
    // if your tiles seem to load very slowly, you may want to generate your own accessToken
    // and insert the value in `accessToken`, below. 
    // see: https://docs.mapbox.com/help/how-mapbox-works/access-tokens/#creating-and-managing-access-tokens

    // to change the tile layer, change the `id` attribute below.
    // some valid options include:
    // mapbox/streets-v11
    // mapbox/outdoors-v11
    // mapbox/light-v10
    // mapbox/dark-v10
    // mapbox/satellite-v9
    // mapbox/satellite-streets-v11

    // I've also created a simple style using studio.mapbox.com, which you can access
    // with this id:
    // titaniumbones/ckhnvk5pl18o71apeq8q1duhc
    // You can modify it yourself using this link: 
    // https://api.mapbox.com/styles/v1/titaniumbones/ckhnvk5pl18o71apeq8q1duhc.html?fresh=true&title=copy&access_token=pk.eyJ1IjoidGl0YW5pdW1ib25lcyIsImEiOiJjazF0bTdlNXQwM3gxM2hwbXY0bWtiamM3In0.FFPm7UIuj_b15xnd7wOQig
    // Here's a green and blue one for good measure:
    // https://api.mapbox.com/styles/v1/titaniumbones/ckhnvqfda18qu19o2oool6h2c.html?fresh=true&title=copy&access_token=pk.eyJ1IjoidGl0YW5pdW1ib25lcyIsImEiOiJjazF0bTdlNXQwM3gxM2hwbXY0bWtiamM3In0.FFPm7UIuj_b15xnd7wOQig
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 12,
        id: 'zhaoyangy/ckhwe8d7v19w019qqyaap3wfn',
        // id: 'titaniumbones/ckhnvk5pl18o71apeq8q1duhc',
        tileSize: 512,
        zoomOffset: -1,
	accessToken: 'pk.eyJ1Ijoiemhhb3lhbmd5IiwiYSI6ImNraHdlNzA3ZDByaHQyem50NDBoZjl1MjYifQ.UyXCxCXCbUZwMM3dXmcfZA'
    })
        .addTo(map);
    return map
}


/**
 * Add Markers to a "layerGroup" and return the populated object
 * @param {Array.<Object>} markerInfo
 * @param {string} markerInfo[].title
 * @param {Array|Object} markerInfo[].position
 * @param {Object} layerGroup
 * @returns {Object} the modified layerGroup object 
 */
function processMarkerLayer (markerInfo, options) {
    let layerGroup = L.layerGroup([], options);
    // iterate over the marker info array, adding to the main marker layer but
    // *also* to another layer if the icon property is set. 
    for (const m of markerInfo) {
        // define a Leaflet marker object for each marker
        // we pass two parameters: a position (2-value array of lat & lng vals)
        // and an object containing marker propertie
        let marker =  L.marker (m.position, {
            // We set the icon 
            icon:   m.icon || layerGroup.options.defaultIcon || L.Icon(),
            title: m.title,
            description: m.description,
            windowContent: m.windowContent //this is obsolete
        });
        let t = assembleTexts(marker);
        marker.bindPopup(t.popup);
        // this seems to be unnecessary on modern browsers for some reason
        //marker.bindTooltip(t.tooltip);
        layerGroup.addLayer(marker);
    }
    return layerGroup;
}

/**
 * create a geoJSON layer and return the geoJSON layer object.
 * If the featureGroup has the non-standard property
 * 'description' it will be explicitly set on the returned object as well.
 * If an individual feature has the property feature.properties.title,
 * then the options.title property will be set on the resultant layer
 * for compatibility with marker layers.
 * The custom property `feature.properties.myColor` will also be used to set line and
 * fill colors.
 * 
 * @param {GeoJSON} jsonData
 * @returns {Object} the newly-created geoJSON layer 
 */
function processJSONLayer (jsonData) {
    return L.geoJSON(jsonData, {
        // the 'style' option is a *function* that modifies some
        // feature properties.  
        // cf https://leafletjs.com/reference-1.5.0.html#geojson-style
        style: function(feature) {
            let c = feature.properties.myColor;
            return {color: c, weight: 3, fillColor: c, fillOpacity: 0.5};
        },
        onEachFeature: function (feature, layer) {
            layer.options.description = '';
            if (feature.properties ) {
                if (feature.properties.title) {
                    layer.options.title = feature.properties.title;
                }
                if (feature.properties.description) {
                    layer.options.description = feature.properties.description;
                }
            }
            let t = assembleTexts(layer);
            layer.bindPopup(t.popup);
            layer.bindTooltip(t.tooltip, {sticky: true});
        },
        description: jsonData.description || "GeoJSON Objects"
    });
}

/**
 * create a layerGroup from an array of individual Layer objects.
 * If the non-standard options `windowContent`, `title`, and/or `description` have been
 * set, they will be used to create a popup window and tooltip now, and
 * to generate legend text in `addLayerToLegendHTML` later on.
 * The `options` parameter should include a `description` property,
 * (NOTE: this is *separate* from the description of the individual layers!!)
 * which will also be used by `addLayerToLegendHTML` and in the layers
 * control box. 
 * @param {} layerArray
 * @param {} options
 * @returns {} 
 */
function processManualLayers (layerArray, options = {description: 'Unnamed Layer'}) {
    for (const l of layerArray) {
        let t = assembleTexts(l);
        l.bindPopup(t.popup);
        l.bindTooltip(t.tooltip, {sticky: true});
    }
    return L.layerGroup(layerArray, options)
}


function assembleTexts (feature) {
    let opts = feature.options,
        tooltip = 'Untitled Tooltip',
        popup = '<h2>Untitled</h2>',
        legend = 'Untitled';
    
    if (opts.title) {
        popup = `<h2>${opts.title}</h2>` + (opts.description || '');
        tooltip = opts.title;
        legend = opts.title;
    }
    if (opts.windowContent) {
        popup = opts.windowContent;
    }
    return {tooltip: tooltip, popup: popup, legend: legend};
}
/**
 * For every element of `layerGroup`, add an entry to the innerHTML of
 * the element matched by `querySelector`, consisting of a div whose
 * `onclick` attribute is a call to `locateMapFeature` which navigates to, and
 * opens the popup window of, that feature.  The link text will be one of `options.infoHTML`,
 * `options.title`, or 'no title', in that order.
 * @param {Array} layerGroup
 * @param {string} querySelector
 * @returns {string} innerHTML content of the legend element 
 */
function addLayerToLegendHTML (layerGroup, el) {
    let output = `<div class="legend-content-group-wrapper"><h2>${layerGroup.options.description}</h2>`;
    for (let l in layerGroup._layers) {
        // this is hideously ugly! very roundabout way
        // to access anonymous marker from outside the map
        let current = layerGroup._layers[l];
        let info = assembleTexts(current).legend;
        output +=  `
<div class="pointer" onclick="locateMapFeature(projectMap._layers[${layerGroup._leaflet_id}]._layers[${l}])"> 
    ${info} 
</div>`;
    }
    output += '</div>'
    el.innerHTML += output;
    return el.innerHTML
}

/* a function that will run when the page loads.  It creates the map
   and adds the existing layers to it. You probably don't need to change this function; 
   instead, change data and variable names above, or change some of the helper functions that
   precede this function.
 */
async function initializeMap() {

    // this one line creates the actual map
    // it calls a simple 2-line function defined above
    projectMap = createMap('map_canvas');
    // set the legend location
    let legendEl = document.querySelector('#map_legend');

    let layerListObject = {};
    // add markers to map and to legend, then add a toggle switch to layers control panel
    for (let l of allLayers) {
        l.addTo(projectMap);
        addLayerToLegendHTML(l, legendEl);
        layerListObject[l.options.description] = l;
    }

   // add a layers control to the map, using the layer list object
    // assigned above
    L.control.layers(null, layerListObject).addTo(projectMap);

    // You'll want to comment this out before handing in, but it makes life a bit easier.
    // while you're developing
    coordHelp();
}

/**
 * pan to object if it's a marker; otherwise use the `fitBounds` method on the feature
 * Then open the marker popup.
 * @param {Object} marker
 */
function locateMapFeature (marker) {
    marker.getLatLng ? projectMap.flyTo(marker.getLatLng(), 10, {animate: true, duration: 3}) : projectMap.fitBounds(marker.getBounds(), {animate: true, duration: 1.5}); 
    marker.openPopup();
}

function coordHelp () {
    projectMap.on('click', function(e) {
        console.log("Lat, Lon : [ " + e.latlng.lat + ", " + e.latlng.lng + " ]")
    });
}

function resetMap (map) {
    map.setView(myCenter, myZoom, {animate: true, duration: 1.5}).closePopups()
}
