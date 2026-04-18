

export function Lista_Suspensa ({itens}){
    return(
        <select>
            <option value="" disabled></option>
            {itens.map(function (item){
                return <option key={item.id} value={item.id}>
                    {item.nome}
                </option>
            })}
        </select>
    )
}