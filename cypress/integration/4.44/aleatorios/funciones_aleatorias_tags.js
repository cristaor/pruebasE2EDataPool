import {faker} from "@faker-js/faker"

export class DataForTags {

    create_name(){
        return faker.name.firstName()
    }

    create_slug(){

        return faker.name.lastName()
    }

    create_description(){
        return faker.lorem.paragraph()
    }

    build_tag_data(){
        return [this.create_name(), this.create_slug(), this.create_description()]
    }

}