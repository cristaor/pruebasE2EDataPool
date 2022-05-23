export class Design {
   
    constructor(screenshot){
        this.screenshot=screenshot;
    }

    navigate_to_design_section(){
        cy.visit(cy.config('baseUrl')+'/#/settings/design');
        this.screenshot.take()
    }

    navigate_to_main_page(){
        cy.visit(cy.config('baseUrl')+'/#/dashboard');
        this.screenshot.take()
    }

    click_to_open_brand_menu(){
        //cy.get('button.gh-nav-design-tab ').click();
        cy.get('button:contains("Brand")').click({force: true});
    }

    put_accent_color(color){
      
        this.clear_accent_color()
        cy.get('input[id="accent-color"]').type(color) 
        this.screenshot.take()

    }

    validate_accent_color(color){
        this.click_to_open_brand_menu()
        cy.get('input[id="accent-color"]').invoke('val').should('eq', ''+color);
        this.screenshot.take()
    }

    clear_accent_color(){
        cy.get('input[id="accent-color"]').clear()
        this.screenshot.take()
    }

    validate_message_with_invalid_hex_format_color(){
        cy.get('p:contains("Please enter a color in hex format")').click({force: true});    
    }

    validate_message_with_empty_hex_format_color(){
        cy.get('p:contains("Please select an accent color")').click({force: true});    
    }

    click_to_save_design(){
        cy.get('span:contains("Save")').click({force: true});
        this.screenshot.take()
        return this;
    }

}