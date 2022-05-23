

import {Screenshot} from '../../Utilities/screenshots'
const screenshot = new Screenshot()

import {Login} from "../../4.44/pages/login"
const login = new Login()

import {Member} from "../pages/members"
const member = new Member(screenshot)

import {Tag} from "../pages/tag"
const tag = new Tag()


import * as data from '../../../../pool_apriori/right_tags.json';

describe('Create Tag', () => {
    
    //let data = []
    before(()=>{ 
        console.log(data)
    })
 
       Cypress._.range(0, 15).forEach(index =>
        {
        
        it(`Test to create tag succesfully with mandatory fields ${index+1}`, () => {
        let item = data[index]
        login.login(Cypress.env('user'), Cypress.env('password'))
        tag.navigate_to_tags_list()

        tag.click_to_create_new_tag()

        tag.create_tag(item.nombre, item.slug, item.descripcion, item.color) 
       cy.url().should('contain',item.slug.toLowerCase()) 
     })
     
    })
    
    
})

    