class Usuario {
    constructor(nombres, apellidos, edad, celular, email) {
      this.nombres = nombres;
      this.apellidos = apellidos;
      this.edad = edad;
      this.celular = celular;
      this.email = email;
    }

    get getNombres() {
        return this.nombres
    }

    setNombres(nombres) {
        this.nombres = nombres
    }

    get getApellidos() {
        return this.apellidos
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos
    }

    get getEdad() {
        return this.edad
    }

    setEdad(edad) {
        this.edad = edad
    }

    get getCelular() {
        return this.celular
    }

    setCelular(celular) {
        this.celular = celular
    }

    get getEmail() {
        return this.email
    }

    setEmail(email) {
        this.email = email
    }

    get verInfo() {
        return "Nombres: " + this.nombres + "\nApellidos: " + this.apellidos + "\nEdad: " + this.edad + "\nCelular: " + this.celular + "\nEmail: " + this.email
    }
  }