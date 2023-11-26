const narmodels = {
    getAll: `
    SELECT 
    * 
    FROM 
    clientes`,

    getByID: `
    SELECT
    *
    FROM
    clientes
    WHERE
    nc= ?
    `,
    addRow:`
    INSERT INTO
    clientes(
        nc,
        nombre,
        apellido,
        activo,
        servicio
    )
    VALUES (
        ?,?,?,?,?
    )`,
getByName:`
    SELECT 
    * 
    FROM 
    clientes 
    WHERE Name =?
    `,

    updatecliente:`
    UPDATE
    clientes
    SET
    nc = ?,
    nombre = ?,
    apellido = ?,
    activo = ?,
    servicio = ?
        WHERE 
        id =?
    `,

    deleteRow:`
    DELETE FROM 
    clientes
    WHERE 
    nc=?
    `,
    
    
}

module.exports=narmodels;