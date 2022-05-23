

import {Screenshot} from '../../Utilities/screenshots'
const screenshot = new Screenshot()

import {Login} from "../../4.44/pages/login"
const login = new Login()

import {Member} from "../pages/member"
const member = new Member(screenshot)
import {DataForMember} from "./funciones_aleatorias_members"
const dataForMember = new DataForMember()

describe('Create members', () => {

    beforeEach('Navigate and login into Ghost', ()=>{

        login.login(Cypress.env('user'), Cypress.env('password'))
    })
    
    Cypress._.range(0, 1).forEach(index =>
    {

        it(`Test to create member succesfully when the form has all mandatory fields ${index+1} with random data`, () => {
            
            screenshot.case('Test to create member succesfully with mandatory fields')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            let tuple = dataForMember.build_member_data()
            member.create_member(tuple[0], tuple[1],  tuple[2])

            cy.wait(2000)
        
            // Redirect to members list to validate its creation
            member.navigate_to_members_list()
            
            member.open_last_created_member()

            cy.wait(1000)
            
            member.validate_created_member(tuple[0], tuple[1], tuple[2])


        })

        it('Test to create member failed when the form does not have all mandatory fields (mail)', () => {

        
            screenshot.case('Test to create member failed when the form does not have all mandatory fields (mail)')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            let tuple = dataForMember.build_member_data()
            
            member.create_member(tuple[0], '', tuple[2])
    
            // Assertions   
            member.validateMessageWhenEmailFieldValueIsMissing()
            
            cy.url().should('eq', cy.config('baseUrl')+'/#/members/new')
    
        })

        it('Test to create member failed when the member`s name exceeds the maximum character limit', () => {

        
            screenshot.case('Test to create member failed when the member`s name exceeds the maximum character limit')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            let tuple = dataForMember.build_member_data()

            let name = "pepitoperez"
            
            member.create_member(name.repeat(20), tuple[1], tuple[2])
            cy.wait(2000)
    
            // Assertions
            member.validateMessageWhenNameFieldExceedsMaximumCharacterLimit()
            
            cy.url().should('eq', cy.config('baseUrl')+'/#/members/new')
    
    
        })

        it('Test to create member failed when the member`s name lenght has the maximum character allowed', () => {

        
            screenshot.case('Test to create member succesfully with mandatory fields')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            var name = "pepitoLulo"
            let tuple = dataForMember.build_member_data()
            member.create_member(name.repeat(19)+"2", tuple[1],  tuple[2])

            cy.wait(2000)
        
            // Redirect to members list to validate its creation
            member.navigate_to_members_list()
            
            member.open_last_created_member()

            cy.wait(2000)
            
            member.validate_created_member(name.repeat(19)+"2", tuple[1], tuple[2])
    
        })

        it('Test to create member failed when the member`s name lenght has the maximum character allowed but its lenght is so big', () => {

        
            screenshot.case('Test to create member succesfully with mandatory fields')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            var name = "pepitoLulo"
            let tuple = dataForMember.build_member_data()
            member.create_member(name.repeat(45)+"2", tuple[1],  tuple[2])

            cy.wait(2000)
        
            // Redirect to members list to validate its creation
            member.navigate_to_members_list()
            
            member.open_last_created_member()

            cy.wait(2000)
            
            member.validate_created_member(name.repeat(19)+"2", tuple[1], tuple[2])
    
        })

        it('Test to create member failed when the email already exists', () => {

        
            screenshot.case('Test to create member failed when the email already exists')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            let tuple = dataForMember.build_member_data()
            
            member.create_member(tuple[0], tuple[1], tuple[2])
            cy.wait(2000)
    
            // Redirect to members list
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
    
            // Required fields
            member.create_member(tuple[0], tuple[1], tuple[2])
            cy.wait(2000)
    
            
            // Assertions
            member.validateMessageWhenMailMemberAlreadyExist()
            cy.url().should('eq', cy.config('baseUrl')+'/#/members/new')
    
            
        
        })

        it('Test to create member failed when the member email exceeds the maximum caracters', () => {

        
            screenshot.case('Test to create member failed when the email already exists')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            let tuple = dataForMember.build_member_data()
            let mail = "data@hotmail"+("pepepepepe".repeat(19))+".com"
            
            member.create_member(tuple[0], mail, tuple[2])
            cy.wait(2000)
    
            // Assertions
            member.validateMessageWhenEmailFieldExceedsMaximumCharacterLimit()
            cy.url().should('eq', cy.config('baseUrl')+'/#/members/new')
    
            
        
        })

        it.only('Test to create member failed when the member email exceeds the maximum caracters by far', () => {

        
            screenshot.case('Test to create member failed when the email already exists')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            let tuple = dataForMember.build_member_data()
            let mail = "data@hotmail"+("pepepepepe".repeat(40))+".com"
            
            member.create_member(tuple[0], mail, tuple[2])
            cy.wait(2000)
    
            // Assertions
            member.validateMessageWhenEmailFieldExceedsMaximumCharacterLimit()
            cy.url().should('eq', cy.config('baseUrl')+'/#/members/new')
    
            
        
        })
    
    
    })
})

    