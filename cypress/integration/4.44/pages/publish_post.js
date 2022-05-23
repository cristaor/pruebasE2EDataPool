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

}
    

