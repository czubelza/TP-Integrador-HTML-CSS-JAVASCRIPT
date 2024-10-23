
//=================Productos
import Swal from "sweetalert2";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { handleGetProductsTostore, handleRenderList } from "../views/store";
import { closeModal } from "../views/modal";
import { productoActivo } from "../../main";

export const initProducts = () => {
    // Guardar
    const acceptButton = document.getElementById("acceptbutton");
    acceptButton.addEventListener('click', () => {
        handleSaveOrModifyElements();
    });
};


//funcion de guardar
const handleSaveOrModifyElements = ()=>{
    const nombre = document.getElementById("name").value, 
    imagen = document.getElementById("imag").value,
     precio = document.getElementById("precio").value,
     categories = document.getElementById("categoria").value;
     /*console.log({
        nombre,
        imagen,
        precio,
        categories
     });*/
    let object = null;
     if(productoActivo){
        object ={
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories,
        };
     }else{
        
            object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories,
         };
     }

     Swal.fire({
        title: "Correcto!",
        text: "Producto Agregado Correctamente!",
        icon: "success"
      });

     setInLocalStorage(object);//aca importar 
     handleGetProductsTostore();//aca importar
     closeModal();//aca importar

};

//eliminar un elemento

export const handleDeleteProduct = () => {

    Swal.fire({
        title: "¿Desea Eliminar el Producto?",
        text: "Eliminando el producto no lo podrá recuperar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar esto!",
        cancelButtonText:"Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Eliminado!",
                text: "El Producto fue eliminado",
                icon: "Realizado"
              });
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id);
            //setear el nuevo array
            localStorage.setItem("products", JSON.stringify(result));
            const newproducts = handleGetProductLocalStorage();
            handleRenderList(newproducts);
            closeModal();
        }else{
            closeModal();
        }
      });




    /*const products = handleGetProductLocalStorage();
    const result = products.filter((el) => el.id !== productoActivo.id);
    //setear el nuevo array
    localStorage.setItem("products", JSON.stringify(result));
    const newproducts = handleGetProductLocalStorage();
    handleRenderList(newproducts);
    closeModal();*/

};
