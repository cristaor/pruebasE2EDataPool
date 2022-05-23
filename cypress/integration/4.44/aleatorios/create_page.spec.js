
import {Screenshot} from '../../Utilities/screenshots'
const screenshot = new Screenshot()

import {Login} from "../../4.44/pages/login"
const login = new Login()

import {Page} from "../pages/page"
const page = new Page(screenshot)

import {DataForPage} from "./funciones_aleatorias_page"
const dataForPage = new DataForPage()

describe('Create page', () => {
    
    beforeEach('Navigate and login into Ghost', ()=>{

        login.login(Cypress.env('user'), Cypress.env('password'))
    })

    it('Test to create page succesfully with mandatory fields', () => {
        
        screenshot.case('Test to create page succesfully with mandatory fields')
        page.navigate_to_pages_list()
        
        page.click_to_create_new_page()

        let tuple = dataForPage.build_page_data()
        
        page.create_page(tuple[0],  tuple[1], false)    

        page.validate_created_page(tuple[0], tuple[1])
        
        
    })

    it('Test to create page with blank description', () => {

        screenshot.case('Test to create page with blank description')
        page.navigate_to_pages_list()

        page.click_to_create_new_page()

        page.create_page('', '', false)

        page.open_last_created_page()
        // Assertions
        page.validateMessageWhenAllValueAreMissing()

    })

    it('Test to create page failed but the maximum character is higher than allowed', () => {
        
        screenshot.case('Test to create page failed but the maximum character is higher than allowed')
        page.navigate_to_pages_list()

        page.click_to_create_new_page()

        cy.wait(3000)

        let tuple = dataForPage.build_page_data()

        page.create_page(tuple[0].repeat(30), tuple[1], false )

        cy.wait(10000)

        // Assertions
        //page.validateMessageWhenNameFieldExceedsMaximumCharacterLimit()
        
        cy.url().should('eq', cy.config('baseUrl')+'/#/editor/page')

    })

    it('Test to publish a page', () => {

        screenshot.case('Test to publish a page')
        
        // Redirect to create member form
        page.navigate_to_pages_list()
        
        page.click_to_create_new_page()

        let tuple = dataForPage.build_page_data()
        
        page.create_page(tuple[0],  tuple[1], true)    

        page.validate_published_page(tuple[0],  tuple[1])

    })

})