import {faker} from "../../../../node_modules/@faker-js/faker"

export class DataForMember {

    create_email(){
        return faker.internet.email()
    }

    create_name(){

        return faker.name.firstName()
    }

    create_labels(){
        return faker.lorem.paragraph()
    }

    create_note(){
        return faker.lorem.paragraph()
    }

    build_member_tuple(){
        return [this.create_name(), this.create_email(), this.create_labels(), this.create_note()]
    }

}