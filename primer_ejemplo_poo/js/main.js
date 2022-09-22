const usuario1 = new Usuario("Tony", "Stark", 24, "987654321", "ironman@prueba.com");
const usuario2 = new Usuario("Steve", "Rogers", 30, "999999999", "capamerica@prueba.com");
const usuario3 = new Usuario("Bruce", "Wayne", 21, "999999990", "batman@prueba.com");
//console.log(usuario1.verInfo)
usuario1.setApellidos("Montana")

let gestion = new GestionUsuarios();
gestion.addUsuario(usuario1);
gestion.addUsuario(usuario2);
gestion.addUsuario(usuario3);
gestion.deleteUltimoUsuario;
console.log(gestion.showUsuarios);