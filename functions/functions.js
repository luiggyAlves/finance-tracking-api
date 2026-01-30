 export const addValueReceita = async (desc, value, collection, collectionTotal)=>{
    let descricao = (desc.toLowerCase()).trim()
    let isDuplicated =  await collection.findOne({descricao:descricao})
    if(!isDuplicated){
        await collection.insertOne({"type":"receitas",descricao, value})
        await collectionTotal.updateOne(
        {type:"total"},
        {$inc:{value:value}},
        {upsert:true} 
    )
    }
};

export const addValueDespesa = async (desc, value, collection, collectionTotal)=>{
    let descricao = (desc.toLowerCase()).trim()
    let isDuplicated = await collection.findOne({descricao:descricao})
     
    if(!isDuplicated){
        await collection.insertOne({"type":"despesas", descricao, value})
        let valTotal = await collectionTotal.findOne({type:"total"})
        valTotal = valTotal.value
        if(valTotal>=value){
            await collectionTotal.updateOne(
            {type:"total"},
            {$inc:{value:-value}}
            )
        }
    }
};

export const viewAllReceitas = async (collection)=>{
    const allReceitas = (await collection.find().toArray())
    let ReceitasFormatadas = {};
    for(let i = 0; i<allReceitas.length; i++){
        ReceitasFormatadas[allReceitas[i].descricao] =allReceitas[i].value 
    }
   return (JSON.stringify(ReceitasFormatadas))
};

export const viewAllDespesas = async (collection)=>{
    const allDespesas = (await collection.find().toArray())
    let despesasFormatadas = {}
    for(let i =0; i< allDespesas.length; i++){
        despesasFormatadas[allDespesas[i].descricao] = allDespesas[i].value
    }
    return (JSON.stringify(despesasFormatadas))
}

export const viewTotal = async(collection)=>{
    let total = await collection.findOne({type:"total"})
    return (JSON.stringify({"total":total.value}))
}