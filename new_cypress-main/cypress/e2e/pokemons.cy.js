describe('Покемоны: покупка аватара', function () {

    it('Пользовательский путь', function () {
        cy.visit('https://pokemonbattle.ru/login'); // Зашли на сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввели верный логин
        cy.get('#password').type('USER_PASSWORD'); // Ввели верный пароль
        cy.get('.auth__button').click(); // Нажали войти
        cy.get('.header__container > .header__id').click(); // Вошли в профиль в шапке
        cy.get('[href="/shop"]').click(); // Нажали смена аватара
        cy.get('.available > button').first().click({ force: true }); // Нажимаем Купить у первого доступного аватара
        cy.get('.credit').type('4620869113632996'); // вводим номер карты
        cy.get('.k_input_ccv').type('125'); // вводим CVV карты
        cy.get('.k_input_date').type('1225'); // вводим срок действия карты
        cy.get('.k_input_name').type('NAME'); // вводим имя владельца действия карты
        cy.get('.pay-btn').click({ force: true }); // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456'); // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click({ force: true }); // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
    })
 })


