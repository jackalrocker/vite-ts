/**
 * @generated SignedSource<<324488d2760099dd25fdc0a32ce72ce6>>
 * @relayHash 13814b381ef3cb0e74824b1442b89f24
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 13814b381ef3cb0e74824b1442b89f24

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppQuery$variables = Record<PropertyKey, never>;
export type AppQuery$data = {
  readonly getUrlNode: {
    readonly id: string;
  } | null | undefined;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "0x2"
      }
    ],
    "concreteType": "UrlNode",
    "kind": "LinkedField",
    "name": "getUrlNode",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": "getUrlNode(id:\"0x2\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": "13814b381ef3cb0e74824b1442b89f24",
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "01c2788237064534c57c80fc4b9ee50b";

import { PreloadableQueryRegistry } from 'relay-runtime';
PreloadableQueryRegistry.set(node.params.id, node);

export default node;
