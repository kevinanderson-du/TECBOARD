

export function Lista_Suspensa ({itens}){
    return(
        <select defaultValue="">
            <option value="" disabled>
                Selecione um evento.
            </option>
            {itens.map(function (item){
                return <option key={item.id} value={item.id}>
                    {item.nome}
                </option>
            })}
        </select>
    )
}