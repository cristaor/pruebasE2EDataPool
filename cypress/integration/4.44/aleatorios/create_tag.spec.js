
import {Screenshot} from '../../Utilities/screenshots'
const screenshot = new Screenshot()

import {Login} from "../../4.44/pages/login"
const login = new Login()

import {Tag} from "../pages/tag"
const tag = new Tag(screenshot)

import {DataForTags} from "./funciones_aleatorias_tags"
const dataForTags = new DataForTags()

describe('Create tag', () => {
    
    beforeEach('Navigate and login into Ghost', ()=>{

        login.login(Cypress.env('user'), Cypress.env('password'))

        cy.wait(2000)
    })

    it('Test to create tag succesfully with mandatory fields', () => {
        
        screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(2000)

        tag.click_to_create_new_tag()

        cy.wait(2000)

        let tuple = dataForTags.build_tag_data()
        
        tag.create_tag(tuple[0], tuple[1], tuple[2], null)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000)

        tag.validate_if_exist_tag(tuple[0])
    
    })

    it('Test to create internal tag succesfully with mandatory fields', () => {
        
        screenshot.case('Test to create internal tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(2000)

        tag.click_to_create_new_tag()

        cy.wait(2000)

        let tuple = dataForTags.build_tag_data()

        tag.create_tag('#'+tuple[0], tuple[1], tuple[2], null)

        cy.wait(1500);

        tag.validate_if_exist_internal_tag('#'+tuple[0])
    
    })

    it('Test to create tag failed when the form does not have all mandatory fields (tag name)', () => {

        screenshot.case('Test to create tag failed when the form does not have all mandatory fields (tag name)')
        tag.navigate_to_tags_list()

        cy.wait(2000)

        tag.click_to_create_new_tag()

        cy.wait(2000)

        let tuple = dataForTags.build_tag_data()

        tag.create_tag('', tuple[1], tuple[2], null)

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

        let tuple = dataForTags.build_tag_data()

        tag.create_tag(tuple[0], tuple[1], tuple[2], 'trtrsw')

        // Assertions
        tag.validateMessageWhenTagColorIsWrong()
        
        cy.url().should('eq', cy.config('baseUrl')+'/#/tags/new')

    })

})