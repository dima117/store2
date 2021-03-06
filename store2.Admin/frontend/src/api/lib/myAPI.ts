/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
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
   * @returns Promise<Models.GetPagesResponse>
   */
  getPages(options?: msRest.RequestOptionsBase): Promise<Models.GetPagesResponse>;
  /**
   * @param callback The callback
   */
  getPages(callback: msRest.ServiceCallback<Models.PageListItemDto[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getPages(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PageListItemDto[]>): void;
  getPages(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PageListItemDto[]>, callback?: msRest.ServiceCallback<Models.PageListItemDto[]>): Promise<Models.GetPagesResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getPagesOperationSpec,
      callback) as Promise<Models.GetPagesResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.AddPageResponse>
   */
  addPage(options?: Models.MyAPIAddPageOptionalParams): Promise<Models.AddPageResponse>;
  /**
   * @param callback The callback
   */
  addPage(callback: msRest.ServiceCallback<Models.PageDto>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  addPage(options: Models.MyAPIAddPageOptionalParams, callback: msRest.ServiceCallback<Models.PageDto>): void;
  addPage(options?: Models.MyAPIAddPageOptionalParams | msRest.ServiceCallback<Models.PageDto>, callback?: msRest.ServiceCallback<Models.PageDto>): Promise<Models.AddPageResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      addPageOperationSpec,
      callback) as Promise<Models.AddPageResponse>;
  }

  /**
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<Models.GetPageResponse>
   */
  getPage(id: string, options?: msRest.RequestOptionsBase): Promise<Models.GetPageResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  getPage(id: string, callback: msRest.ServiceCallback<Models.PageDto>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  getPage(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PageDto>): void;
  getPage(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PageDto>, callback?: msRest.ServiceCallback<Models.PageDto>): Promise<Models.GetPageResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      getPageOperationSpec,
      callback) as Promise<Models.GetPageResponse>;
  }

  /**
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<Models.UpdatePageResponse>
   */
  updatePage(id: string, options?: Models.MyAPIUpdatePageOptionalParams): Promise<Models.UpdatePageResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  updatePage(id: string, callback: msRest.ServiceCallback<Models.PageDto>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  updatePage(id: string, options: Models.MyAPIUpdatePageOptionalParams, callback: msRest.ServiceCallback<Models.PageDto>): void;
  updatePage(id: string, options?: Models.MyAPIUpdatePageOptionalParams | msRest.ServiceCallback<Models.PageDto>, callback?: msRest.ServiceCallback<Models.PageDto>): Promise<Models.UpdatePageResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      updatePageOperationSpec,
      callback) as Promise<Models.UpdatePageResponse>;
  }

  /**
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deletePage(id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  deletePage(id: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  deletePage(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deletePage(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      deletePageOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getPagesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/pages",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PageListItemDto"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

const addPageOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/pages",
  requestBody: {
    parameterPath: [
      "options",
      "input"
    ],
    mapper: Mappers.PageInput
  },
  contentType: "application/json-patch+json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.PageDto
    },
    default: {}
  },
  serializer
};

const getPageOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/pages/{id}",
  urlParameters: [
    Parameters.id
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PageDto
    },
    default: {}
  },
  serializer
};

const updatePageOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "api/pages/{id}",
  urlParameters: [
    Parameters.id
  ],
  requestBody: {
    parameterPath: [
      "options",
      "input"
    ],
    mapper: Mappers.PageInput
  },
  contentType: "application/json-patch+json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.PageDto
    },
    default: {}
  },
  serializer
};

const deletePageOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "api/pages/{id}",
  urlParameters: [
    Parameters.id
  ],
  responses: {
    200: {},
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
