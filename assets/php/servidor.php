<?php
require_once("BBDD_CTRLR.php");

if (isset($_REQUEST['peticion'])) {
    switch ($_REQUEST['peticion']) {
        case "ProductoHombre":           
            $sql = "SELECT * FROM hombre ORDER BY hom_nombre";
            $datos['sql']=$sql;
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);  
            break; 
            case "ProductoMujer":           
                $sql = "SELECT * FROM mujer ORDER BY mu_nombre";
                $datos['sql']=$sql;
                $datos['datos'] = BBDD_CTRLR::Consultas($sql);
                echo json_encode($datos);  
                break;
// filyto para mujer 
    case "FiltroMujerL":           
        $sql = "SELECT * from mujer where mu_talla='L' ORDER BY mu_nombre";
        $datos['sql']=$sql;
        $datos['datos'] = BBDD_CTRLR::Consultas($sql);
        echo json_encode($datos);  
        break; 
    case "FiltroMujerXL":           
        $sql = "SELECT * from mujer where mu_talla='XL' ORDER BY mu_nombre";
        $datos['sql']=$sql;
        $datos['datos'] = BBDD_CTRLR::Consultas($sql);
        echo json_encode($datos);  
        break; 
        case "FiltroMujerXXL":           
            $sql = "SELECT * from mujer where mu_talla='XXL' ORDER BY mu_nombre";
            $datos['sql']=$sql;
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);  
            break; 
            case "FiltroMujerM":           
                $sql = "SELECT * from mujer where mu_talla='M' ORDER BY mu_nombre";
                $datos['sql']=$sql;
                $datos['datos'] = BBDD_CTRLR::Consultas($sql);
                echo json_encode($datos);  
                break;
                
            case "FiltroMujerS":           
                $sql = "SELECT * from mujer where mu_talla='S' ORDER BY mu_nombre";
                $datos['sql']=$sql;
                $datos['datos'] = BBDD_CTRLR::Consultas($sql);
                echo json_encode($datos);  
                break;
//Filtro para hombre
case "FiltroL":           
    $sql = "SELECT * from hombre where hom_talla='L' ORDER BY hom_nombre";
    $datos['sql']=$sql;
    $datos['datos'] = BBDD_CTRLR::Consultas($sql);
    echo json_encode($datos);  
    break; 
case "FiltroXL":           
    $sql = "SELECT * from hombre where hom_talla='XL' ORDER BY hom_nombre";
    $datos['sql']=$sql;
    $datos['datos'] = BBDD_CTRLR::Consultas($sql);
    echo json_encode($datos);  
    break; 
    case "FiltroXXL":           
        $sql = "SELECT * from hombre where hom_talla='XXL' ORDER BY hom_nombre";
        $datos['sql']=$sql;
        $datos['datos'] = BBDD_CTRLR::Consultas($sql);
        echo json_encode($datos);  
        break; 
        case "FiltroM":           
            $sql = "SELECT * from hombre where hom_talla='M' ORDER BY hom_nombre";
            $datos['sql']=$sql;
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);  
            break;
            
        case "FiltroS":           
            $sql = "SELECT * from hombre where hom_talla='S' ORDER BY hom_nombre";
            $datos['sql']=$sql;
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);  
            break;

//login

case "Login":           
    $nombre=$_REQUEST['nombre'];
    $password=$_REQUEST['password'];
    $sql = "SELECT * from usuarios where usu_nombre='${nombre}' AND usu_password=md5('$password')";
    $datos['sql']=$sql;
    $datos['datos'] = BBDD_CTRLR::Consultas($sql);
    echo json_encode($datos);  
    break;

    

    case "CrearCuenta":           
        $nombre=$_REQUEST['nombre'];
        $password=$_REQUEST['password'];
        $sql = "INSERT INTO usuarios VALUES(null,md5('$password'),0,'$nombre')";
        $datos['sql']=$sql;
        $datos['datos'] = BBDD_CTRLR::CRUD($sql,'');
        echo json_encode($datos);  
        break;




        case "EjecutarSQL":
            $sql = $_REQUEST['sql'];
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);  
            break;

            
            case "CategoriaCRUD":
                $sql = $_REQUEST['sql'];
                $devolucion= $_REQUEST['devolucion'];
                $datos['datos'] = BBDD_CTRLR::CRUD($sql, $devolucion);
                echo json_encode($datos);  
                break;
            case "PreguntasCRUD":
                $sql = $_REQUEST['sql'];
                $devolucion= $_REQUEST['devolucion'];
                $datos['datos'] = BBDD_CTRLR::CRUD($sql, $devolucion);
                echo json_encode($datos);  
                break;
                case "HombreCRUD":
                    $sql = $_REQUEST['sql'];
                    $devolucion= $_REQUEST['devolucion'];
                    $datos['datos'] = BBDD_CTRLR::CRUD($sql, $devolucion);
                    echo json_encode($datos);  
                    break;
                    case "MujerCRUD":
                        $sql = $_REQUEST['sql'];
                        $devolucion= $_REQUEST['devolucion'];
                        $datos['datos'] = BBDD_CTRLR::CRUD($sql, $devolucion);
                        echo json_encode($datos);  
                        break;

                        case "RealizarCompraHombre":           
                            $id=$_REQUEST['id'];
                            $sql = "SELECT * from hombre where hom_id=$id";
                            $datos['sql']=$sql;
                            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
                            echo json_encode($datos);  
                            break;
                        
    }        
}

// CargarCategorias

// CargarPreguntas
