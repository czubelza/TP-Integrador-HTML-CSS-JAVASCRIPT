//STORE

import { openModal} from "../views/modal";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { setproductoActivo } from "../../main";

//funtion que se encarga de traer los elementos y llamar al render
export const handleGetProductsTostore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
};
//se encarga de filtrar y renderizar la seccion con todos sus respectivos elementos
export const handleRenderList = (productosIn) => {
    // filtrado de arrays por categoría
    const burgers = productosIn.filter((el)=> el.categories === "Hamburguesas");
    const papas = productosIn.filter((el)=> el.categories === "Papas");
    const gaseosas = productosIn.filter((el)=> el.categories === "Gaseosas");
   //funcion que renderiza los elementos de la sección
    const renderProductGroup = (productos, title) =>{
     if(productos.length > 0){
            const productosHTML = productos.map((producto, index)=>{

                return`<div class='containerTargetItem' id='product-${producto.categories}-${index}'>
                <div>
                <img src='${producto.imagen}'/>
                <div>
                <h2>${producto.nombre}</h2>
                </div>
                <div class='targetProps'>
                <p><b>Precio:</b> $ ${producto.precio}</p>
                </div>

                </div>
                </div>`;
            });
            //retornar la sección con todos los elementos dentro
                return `
                <section class ='sectionStore'>
                <div class ='containerTitleSection'>
                    <h3>${title} </h3>
                </div>
                <div class ='containerProductStore'>
                ${productosHTML.join("")}
                </div>

                </section>
                `;
        }else{
            return "";          
        }
    };
    //renderizar cada producto dentro de su categoria 
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML =`
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup (gaseosas, "Gaseosas")}
  
    `;
    //se añaden los eventos de manera dinámica
    const addEvents = (productsIn) => {
        if (productsIn) {
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(
                    `product-${element.categories}-${index}`
                );
                //console.log(productContainer);
                productContainer.addEventListener("click", () => {
                    //console.log("productoActivo", element);
                    setproductoActivo(element);//acá cambiar importacion
                    openModal();// acá cambiar importacion
                });
            });
        }
    };

    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};