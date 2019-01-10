/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const PageDto: msRest.CompositeMapper = {
  serializedName: "PageDto",
  type: {
    name: "Composite",
    className: "PageDto",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      title: {
        required: true,
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      body: {
        required: true,
        serializedName: "body",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Xxx: msRest.CompositeMapper = {
  serializedName: "Xxx",
  type: {
    name: "Composite",
    className: "Xxx",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      surname: {
        serializedName: "surname",
        type: {
          name: "String"
        }
      }
    }
  }
};
