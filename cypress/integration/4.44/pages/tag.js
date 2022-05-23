export class Tag {
   
    constructor(){
        //this.screenshot=screenshot;
    }

    navigate_to_tags_list(){
        cy.visit(cy.config('baseUrl')+'/#/tags');
        //this.screenshot.take()
    }

    navigate_to_internal_tags_list(){
        cy.visit(cy.config('baseUrl')+'/#/tags?type=internal');
        //this.screenshot.take()
    }

    click_to_create_new_tag() {

        cy.get('span:contains("New tag")').click({force: true});
        return this;

    }

    create_tag(tagName, tagSlug, tagDescription, color) {
        // Required fields
        cy.get('form').within(() => {
            
            if(tagName){
                cy.get('input[name="name"]').type(tagName)
                cy.get('input[name="slug"]').clear();
            }
            if(color)
            {
                var color2= color.replace('#','');
                cy.get('input[name="accent-color"]').first().type(color2)   
            }
            cy.get('input[name="slug"]').type(tagSlug)            
            if(tagDescription)
                cy.get('textarea[name="description"]').type(tagDescription)
  
        });
        //this.screenshot.take()

        // Save
        cy.get('span:contains("Save")').click({force: true});
        
        return this;
    }

     create_tag_retry_name(tagName2) {
        // Required fields
            if(tagName2){
                cy.get('input[id="tag-name"]').type(tagName2)
            }
        // Retry
        cy.get('span:contains("Retry")').click({force: true});
        return this;
    }
    create_tag_retry_color(color) {
        // Required fields
            
            //cy.wait(200);
             
            if(color)
            {
                var element = cy.get('input[name="accent-color"]').first();
                element.clear();
                var color2= color.replace('#','');
                //cy.get('input[name="accent-color"]').first().type(color2)   
               element.type(color2, {force:true})   
            }
        // Retry
        cy.get('span:contains("Retry")').click();
        return this;
    }

    create_tag_meta(tagName, tagSlug, tagDescription, color, title, metaDescription, metaURL) {
        // Required fields
        cy.get('form').within(() => {
            
            if(tagName){
                cy.get('input[name="name"]').type(tagName)
                cy.get('input[name="slug"]').clear();
            }
            if(color)
            {
                var color2= color.replace('#','');
                cy.get('input[name="accent-color"]').first().type(color2)   
            }
            cy.get('input[name="slug"]').type(tagSlug)            
            if(tagDescription)
                cy.get('textarea[name="description"]').type(tagDescription)
            
            cy.get('span:contains("Expand")').then(($elements)=>{
                for(var i=0;i < $elements.length; i++)
                {
                    $elements[i].click({force: true});
                }
            });
            
            cy.wait(200);
            
            if(title){
                cy.get('input[name="metaTitle"]').type(title)
            }
            if(metaDescription){
                 cy.get('textarea[name="metaDescription"]').type(metaDescription)
            }
            if(metaURL){
                cy.get('input[name="canonicalUrl"]').type(metaURL)
            }
        });
        //this.screenshot.take()

        // Save
        cy.get('span:contains("Save")').click({force: true});
        
        return this;
    }

    create_tag_meta_retry_description(metaDescription) {
           if(metaDescription)
            {
                var element = cy.get('textarea[name="metaDescription"]');
                element.clear();
                element.type(metaDescription, {force:true})   
            }
        // Retry
        cy.get('span:contains("Retry")').click();
        return this;
    }

    create_tag_twitter(tagName, tagSlug, tagDescription, color,  twitterTitle, twitterDescription) {
        // Required fields
        cy.get('form').within(() => {
            
            if(tagName){
                cy.get('input[name="name"]').type(tagName)
                cy.get('input[name="slug"]').clear();
            }
            if(color)
            {
                var color2= color.replace('#','');
                cy.get('input[name="accent-color"]').first().type(color2)   
            }
            cy.get('input[name="slug"]').type(tagSlug)            
            if(tagDescription)
                cy.get('textarea[name="description"]').type(tagDescription)
            
            cy.get('span:contains("Expand")').then(($elements)=>{
                for(var i=0;i < $elements.length; i++)
                {
                    $elements[i].click({force: true});
                }
            });
            
            cy.wait(200);
            
            if(twitterTitle){
                cy.get('input[name="twitterTitle"]').type(twitterTitle)
            }
            if(twitterDescription){
                 cy.get('textarea[name="twitterDescription"]').type(twitterDescription)
            }
        });
        //this.screenshot.take()

        // Save
        cy.get('span:contains("Save")').click({force: true});
        
        return this;
    }

    create_tag_fb(tagName, tagSlug, tagDescription, color,  fbTitle, fbDescription) {
        // Required fields
        cy.get('form').within(() => {
            
            if(tagName){
                cy.get('input[name="name"]').type(tagName)
                cy.get('input[name="slug"]').clear();
            }
            if(color)
            {
                var color2= color.replace('#','');
                cy.get('input[name="accent-color"]').first().type(color2)   
            }
            cy.get('input[name="slug"]').type(tagSlug)            
            if(tagDescription)
                cy.get('textarea[name="description"]').type(tagDescription)
            
            cy.get('span:contains("Expand")').then(($elements)=>{
                for(var i=0;i < $elements.length; i++)
                {
                    $elements[i].click({force: true});
                }
            });
            
            cy.wait(200);
            
            if(fbTitle){
                cy.get('input[name="ogTitle"]').type(fbTitle)
            }
            if(fbDescription){
                 cy.get('textarea[name="ogDescription"]').type(fbDescription)
            }
        });
        //this.screenshot.take()

        // Save
        cy.get('span:contains("Save")').click({force: true});
        
        return this;
    }

    validate_if_exist_internal_tag(tagName){
        this.navigate_to_internal_tags_list()
        cy.wait(2000)
        //this.screenshot.take()
        cy.get('h3:contains("'+tagName+'")').click({force: true});
    }

    validate_if_exist_tag(tagName){
        this.navigate_to_tags_list()
        cy.wait(2000)
        cy.get('h3:contains("'+tagName+'")').click({force: true});
        //this.screenshot.take()
    }
    
    getMessageError(error, selector)
    {   
        var errorExists=0; var element2='';
        cy.get(selector).then(($elements)=>{
            for(var i=0;i < $elements.length; i++)
            {
                element2 = $elements[i].innerText;
                console.log(`Texto del selector ${element2} ---error ${error}`);
                //await this.driver.writeSignal(page);
                if(element2.toString().trim() === error.toString().trim())
                {
                    console.log("Encontrado");
                    errorExists=1;
                    expect(element2).to.equal(error)
                    return true;
                }
            }
            if(!errorExists)
                    expect(element2).to.equal(false);
        }) ;
    }

    validateMessageWhenTagNameFieldValueIsMissing(){
        cy.get('p[class="response"]').invoke('text').should('eq', '\n    You must specify a name for the tag.\n\n    \n\n    \n\n    \n')
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon gh-btn-red ember-view"]').invoke('text').should('eq','    \n    \n    \n     Retry\n')
        //this.screenshot.take()
        
    }
    validateMessageWhenTagColorIsWrong(){
        cy.get('p[class="response"]').invoke('text').should('eq', '\n    \n\n    The colour should be in valid hex format\n\n    \n\n    \n')
       
    }

}