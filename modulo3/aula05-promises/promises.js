function myPromise(data){
    return new Promise((resolve,reject)=>{
        if(data=='sephirot'){
            resolve({
                success:true,
                name: 'Sephirot',
                age: 30,
                weapon: 'masamune',
                msg:'concluído'
            })
        }else{
            reject({
                success: false,
                msg: 'perfil não encontrado'
            })
        }
    })
}

function profile(response){
    return new Promise((resolve,reject)=>{
        if(response.success){
            resolve(`nome:${response.name} age:${response.age} weapon: ${response.weapon}`);
        }else{
            reject('falha na obtenção de dados');
        }
    })

}

myPromise('sephirot').then(response=>{
    return profile(response).json()
})