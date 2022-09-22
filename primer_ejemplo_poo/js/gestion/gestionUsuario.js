class GestionUsuarios {
    constructor() {
        this.puntero = 0;
        this.usuarios = []
    }

    addUsuario(usuario) {
        this.usuarios.push(usuario);
        this.puntero++;
    }

    get showUsuarios() {
        let i = 1;
        let cad = "";
        this.usuarios.forEach(function(usuario) {
            if (i !== 1){
                cad = cad + "\n"
            }
            cad = cad + "--------------------------usuario " + i + "--------------------------";
            cad = cad + "\n" + usuario.verInfo;
            i++;
        });
        return cad;
    }
}