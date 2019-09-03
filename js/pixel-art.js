let nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
let paleta = document.getElementById("paleta");
let grillaPixel = document.getElementById("grilla-pixeles");

function colores(){
 for(var i=0; i<nombreColores.length; i++)
 { var nuevoDiv=document.createElement("div");
 nuevoDiv.classList.add("color-paleta");
 nuevoDiv.style.backgroundColor=(nombreColores[i]);
 paleta.appendChild(nuevoDiv);
};
};

function grilla(){
for(var i=0;i<1750; i++){
    var Div = document.createElement("div");
    grillaPixel.appendChild(Div);
  };
};

let indicador= document.getElementById("indicador-de-color");
paleta.addEventListener("click",cambiarColor);

function cambiarColor(e) {
indicador.style.backgroundColor= e.target.style.backgroundColor;
  };
  
grillaPixel.addEventListener("click",pintar); 

function pintar(e){
  e.target.style.backgroundColor= indicador.style.backgroundColor;
  };

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
let colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', MostrarColor);
function MostrarColor (e) {
  indicador.style.backgroundColor = e.target.value.backgroundColor;  
     // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicador.style.backgroundColor = colorActual;
  };

  /*EVENTOS DEL MOUSE*/
  let mouse = false;
 
  grillaPixel.addEventListener("mousedown",Apretar);
  grillaPixel.addEventListener("mouseup", Soltar);
  grillaPixel.addEventListener("mouseover", Mover);

  function Apretar(e){
    mouse=true;
  }
 
  function Soltar(e) {
    mouse=false;
   }

  function Mover(e){
    if (mouse){
      pintar(e);
    }
  }

  /*BORRAR*/
  $(document).ready(function(){
    $("#borrar").click(function(){
      let grillaBorrada =$("#grilla-pixeles div").animate({"backgroundColor":"white"},2500);
    });
  });

  /*CARGAR SUPERHEROES*/
  
$("#batman").click(function(){
  cargarSuperheroe(batman);
})

$("#wonder").click(function(){
  cargarSuperheroe(wonder);
})

$("#flash").click(function(){
  cargarSuperheroe(flash);
})

$("#invisible").click(function(){
  cargarSuperheroe(invisible);
})

/*GUARDAR*/
$("#guardar").click(function(){
  guardarPixelArt();
})

window.onload = function(){
  colores();
  grilla();
  
  }
