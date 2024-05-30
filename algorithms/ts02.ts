function identity<Type>(params: Type): Type {
    if(typeof params === 'string'){
        console.log(params.length);
    }
    return params
}

identity("sdjndlsdk");
