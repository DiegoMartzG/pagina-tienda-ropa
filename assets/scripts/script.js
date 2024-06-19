let usuario_logueado=null;
let total=0
let carrito=[];
function fProductoHombre(){
    const URL = 'assets/php/servidor.php?peticion=ProductoHombre';
    let html= ""   
    if (usuario_logueado!=null && usuario_logueado.usu_admin==1) {
           
          html+=`<i class="fas fa-plus" onclick="fFromCrudHombre('a',0,'',0.0,'','',0)"></i>`
          
        }
        console.log("Bienvenido administrador", usuario_logueado)
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
           // let html= ""
            let talla=`<div>TALLA`
            talla+= ` <div class="talla">`
            talla+=`<div onclick="fFiltroXXL()">XXL</div>`
            talla+=`<div onclick="fFiltroXL()">XL</div>`
            talla+=` <div onclick="fFiltroL()">L</div>`
            talla+=`<div onclick="fFiltroM()">M</div>`
            talla+=`<div onclick="fFiltroS()">S</div>`
            talla+=`</div>`
            talla+=`</div>`
            
                data.datos.forEach(item => {
                
                html+=`<div class="prendas_hombre">`
                html+=`<p>${item.hom_nombre}</p>`;
                html+=`<p>${item.hom_talla}</p>`;
                html+=`<p>${item.hom_nombre}</p>`;
                html+=`<p>${item.hom_color}</p>`;
                html+=`<p>${item.hom_precio}</p>`;
                html+=`</div>`
                html+=`<div class="comprar" onclick="fRealizarCompra(${item.hom_id},${item.hom_precio})" ><i class="fas fa-euro-sign"></i></div>`
                if (usuario_logueado!=null && usuario_logueado.usu_admin==1) {
                html+=`<i class="fas fa-pen-fancy" onclick="fFromCrudHombre('m',${item.hom_id},'${item.hom_nombre}',${item.hom_precio},'${item.hom_talla}','${item.hom_color}',${item.hom_stock})"></i>`
                html+=`<i class="fas fa-minus-circle" onclick="fFromCrudHombre('e',${item.hom_id},'${item.hom_nombre}',${item.hom_precio},'${item.hom_talla}','${item.hom_color}',${item.hom_stock})" ></i>`
                }
            });
                document.querySelector("aside").innerHTML=html;
                document.querySelector("section").innerHTML=talla;
            })
}
// filtro etiqueta hombre
function  fFiltroL(){
    const URL = 'assets/php/servidor.php?peticion=FiltroL';
        
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            let html="";
            data.datos.forEach(item => {
            html+=`<div class="prendas_hombre">`
            html+=`${item.hom_nombre}`;
            html+=`${item.hom_talla}`;
            html+=`${item.hom_nombre} `;
            html+=`${item.hom_color}`;
            html+=`${item.hom_precio}`;
            html+=`</div>`
        });
        document.querySelector("aside").innerHTML=html
        })
}
// XL
function  fFiltroXL(){
    const URL = 'assets/php/servidor.php?peticion=FiltroXL';
        
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            let html="";
            data.datos.forEach(item => {
            html+=`<div class="prendas_hombre">`
            html+=`${item.hom_nombre}`;
            html+=`${item.hom_talla}`;
            html+=`${item.hom_nombre} `;
            html+=`${item.hom_color}`;
            html+=`${item.hom_precio}`;
            html+=`</div>`
        });
        document.querySelector("aside").innerHTML=html
        })
}
//XXL
function  fFiltroXXL(){
    const URL = 'assets/php/servidor.php?peticion=FiltroXXL';
        
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            let html="";
            data.datos.forEach(item => {
            html+=`<div class="prendas_hombre">`
            html+=`${item.hom_nombre}`;
            html+=`${item.hom_talla}`;
            html+=`${item.hom_nombre} `;
            html+=`${item.hom_color}`;
            html+=`${item.hom_precio}`;
            html+=`</div>`
        });
        document.querySelector("aside").innerHTML=html
        })
}
//M
function  fFiltroM(){
    const URL = 'assets/php/servidor.php?peticion=FiltroM';
        
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            let html="";
            data.datos.forEach(item => {
            html+=`<div class="prendas_hombre">`
            html+=`${item.hom_nombre}`;
            html+=`${item.hom_talla}`;
            html+=`${item.hom_nombre} `;
            html+=`${item.hom_color}`;
            html+=`${item.hom_precio}`;
            html+=`</div>`
        });
        document.querySelector("aside").innerHTML=html
        })
}
//S
function  fFiltroS(){
    const URL = 'assets/php/servidor.php?peticion=FiltroS';
        
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            let html="";
            data.datos.forEach(item => {
            html+=`<div class="prendas_hombre">`
            html+=`${item.hom_nombre}`;
            html+=`${item.hom_talla}`;
            html+=`${item.hom_nombre} `;
            html+=`${item.hom_color}`;
            html+=`${item.hom_precio}`;
            html+=`</div>`
        });
        document.querySelector("aside").innerHTML=html
        })
}
// mujer
function fProductoMujer(){
    const URL = 'assets/php/servidor.php?peticion=ProductoMujer';
    let html=""   
    if (usuario_logueado!=null && usuario_logueado.usu_admin==0) {
            html+=`<i class="fas fa-plus" onclick="fFromCrudHombre('a',0,'',0.0,'','',0)"></i>`
        }        
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
        //let html=""
        let talla=`<div>TALLA`
        talla+= ` <div class="talla">`
        talla+=`<div onclick="fFiltroMujerXXL()">XXL</div>`
        talla+=`<div onclick="fFiltroMujerXL()">XL</div>`
        talla+=` <div onclick="fFiltroMujerL()">L</div>`
        talla+=`<div onclick="fFiltroMujerM()">M</div>`
        talla+=`<div onclick="fFiltroMujerS()">S</div>`
        talla+=`</div>`
        talla+=`</div>`
        data.datos.forEach(item => {
            html+=`<div class="prendas_mujer">`
            html+=`<p>${item.mu_nombre}</p>`;
            html+=`<p>${item.mu_talla}</p>`;
            html+=`<p>${item.mu_nombre}</p>`;
            html+=`<p>${item.mu_color}</p>`;
            html+=`<p>${item.mu_precio}</p>`;
            html+=`</div>`
            html+=`<div class="comprar" onclick="fRealizarCompra(${item.mu_id},${item.mu_precio})"><i class="fas fa-euro-sign"></i></div>`
            if (usuario_logueado!=null && usuario_logueado.usu_admin==1) {
                html+=`<i class="fas fa-pen-fancy" onclick="fFromCrudMujer('m',${item.mu_id},'${item.mu_nombre}',${item.mu_precio},'${item.mu_talla}','${item.mu_color}',${item.mu_stock})"></i>`
                html+=`<i class="fas fa-minus-circle" onclick="fFromCrudMujer('e',${item.mu_id},'${item.mu_nombre}',${item.mu_precio},'${item.mu_talla}','${item.mu_color}',${item.mu_stock})" ></i>`
                }

        });
        document.querySelector("aside").innerHTML=html;
        document.querySelector("section").innerHTML=talla;
        })
}
//filtro mujer
function  fFiltroMujerL(){
    const URL = 'assets/php/servidor.php?peticion=FiltroMujerL';
        
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            let html="";
            data.datos.forEach(item => {
            html+=`<div class="prendas_mujer">`
            html+=`<p>${item.mu_nombre}</p>`;
            html+=`<p>${item.mu_talla}</p>`;
            html+=`<p>${item.mu_nombre}</p>`;
            html+=`<p>${item.mu_color}</p>`;
            html+=`<p>${item.mu_precio}</p>`;
            html+=`</div>`
        });
        document.querySelector("aside").innerHTML=html
        })
}
// XL
function  fFiltroMujerXL(){
    const URL = 'assets/php/servidor.php?peticion=FiltroMujerXL';
        
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            let html="";
            data.datos.forEach(item => {
            html+=`<div class="prendas_mujer">`
            html+=`<p>${item.mu_nombre}</p>`;
            html+=`<p>${item.mu_talla}</p>`;
            html+=`<p>${item.mu_nombre}</p>`;
            html+=`<p>${item.mu_color}</p>`;
            html+=`<p>${item.mu_precio}</p>`;
            html+=`</div>`
        });
        document.querySelector("aside").innerHTML=html
        })
}
//XXL
function  fFiltroMujerXXL(){
    const URL = 'assets/php/servidor.php?peticion=FiltroMujerXXL';
        
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            let html="";
            data.datos.forEach(item => {
               let stock=item.mu_stock;
                if (stock == 0) {
                    
                
            html+=`<div class="prendas_mujer">`
            html+=`<p>${item.mu_nombre}</p>`;
            html+=`<p>${item.mu_talla}</p>`;
            html+=`<p>${item.mu_nombre}</p>`;
            html+=`<p>${item.mu_color}</p>`;
            html+=`<p>${item.mu_precio}</p>`;
            html+=`</div>`
            html+=`<div class="no_talla">No ha Stock actualmente lo sentimos</div>`
                }else{
                html+=`<div class="prendas_mujer">`
                html+=`<p>${item.mu_nombre}</p>`;
                html+=`<p>${item.mu_talla}</p>`;
                html+=`<p>${item.mu_nombre}</p>`;
                html+=`<p>${item.mu_color}</p>`;
                html+=`<p>${item.mu_precio}</p>`;
                html+=`</div>`
                }    
        });
        
        document.querySelector("aside").innerHTML=html
        })
}
//M
function  fFiltroMujerM(){
    const URL = 'assets/php/servidor.php?peticion=FiltroMujerM';
        
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            let html="";
            data.datos.forEach(item => {
            html+=`<div class="prendas_mujer">`
            html+=`<p>${item.mu_nombre}</p>`;
            html+=`<p>${item.mu_talla}</p>`;
            html+=`<p>${item.mu_nombre}</p>`;
            html+=`<p>${item.mu_color}</p>`;
            html+=`<p>${item.mu_precio}</p>`;
            html+=`</div>`
        });
        document.querySelector("aside").innerHTML=html
        })
}
//S
function  fFiltroMujerS(){
    const URL = 'assets/php/servidor.php?peticion=FiltroMujerS';
        
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            let html="";
            data.datos.forEach(item => {
            html+=`<div class="prendas_mujer">`
            html+=`<p>${item.mu_nombre}</p>`;
            html+=`<p>${item.mu_talla}</p>`;
            html+=`<p>${item.mu_nombre}</p>`;
            html+=`<p>${item.mu_color}</p>`;
            html+=`<p>${item.mu_precio}</p>`;
            html+=`</div>`
        });
        document.querySelector("aside").innerHTML=html
        })
}
// Modal
function fMostrarForm(formulario) {
    // Ocultar todos los formularios
    let lista_formularios = document.querySelectorAll("#div_modal > div");
    lista_formularios.forEach(item => {
        item.style.display = 'none';
    });
    // Mostrar el que quiero
    document.querySelector(formulario).style.display = 'block';
    // Mostrar la modal
    document.querySelector("#div_modal").style.display = 'flex';
}

