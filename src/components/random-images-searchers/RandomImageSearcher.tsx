// Lista de nombres de archivo que están en la carpeta 'public/images'
const imageList = [
    '../../../../public/images-to-show/0.jpg',
    '../../../../public/images-to-show/1.jpg',
    '../../../../public/images-to-show/2.jpg',
    '../../../../public/images-to-show/3.jpg',
    '../../../../public/images-to-show/4.jpg',
    '../../../../public/images-to-show/5.jpg',
    
    // Agrega aquí los nombres de los demás archivos
  ];
  
  // Array que mantendrá las imágenes restantes
  let remainingImages = [...imageList];
  
  // Función para obtener una ruta de imagen aleatoria sin repeticiones
  export const getRandomImagePath = (): string => {
    if (remainingImages.length === 0) {
      // Reinicia la lista cuando se han mostrado todas las imágenes
      remainingImages = [...imageList];
    }
    
    // Selecciona un índice aleatorio de `remainingImages`
    const randomIndex = Math.floor(Math.random() * remainingImages.length);
    const selectedImage = remainingImages[randomIndex];
  
    // Elimina la imagen seleccionada de `remainingImages`
    remainingImages = remainingImages.filter((_, index) => index !== randomIndex);
  
    // Devuelve la ruta completa a la imagen
    return `/images/${selectedImage}`;
  };
  