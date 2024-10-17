describe('Pruebas de Facebook', () => {
    beforeEach(() => {
        cy.visit('https://www.facebook.com'); // URL de Facebook
    });

    it('Verificar que la página de inicio de sesión se carga correctamente', () => {
        // Caso positivo
        cy.title().should('include', 'Facebook'); // Verifica que el título contenga "Facebook"
    });

    it('Iniciar sesión con credenciales válidas', () => {
        // Asegúrate de usar credenciales válidas de una cuenta que tengas
        cy.get('input[name="email"]').type('tu_correo@ejemplo.com'); // Agrega tu correo
        cy.get('input[name="pass"]').type('tu_contraseña'); // Agrega tu contraseña
        cy.contains('Iniciar sesión').click(); // Hacer clic en el botón de inicio de sesió
    });

    it('Iniciar sesión con credenciales no válidas', () => {
        cy.get('input[name="email"]').type('correo_no_registrado@ejemplo.com'); // Correo no registrado
        cy.get('input[name="pass"]').type('contraseña_incorrecta'); // Contraseña incorrecta
        cy.contains('Iniciar sesión').click(); // Hacer clic en el botón de inicio de sesión
    });

    it('Intentar iniciar sesión sin credenciales', () => {
        cy.contains('Iniciar sesión').click(); // Hacer clic sin ingresar credenciales
        
    });

    it('Recuperar la contraseña', () => {
        cy.get('a').contains('¿Olvidaste tu cuenta?').click(); // Hacer clic en el enlace de recuperación de contraseña
        
        // Verificar que la página de recuperación se carga
        cy.url().should('include', 'recover'); // La URL debe incluir "recover"
    });

    it('Intentar recuperar la contraseña con un correo no registrado', () => {
        cy.get('a').contains('¿Olvidaste tu cuenta?').click(); // Hacer clic en el enlace de recuperación de contraseña
        cy.get('input[name="email"]').type('correo_no_registrado@ejemplo.com'); // Correo no registrado

        
    });
});
