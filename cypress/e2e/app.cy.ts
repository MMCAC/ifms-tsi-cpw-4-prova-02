// Ainda utilizando o Cypress, implemente um teste e2e para verificar se, quando o usuário ajusta os 4 inputs de parâmetros de cor, a cor correta é exibida no quadrado do ColorPanel.

describe( "e2e tests",() => {
    beforeEach(() => {
        cy.visit("");
    });

    it("should show correct background-color when using the inputs", function () {

        const red = 100;
        const green = 100;
        const blue = 100;
        const alpha = 0.1;

        cy.get('[data-cy="colorPanel"]').should('be.visible');

        cy.get('[data-cy="redValue"]').focus().then((e)=>{ e.val(red).trigger('input') })
        cy.wait(500);
        cy.get('[data-cy="greenValue"]').focus().then((e)=>{ e.val(green).trigger('input') })
        cy.wait(500);
        cy.get('[data-cy="blueValue"]').focus().then((e)=>{ e.val(blue).trigger('input') })
        cy.wait(500);
        cy.get('[data-cy="alphaValue"]').then((e)=>{ e.val(alpha).trigger('input') })
        cy.wait(500);

        const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`

        

        cy.wait(500);

        cy.get('[data-cy="colorPanel"]').should('have.css', 'background-color', color);
    })

})