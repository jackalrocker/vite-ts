/**
 * @generated SignedSource<<a67438c7c492e2a9ec4afc820e911a35>>
 * @relayHash a09efed367d06a855ab5beb6666b7ee2
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID a09efed367d06a855ab5beb6666b7ee2

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppQuery$variables = Record<PropertyKey, never>;
export type AppQuery$data = {
  readonly getUrlNode: {
    readonly id: string;
    readonly visit_user_name: {
      readonly " $fragmentSpreads": FragmentRefs<"AppUserNodeFragment_user">;
    } | null | undefined;
  } | null | undefined;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "0x3"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "UrlNode",
        "kind": "LinkedField",
        "name": "getUrlNode",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserNode",
            "kind": "LinkedField",
            "name": "visit_user_name",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "AppUserNodeFragment_user"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "getUrlNode(id:\"0x3\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "UrlNode",
        "kind": "LinkedField",
        "name": "getUrlNode",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserNode",
            "kind": "LinkedField",
            "name": "visit_user_name",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "user_name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "getUrlNode(id:\"0x3\")"
      }
    ]
  },
  "params": {
    "id": "a09efed367d06a855ab5beb6666b7ee2",
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "a23ee8559905db5aecac83f1eaefcc90";

import { PreloadableQueryRegistry } from 'relay-runtime';
PreloadableQueryRegistry.set(node.params.id, node);

export default node;
