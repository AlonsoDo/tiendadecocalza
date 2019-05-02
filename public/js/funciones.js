function OnMouseHover0(event){
    $("#main_navigation li ul").css("visibility","hidden");
    $("#subNav0").css("visibility","visible");
}
	       
function OnMouseOut0(event){
    $("#subNav0").css("visibility","hidden");
}
	       
function OnMouseHover1(event){
    $("#main_navigation li ul").css("visibility","hidden");
    $("#subNav1").css("visibility","visible");
}
	       
function OnMouseOut1(event){
    $("#subNav1").css("visibility","hidden");
}
	       
function OnMouseHover2(event){
    $("#main_navigation li ul").css("visibility","hidden");
    $("#subNav2").css("visibility","visible");
}
	       
function OnMouseOut2(event){
    $("#subNav2").css("visibility","hidden");
}

function OnMouseHover3(event){
    $("#main_navigation li ul").css("visibility","hidden");
    $("#subNav3").css("visibility","visible");
}
	       
function OnMouseOut3(event){
    $("#subNav3").css("visibility","hidden");
}

function CargarArticulos(data) {  
  
  var dataJson = eval(data);
  var $divProd,$div2Img,$div3Precio,$div4Mas,$div5PrecioAnt,$div6PorCientoDescuento;
  var $img;
  var nCodigo,nReferencia,cNombreFichero,nAnchoImg,nAltoImg,nPrecio,nPrecioAnterior,nPorCientoDescuento;
  
  for(var j in dataJson){    
    
    //Div de productos
    $divProd = $('<div />').addClass('div_conteiner').hover(function(){
      $(this).toggleClass('div_conteiner2');      
    });
    
    //Div contenedora de imagen
    $div2Img = $('<div style="border:0px black solid; width:192px; height:154px; margin:20px 0px 0px 20px;"></div>').appendTo($divProd);
    
    cNombreFichero = dataJson[j].NombreFichero;
    nPrecio = dataJson[j].Precio;
    nPrecioAnterior = dataJson[j].PrecioAnterior;
    nPorCientoDescuento = dataJson[j].PorCientoDescuento
    nCodigo = dataJson[j].Producto;
    
    $img = $('<img />',{id:'MiIdImg'+j,src:'img/productos/'+cNombreFichero,alt:'MyAlt',height:'100%',width:'100%'}).appendTo($div2Img);
        
    // Para Mostrar precio y boton +Mas normal, centrar en div contenedora
    if (nPrecio==nPrecioAnterior){
      
      $div3Precio = $('<div style="float:left; font-size:28px; font-weight:bold; border:0px black solid; width:120px; height:32px; margin:20px 0px 0px 10px;">'+nPrecio+' '+String.fromCharCode(8364)+'</div>').appendTo($divProd);
      $div4Mas = $('<div style="float:left; font-size:24px; font-weight:bold; border:1px black solid; width:70px; height:30px; margin:20px 0px 0px 18px;">+Mas</div>').appendTo($divProd);
          
    }else{
      
      $div3Precio = $('<div style="float:left; font-size:28px; font-weight:bold; border:0px black solid; width:120px; height:32px; margin:8px 0px 0px 10px;">'+nPrecio+' '+String.fromCharCode(8364)+'</div>').appendTo($divProd);
      $div4Mas = $('<div style="float:left; font-size:24px; font-weight:bold; border:1px black solid; width:70px; height:30px; margin:8px 0px 0px 18px;">+Mas</div>').appendTo($divProd);
    
      $div5PrecioAnterior = $('<div style="color:red; float:left; font-size:20px; font-weight:bold; border:0px black solid; width:90px; height:22px; margin:2px 0px 0px 18px;"><strike>'+nPrecioAnterior+'</strike></div>').appendTo($divProd);
      $div6PorCientoDescuento = $('<div style="color:red; float:left; font-size:18px; font-weight:bold; border:0px black solid; width:50px; height:20px; margin:6px 0px 0px 18px;">'+'- '+nPorCientoDescuento+'%'+'</div>').appendTo($divProd);
      
      if (nPorCientoDescuento==0) {
        $div6PorCientoDescuento.hide();
        //Recolocar Boton Mas
        //$div4Mas.css("margin","20px 0px 0px 18px");
      }      
            
    }    
    
    $div4Mas.addClass('div_conteiner3').hover(function(){
      $(this).toggleClass('div_conteiner4');      
    });
    
    $div4Mas.bind('click',{codigo:nCodigo,NombreFichero:cNombreFichero},function(event){
      
      var data = event.data;                
      var nCodigoProducto = data.codigo;
      var cFicheroImg = data.NombreFichero;
      
      //Cargar datos del producto
      CargarDatosProducto(nCodigoProducto,cFicheroImg);
      
    });     
        
    //Añadir divs de productos al container
    $("#Conteiner").append($divProd);    
    
  }  
  
  $divProd.css('margin-bottom','20px');  
  
}

function CargarDatosProducto(CodigoProducto,cNombreFichero){
  
    //alert("Codigo="+CodigoProducto);
    
  $("#Conteiner").html('');  
  $("#Conteiner").html('<div id="DivProd" style="background:white; float:left; border:0px black solid; width:700px; height:430px; margin:20px 0px 0px 20px;"></div>');
  
  $("#DivProd").html('<div id="DivImg" style="border:1px black solid; width:250px; height:200px; margin:20px 0px 0px 20px;"></div>');
  
  //alert(cNombreFichero);
  
  $("#DivImg").html('<img src="img/productos/'+cNombreFichero+'">');
  
  
  
  
  
}