// deve exibir a cor correta -> verificar se, ao receber determinados valores de red, green, blue e alpha, é exibida a cor correta no quadrado de visualização de cor

// deve exibir um quadrado transparente -> verificar se, ao receber o valor 0 em todas as props (red, green, blue e alpha), o quadrado fica transparente

import ColorPanel from ".";


describe("<ColorPanel />", () => {
    it("should show the correct color", () => {
        const red = 0;
        const green = 0;
        const blue = 99;
        const alpha = 0.4;
        const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`

        cy.mount(<ColorPanel  red={red} green={green} blue= {blue} alpha={alpha}/>);
        cy.get('[data-cy="colorPanel"]').should('have.css', 'background-color', color);
        cy.wait(500);
    });

    it("should show transparent square", () => {
        const red = 0;
        const green = 0;
        const blue = 0;
        const alpha = 0;
        const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`
        
        cy.wait(500);

        cy.mount(<ColorPanel  red={red} green={green} blue= {blue} alpha={alpha}/>);
        cy.get('[data-cy="colorPanel"]').should('have.css', 'background-color', color);
    })
})