//cancelar
function fCerrar(){
    document.querySelector("#div_modal").style.display="none";
}
//login
function fLogin(){
    let nombre=document.querySelector("#usu_nombre").value;
    let password=document.querySelector("#usu_password").value;
    let URL = 'assets/php/servidor.php?peticion=Login';
    URL += "&nombre=" + nombre;
    URL += "&password=" + password;
    fetch(URL)
     .then((response) => response.json())
     .then((data) => {
         console.log(data);
         
         // Si es correcto

         if (data.datos.length == 0){
             document.querySelector("#usu_error").innerHTML = "Acceso denegado";
             return;
         }
         console.log("no te has logueado")
         usuario_logueado= data.datos[0];
         console.log(usuario_logueado)
         document.querySelector("#div_modal").style.display = "none";
             
     })
}
//Crear Cuenta
function fCrearCuenta(){
    let nombre=document.querySelector("#ccusu_nombre").value;
    let password=document.querySelector("#ccusu_password").value;
    let rpassword=document.querySelector("#rccusu_password").value;
    let URL = 'assets/php/servidor.php?peticion=CrearCuenta';
    URL += "&nombre=" + nombre;
    URL += "&password=" + password;
    URL += "&rpassword=" + rpassword;
    
    
    if (nombre=="" || password=="" || rpassword=="" ){
                
        document.querySelector("#div_form_cuenta>#rdiv_error").innerHTML = "Debes rellenar todos los ESPACIOS";
        return;
    } 
    if (password != rpassword){
        document.querySelector("#rdiv_error").innerHTML = "Los password no coinciden";
        return;
    }
    
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            
            console.log("REGISTRO",data);  
            
            usuario_logueado= data.datos[0];
            console.log(usuario_logueado)
            document.querySelector("#div_modal").style.display = "none";
     })
}
// CRUD para hombre

