
//import {Screenshot} from '../Utilities/screenshots'
//const screenshot = new Screenshot()

import {Login} from "./pages/login"
const login = new Login()

import {Tag} from "./pages/tag"
const tag = new Tag()

import { faker } from '../../../node_modules/@faker-js/faker';


describe('Create tag', () => {
    
    beforeEach('Navigate and login into Ghost', ()=>{

        login.login(Cypress.env('user'), Cypress.env('password'))

        cy.wait(2000)
    })
/*
    it('1. Escenario de pruebas positivo: Creación de Tag con todos los campos llenos', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(1234);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName)
    
        //cy.wait(10000);
    });
    
    it('2. Escenario de pruebas negativo: Creación de Tag con valor de nombre vacio', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(5432);
        var tagName = '';
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.getMessageError('You must specify a name for the tag.',"p[class='response']");  
        cy.wait(1000);
    });
  
 
    it('3. Escenario de pruebas negativo: Creación de Tag con valor de color invalido', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(7865);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.random.alphaNumeric(6);

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.getMessageError('The colour should be in valid hex format',"p[class='response']");  
        cy.wait(1000);
    });
    
    it('4. Escenario de pruebas positivo: Creación de Tag con valores vacios en color y descripcion', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(6543);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = '';
        var color = '';

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName)
    
        //cy.wait(10000);
    });
    
    
    
    it('5. Escenario de pruebas de frontera: Creación de Tag con longitud de nombre de 191 caracteres (long max de campo nombre)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(2341);
        var tagName = faker.random.alphaNumeric(191);
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName)
    
        //cy.wait(10000);
    });
    
    
   it('6. Escenario de pruebas de frontera: Creación de Tag con longitud de nombre de 192 caracteres', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(7658);
        var tagName = faker.random.alphaNumeric(192);
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color);

        tag.getMessageError('Tag names cannot be longer than 191 characters.',"p[class='response']"); 
        cy.wait(1000);

       
    }); 
   
  
  it('7. Escenario de pruebas de frontera: Creación de Tag con longitud de nombre de 190 caracteres (un valor menos antes de la long max de campo nombre)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(7765);
        var tagName = faker.random.alphaNumeric(190);
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName)
    
        //cy.wait(10000);
    });
   
  
  it('8. Escenario de pruebas de frontera: Creación de Tag con longitud de campo Slug de 191 caracteres (long max de campo nombre)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(4120);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.random.alphaNumeric(191);
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName)
    
        //cy.wait(10000);
    });
    
    
    it('9. Escenario de pruebas de frontera: Creación de Tag con longitud de campo Slug de 192 caracteres (por encima del limite)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(9354);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.random.alphaNumeric(192);
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);
        var url3 = Cypress.env('url1').toString() + "/tag/" + tagSlug + "/";
        tag.getMessageError(url3,"p[class='ghost-url-preview description ember-view']"); 
    
        //cy.wait(10000);
    });
    
    
    
    it('10. Escenario de pruebas de frontera: Creación de Tag con longitud de campo Slug de 190 caracteres (un valor menos antes de la long max de campo slug)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(4104);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.random.alphaNumeric(190);
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName)
    
        //cy.wait(10000);
    });
    
    
    it('11. Escenario de pruebas de frontera: Creación de Tag con longitud de campo color de 5 caracteres (Uno menos que long max de campo nombre)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(4120);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.random.alphaNumeric(191);
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var color2 = color.substring(0, color.length - 1);
        tag.create_tag(tagName, tagSlug, tagDescription, color2)

        cy.wait(1500);

       tag.getMessageError('The colour should be in valid hex format',"p[class='response']"); 

    });
   
   
    it('12. Escenario de pruebas de frontera: Creación de Tag con longitud de campo color de 7 caracteres (por encima del limite)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(6644);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.random.numeric(7);

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName)
    
        //cy.wait(10000);
    });
    
    
     it('13. Escenario de pruebas de frontera: Creación de Tag con longitud de campo descripcion de 500 caracteres (long max de campo descripcion)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(8811);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.random.alphaNumeric(500);
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color);

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName);
    
        //cy.wait(10000);
    });
    
    
    it('14. Escenario de pruebas de frontera: Creación de Tag con longitud de campo descripcion de 501 caracteres (por encima del limite)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(6547);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.random.alphaNumeric(501);
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color);

        cy.wait(1000);

       tag.getMessageError('Description cannot be longer than 500 characters.',"p[class='response']"); 
   
    });
    
    
   
    it('15. Escenario de pruebas de frontera: Creación de Tag con longitud de campo descripcion de 499 caracteres (uno menos que long max de campo descripcion)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(7201);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.random.alphaNumeric(499);
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color);

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName);
    
        //cy.wait(10000);
    });
    */
    
    
    it('16. Escenario de pruebas negativo/positivo: Creación de Tag con valor de nombre vacio, se verifica el error, se coloca un nombre dde tah valido y se procede a intentar salvar: ESta prueba genera un issue', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(4433);
        var tagName = '';
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.getMessageError('You must specify a name for the tag.',"p[class='response']");  
        cy.wait(1000);
        
        tagName = faker.lorem.word();
        tag.create_tag_retry_name(tagName);
        cy.wait(1500);
        
        tag.getMessageError('You must specify a name for the tag.',"p[class='response']");  
        cy.wait(1000);
        
    });
    
    
  /*  
    it('Test to create internal tag succesfully with mandatory fields', () => {
        
        screenshot.case('Test to create internal tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(2000)

        tag.click_to_create_new_tag()

        cy.wait(2000)

        var tagName = '#'+Math.random()
        var tagSlug =  tagName + '.slug'
        var tagDescription = 'Esta es la descripción del nuevo tag : '+tagName

        tag.create_tag(tagName, tagSlug, tagDescription, null)

        cy.wait(1500);

        tag.validate_if_exist_internal_tag(tagName)
    
    })

    it('Test to create tag failed when the form does not have all mandatory fields (tag name)', () => {

        screenshot.case('Test to create tag failed when the form does not have all mandatory fields (tag name)')
        tag.navigate_to_tags_list()

        cy.wait(2000)

        tag.click_to_create_new_tag()

        cy.wait(2000)

        var tagSlug =  'tagslug'
        var tagDescription = 'Esta es la descripción del nuevo tag'

        tag.create_tag('', tagSlug, tagDescription, null)

        // Assertions
        tag.validateMessageWhenTagNameFieldValueIsMissing()
        
        cy.url().should('eq', cy.config('baseUrl')+'/#/tags/new')

        
    })

    
    it('Test to create tag failed when the color field isn t a hexadecimal value', () => {
        screenshot.case('Test to create tag failed when the color field isn t a hexadecimal value')
        // Redirect to create member form
        tag.navigate_to_tags_list()

        cy.wait(2000)

        tag.click_to_create_new_tag()

        cy.wait(2000)

        var tagSlug =  'tagslug'
        var tagDescription = 'Esta es la descripción del nuevo tag'

        tag.create_tag('tag name', tagSlug, tagDescription, 'trtrsw')

        // Assertions
        tag.validateMessageWhenTagColorIsWrong()
        
        cy.url().should('eq', cy.config('baseUrl')+'/#/tags/new')

    })
*/
});
