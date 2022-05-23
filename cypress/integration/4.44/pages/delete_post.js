export class Page {
   
    
    navigate_to_post_list(){
        //.get('nav.gh-nav')
        cy.get('a[href="#/pages/"]').eq(0).click()
        cy.wait(2000)
    }

    click_to_create_new_post() {
        
        cy.get('a.gh-btn-primary[href="#/editor/page/"]').click();
        cy.wait(3000)
        return this;

    }

    create_post(pageTitle, pageNote, publish) {

        // Required fields
        cy.get('div.gh-koenig-editor').within(() => {
            
            if(postTitle)
                cy.get('textarea.gh-editor-title').type(postTitle)
            if(postNote)
                cy.get('div.koenig-editor__editor').type(postNote) 
            
        })
         
    }

    clickDeletepost(){
        // Delete post
        cy.get('button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view').click()
        cy.get('span[class="red"]').click()

    }

    validate_modal_message_to_delete(){
        cy.get('header[class="modal-header"]').invoke('text').should('eq','\n    Delete post\n\n Delete post account\n')
        cy.get('p[class="mb6"]').invoke('text').should('eq','\n  Are you sure you want to delete this post? \n \n Are you sure you want to delete this post?        \n    ')

    }

    clickToConfirmMemberDeleteOperation(){
        cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').contains('Delete post').click()
    }

} 