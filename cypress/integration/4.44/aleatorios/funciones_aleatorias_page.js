import {faker} from "@faker-js/faker"

export class DataForPage {

    create_name(){
        return faker.name.firstName()
    }

    create_description(){

        return faker.internet.paragraph()
    }

    build_page_data(){
        return [this.create_name(), this.create_description()]
    }

}