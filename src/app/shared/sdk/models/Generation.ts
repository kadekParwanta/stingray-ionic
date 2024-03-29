/* tslint:disable */
import {
  Class,
  Media,
  School,
  Yearbook
} from '../index';

declare var Object: any;
export interface GenerationInterface {
  name?: string;
  year?: number;
  id?: any;
  schoolId?: any;
  classes?: Array<Class>;
  photos?: Array<Media>;
  school?: School;
  yearbook?: Yearbook;
}

export class Generation implements GenerationInterface {
  name: string;
  year: number;
  id: any;
  schoolId: any;
  classes: Array<Class>;
  photos: Array<Media>;
  school: School;
  yearbook: Yearbook;
  constructor(data?: GenerationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Generation`.
   */
  public static getModelName() {
    return "Generation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Generation for dynamic purposes.
  **/
  public static factory(data: GenerationInterface): Generation{
    return new Generation(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Generation',
      plural: 'Generations',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        year: {
          name: 'year',
          type: 'number'
        },
        id: {
          name: 'id',
          type: 'any'
        },
        schoolId: {
          name: 'schoolId',
          type: 'any'
        },
      },
      relations: {
        classes: {
          name: 'classes',
          type: 'Array<Class>',
          model: 'Class'
        },
        photos: {
          name: 'photos',
          type: 'Array<Media>',
          model: 'Media'
        },
        school: {
          name: 'school',
          type: 'School',
          model: 'School'
        },
        yearbook: {
          name: 'yearbook',
          type: 'Yearbook',
          model: 'Yearbook'
        },
      }
    }
  }
}
