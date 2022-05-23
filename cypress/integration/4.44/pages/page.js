export class Page {
   
    constructor(screenshot){
        this.screenshot=screenshot;
    }
    
    navigate_to_pages_list(){
        //.get('nav.gh-nav')
        cy.get('a[href="#/pages/"]').eq(0).click()
        this.screenshot.take()
        cy.wait(2000)
    }

    click_to_create_new_page() {
        
        cy.get('a.gh-btn-primary[href="#/editor/page/"]').click();
        cy.wait(3000)
        this.screenshot.take()
        return this;

    }

    create_page(pageTitle, pageNote, publish) {

        // Required fields
        cy.get('div.gh-koenig-editor').within(() => {
            
            if(pageTitle)
                cy.get('textarea.gh-editor-title').type(pageTitle)
            if(pageNote)
                cy.get('div.koenig-editor__editor').type(pageNote) 
            
        })

        this.screenshot.take()
         
        // Save
        if (publish){
            cy.get('div.gh-btn-editor[role="button"]').click()
            cy.wait(1000)
            cy.get('button.gh-publishmenu-button').click()   
            cy.wait(500)
        }        
        else{
            cy.get('a.gh-editor-back-button[href="#/pages/"]').click()
            cy.wait(2000)
        }
       
        return this;
    }

    open_last_created_page(){
        this.navigate_to_pages_list()
        this.screenshot.take()
        cy.get('ol.gh-list').find('li.gh-posts-list-item').eq(0).find('a').eq(0).click()
        cy.wait(1000)
    }

    validate_created_page(pageName,  pageDescription){
        this.open_last_created_page()
        cy.get('textarea.gh-editor-title').invoke('val').should('eq', ''+pageName);
        cy.get('div.koenig-editor__editor').find('p').eq(0).invoke('text').should('eq', ''+pageDescription);
        this.screenshot.take()
    }

    validate_published_page(pageName,  pageDescription){

        cy.get('span.gh-notification-actions').find('a').eq(0).invoke('text').should('eq','View Page');
        this.screenshot.take()
    }

    validateMessageWhenAllValueAreMissing(){
        cy.get('textarea.gh-editor-title').invoke('val').should('not.be.empty');
        cy.get('div.koenig-editor__editor').find('p').eq(0).invoke('text').should('not.be.empty');
        this.screenshot.take()
    }

    validateMessageWhenNameFieldExceedsMaximumCharacterLimit(){
        cy.get('header[class="modal-header"]').invoke('text').should('eq','\n Are you sure you want to leave this page?\n    ')
        this.screenshot.take()
    }

    validateMessageWhenMailMemberAlreadyExist(){
        cy.get('div[class="gh-alert-content"]').invoke('text').should('eq', '\n    Validation error, cannot save member. Member already exists. Attempting to add member with existing email address\n')
        this.screenshot.take()
    }

    clickDeleteMember(){
        // Delete member
        cy.get('button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view').click()
        this.screenshot.take()
        cy.get('span[class="red"]').click()

    }

    validate_modal_message_to_delete(memberEmail){
        cy.get('header[class="modal-header"]').invoke('text').should('eq','\n    Delete member account\n\n    Delete member account\n')
        cy.get('p[class="mb6"]').invoke('text').should('eq','\n        Permanently delete '+memberEmail+' from Ghost.\n    \n        Permanently delete '+memberEmail+' from Ghost.\n    ')
        this.screenshot.take()
    }

    clickToConfirmMemberDeleteOperation(){
        cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').contains('Delete member').click()
        this.screenshot.take()
    }

    clickToCancelMemberDeleteOperation(){
        cy.get('button.gh-btn').contains('Cancel').click()
    }

    validateMemberDoesNotExist(memberEmail){
        this.navigate_to_pages_list()
        cy.get('input[placeholder="Search members..."]').type(memberEmail)
        cy.get('div[class="gh-members-empty"]').should('exist');
        this.screenshot.take()
    }


}