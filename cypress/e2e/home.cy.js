import userData from "../fixtures/users/userData.json";

describe('Home Page - Guarda Digital', () => {
  it('Carregar pagina principal', () => {
    cy.visit('https://www.guardadigital.com.br/')
    cy.viewport(1252, 1376)
    cy.title().should('eq', 'Guarda Digital - Proteja e Planeje seus desejos de forma a garantir que sejam honrados')

  });
  it('Testes de Scroll - Guarda Digital', () => {
    cy.visit('https://www.guardadigital.com.br/')
    cy.viewport(1252, 1376)
    cy.contains('.nav-item.cta-home.active', 'SOBRE').click();
    cy.get('.home_container').should('be.visible');

    cy.get('.menu > .cta-how-work').first().click();
    cy.get('.how-work-footer').contains('Acesso facilitado')

    cy.contains('.nav-item.cta-services', 'SERVIÇOS').click()
    cy.wait(1000);
    cy.get('.service-container').first().should('be.visible')
    cy.get('.history').scrollIntoView()
    cy.get('.history').should('be.visible')

    cy.contains('.nav-item.cta-plans','PLANOS').click()
    cy.wait(1000);
    cy.get('.title').contains('Nossos Planos').should('be.visible')
    cy.get('.plan-container').should('be.visible')

    cy.get('.faq').trigger('wheel', { deltaY: 500 });
    cy.contains('.faq','Ainda tem dúvidas ?')
    cy.get('button[data-bs-target="#faq1"]').click();
    cy.wait(1000);
    cy.get('button[data-bs-target="#faq1"]').click();
    cy.scrollTo('bottom')

    cy.get('.nav-item.cta-home').first().click()
    cy.wait(2000);
    cy.scrollTo('bottom')

    cy.get('.nav-item.cta-how-work').first().click()
    cy.wait(2000)
    cy.scrollTo('bottom')

    cy.get('.nav-item.cta-services').first().click()
    cy.wait(2000)
    cy.scrollTo('bottom')
    
    cy.get('.nav-item.cta-plans').first().click()
    cy.wait(2000)
    cy.scrollTo('bottom')
  });
  it('Pagina Já Sou Cliente - Login Inválido', () => {
    cy.visit('https://guardadigitalb2c.b2clogin.com/guardadigitalb2c.onmicrosoft.com/b2c_1_signin/oauth2/v2.0/authorize?client_id=67d920d6-f735-4306-bfb9-673f66383e65&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fapp.guardadigital.com.br%2F&client-request-id=0195f7d9-e23d-7c6a-b1e2-ca27dac4cbe4&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=3.10.0&client_info=1&code_challenge=fio6RwuF46CT5-ksu1qjDwZG29n6QBH2LGS8Mt8vKDg&code_challenge_method=S256&nonce=0195f7d9-e24d-79ef-9e9a-445d5c760362&state=eyJpZCI6IjAxOTVmN2Q5LWUyNGEtN2U2OC1hNGZjLTY0ZWI1MjczMzM4OSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D')
    cy.wait(2000)
    cy.get('#email').type(userData.userInvalido.usermail)
    cy.get('#password').type(userData.userInvalido.userpassword)
    cy.get('#next').click()
    cy.get('.error.pageLevel').should('be.visible').and('contain', "Não estamos encontrando sua conta");

  });
})