function fFromCrudHombre(estado,id,nombre,precio,talla,color,stock){
        document.querySelector("#hom_id").value=id;
        document.querySelector("#hom_nombre").value=nombre;
        document.querySelector("#hom_precio").value=precio;
        document.querySelector("#hom_talla").value=talla;
        document.querySelector("#hom_color").value=color;
        document.querySelector("#hom_stock").value=stock;
    if (estado=='a') {
        document.querySelector("#formulario_añadir_hombre").style.display="block"
        document.querySelector("#formulario_eliminar_hombre").style.display="none"
        document.querySelector("#formulario_modificar_hombre").style.display="none"
    }
    if (estado=='e') {
        document.querySelector("#formulario_añadir_hombre").style.display="none"
        document.querySelector("#formulario_eliminar_hombre").style.display="block"
        document.querySelector("#formulario_modificar_hombre").style.display="none"
    }
    if (estado=='m') {
        document.querySelector("#formulario_añadir_hombre").style.display="none"
        document.querySelector("#formulario_eliminar_hombre").style.display="none"
        document.querySelector("#formulario_modificar_hombre").style.display="block"
    }
    fMostrarForm("#div_form_contenido_hombre");
}
//realizar el crud
function fCRUDHombre(operacion){
    let id=document.querySelector("#hom_id").value
    let nombre=document.querySelector("#hom_nombre").value
    let precio=document.querySelector("#hom_precio").value
    let talla=document.querySelector("#hom_talla").value
    let color=document.querySelector("#hom_color").value
    let stock=document.querySelector("#hom_stock").value
    let sql=""
    let devolucion=""
    if (operacion=='a') {
        sql= `INSERT INTO hombre VALUES (null,'${nombre}',${precio},'${talla}','${color}',${stock})`;
        devolucion="i"
    }
    if (operacion=='e') {
        sql=`DELETE FROM hombre WHERE hom_id=${id}`
    }
    if (operacion=='m') {
        sql=`UPDATE hombre SET hom_stock=${id},hom_color='${color}',hom_talla='${talla}',hom_precio=${precio},hom_nombre='${nombre}' WHERE hom_id=${id}`;
    }

    console.log(sql);
    let URL = 'assets/php/servidor.php?peticion=HombreCRUD';
    URL+="&sql="+ sql;
    URL+="&devolucion=" + devolucion;
    
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log("CRUD hombre", data);  
            fCerrar();
            
        })
        .finally( ()=> {
            // fGeneraCombo("#as_curso","as_cur_id");
            // fGeneraCombo("#al_curso","al_cur_id");
            // fMostrarCursos();
            fProductoHombre()
        })
}
// crud mujer
function fFromCrudMujer(operacion,id,nombre,precio,talla,color,stock){
document.querySelector("#mu_id").value=id
document.querySelector("#mu_nombre").value=nombre
document.querySelector("#mu_precio").value=precio
document.querySelector("#mu_talla").value=talla
document.querySelector("#mu_color").value=color
document.querySelector("#mu_stock").value=stock
if (operacion=='a') {
    document.querySelector("#formulario_añadir_mujer").style.display="block";
    document.querySelector("#formulario_eliminar_mujer").style.display="none";
    document.querySelector("#formulario_modificar_mujer").style.display="none";
}
if (operacion=='e') {
    document.querySelector("#formulario_añadir_mujer").style.display="none";
    document.querySelector("#formulario_eliminar_mujer").style.display="block";
    document.querySelector("#formulario_modificar_mujer").style.display="none";
}
if (operacion=='m') {
    document.querySelector("#formulario_añadir_mujer").style.display="none";
    document.querySelector("#formulario_eliminar_mujer").style.display="none";
    document.querySelector("#formulario_modificar_mujer").style.display="block";
}
fMostrarForm("#div_form_contenido_mujer");
}
function fCRUDMujer(operacion){
    let id=document.querySelector("#mu_id").value
    let nombre=document.querySelector("#mu_nombre").value
    let precio=document.querySelector("#mu_precio").value
    let talla=document.querySelector("#mu_talla").value
    let color=document.querySelector("#mu_color").value
    let stock=document.querySelector("#mu_stock").value
    let sql=""
    let devolucion=""
    if (operacion=='a') {
        sql= `INSERT INTO mujer VALUES (null,'${nombre}',${precio},'${talla}','${color}',${stock})`;
        devolucion="i"
    }
    if (operacion=='e') {
        sql=`DELETE FROM mujer WHERE mu_id=${id}`
    }
    if (operacion=='m') {
        sql=`UPDATE mujer SET  mu_stock=${id}, mu_color='${color}', mu_talla='${talla}', mu_precio=${precio}, mu_nombre='${nombre}' WHERE  mu_id=${id}`;
    }

    console.log(sql);
    let URL = 'assets/php/servidor.php?peticion=MujerCRUD';
    URL+="&sql="+ sql;
    URL+="&devolucion=" + devolucion;
    
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log("CRUD hombre", data);  
            fCerrar();
            
        })
        .finally( ()=> {
            // fGeneraCombo("#as_curso","as_cur_id");
            // fGeneraCombo("#al_curso","al_cur_id");
            // fMostrarCursos();
            fProductoHombre()
        })
}
function fRealizarCompra(id,precio){
    document.querySelector("#hom_id").value=id;
    document.querySelector("#hom_precio").value=precio;
     
    let URL = 'assets/php/servidor.php?peticion=ProductoHombre';
    console.log("total", total);
    total= total+precio;
    document.querySelector("#total_compra").innerHTML=total
    fMostrarForm("#div_form_total_compra");
}
function fCancelarConpra(){
    total=0;
    document.querySelector("#total_compra").innerHTML=total + "compra cancelada presione el boton cancelar para volver a ver los productos";
    setTimeout(fMostrarForm("#div_form_total_compra"),300);
}
function fFinalizarCompra(total,id,precio,talla,nombre){
    carrito=[];
    document.querySelector("#total_a_pagar").innerHTML=total;
    document.querySelector("#precio_producto").innerHTML=id;
    document.querySelector("#precio_producto").innerHTML=precio;
    document.querySelector("#talla_producto").innerHTML=talla;
    document.querySelector("#nombre_producto").innerHTML=nombre;
    let URL = 'assets/php/servidor.php?peticion=RealizarCompra';
    URL+="&carrito="+ carrito;
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            // Construir el HTML para mostrar los productos comprados y el total a pagar
            let productosHTML = "";
            carrito.forEach(item => {
                productosHTML += `<div class="producto">
                                    <div><strong>Nombre:</strong> ${item.nombre}</div>
                                    <div><strong>Precio:</strong> ${item.precio}€</div>
                                    <div><strong>Talla:</strong> ${item.talla}</div>
                                  </div>`;
            });

            // Mostrar el HTML en el elemento correspondiente
            document.querySelector("#productos_comprados").innerHTML = productosHTML;
            document.querySelector("#total_a_pagar").innerHTML = total;
            fMostrarForm("#finalizar_compra");
        })
}