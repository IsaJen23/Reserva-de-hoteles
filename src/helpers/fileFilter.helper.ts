export const fileFilter = (
    req: Express.Request,
    file: Express.Multer.File,
    callback,
    ) => {
    //si el archivo no existe o no viene entonces:
    if(!file) return callback(new Error('Archivo vacío'), false);
    
    const fileExtension = file.mimetype.split('/')[1];
    
    //extensiones validas
    const validExtension = ['jpg', 'png','jpeg', 'JPG', 'PNG'];
    
    //comprobamos que sea una extensión válida
    if(validExtension.includes(fileExtension)){
        return callback(null, true);
    }
    
    callback(null, false);

};