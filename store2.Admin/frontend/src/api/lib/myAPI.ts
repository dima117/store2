/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { MyAPIContext } from "./myAPIContext";

class MyAPI extends MyAPIContext {
  /**
   * Initializes a new instance of the MyAPI class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.MyAPIOptions) {
    super(options);
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.DoStuffResponse>
   */
  doStuff(options?: msRest.RequestOptionsBase): Promise<Models.DoStuffResponse>;
  /**
   * @param callback The callback
   */
  doStuff(callback: msRest.ServiceCallback<Models.Xxx[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  doStuff(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Xxx[]>): void;
  doStuff(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Xxx[]>, callback?: msRest.ServiceCallback<Models.Xxx[]>): Promise<Models.DoStuffResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      doStuffOperationSpec,
      callback) as Promise<Models.DoStuffResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const doStuffOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/stuff",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Xxx"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

export {
  MyAPI,
  MyAPIContext,
  Models as MyAPIModels,
  Mappers as MyAPIMappers
};
