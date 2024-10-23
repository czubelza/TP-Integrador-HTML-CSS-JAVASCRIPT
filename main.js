/*import { handleGetProductsTostore } from './src/views/store';
import {renderCategories} from './src/services/categories';
import { closeModal, openModal } from './src/views/modal';
import './style.css'
import { setInLocalStorage } from './src/persistence/localstorage';
*/
import { handleGetProductsTostore } from './src/views/store';
import {renderCategories} from './src/services/categories';
import {  openModal } from './src/views/modal';
import './style.css'
import { initProducts } from './src/services/products'; 
import { handleSearchProductByName } from './src/services/searchBar';

//aplication

export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) =>{
    categoriaActiva = categoriaIn;
};

export let productoActivo = null;
export const setproductoActivo = (productoIn) =>{
    productoActivo = productoIn;
};

document.addEventListener('DOMContentLoaded', () => {
    handleGetProductsTostore();
    renderCategories();

    // Header
    const buttonAdd = document.getElementById("buttonAddElement");
    buttonAdd.addEventListener('click', () => {
        openModal();
    });

    // Inicializar productos
    initProducts();
});

/*
handleGetProductsTostore(); 
renderCategories();
 

//header
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener('click', ()=>{
 openModal();
});*/




//buttonsearch

const buttonsearch = document.getElementById("buttonSearch");
buttonsearch.addEventListener('click', ()=>{
    handleSearchProductByName();
});



