
/* popup*/

import { productoActivo, setproductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";


const buttonCancel= document.getElementById("cancelbutton");
buttonCancel.addEventListener('click', ()=>{
    handleCancelButton();
});

const handleCancelButton = ()=>{
    closeModal();

}

// funciones abrir cerrar modal
export const openModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display= "flex";
    const buttonDelete = document.getElementById("deletebutton")
    if(productoActivo){
        buttonDelete.style.display = "block";
    }else{
        buttonDelete.style.display = "none";
    }
    if(productoActivo){
        const nombre = document.getElementById("name"), 
        imagen = document.getElementById("imag"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");
        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categories.value = productoActivo.categories;
    }
};

export const closeModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display= "none";
    setproductoActivo(null);
    resetModal();
};


export const resetModal = () => {
    const nombre = document.getElementById("name"), 
    imagen = document.getElementById("imag"),
     precio = document.getElementById("precio"),
     categories = document.getElementById("categoria");
     nombre.value ="";
     imagen.value = "";
     precio.value = 0;
     categories.value = "Seleccione una categoría"
     

} 
const deleteButton = document.getElementById("deletebutton");
deleteButton.addEventListener('click', () => {
    handlebuttonDelete();
});

const handlebuttonDelete = () => {
    handleDeleteProduct()
};
