/**
 * @generated SignedSource<<c59e3be8ef43283549efd66ed4b2986e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppUserNodeFragment_user$data = {
  readonly id: string;
  readonly user_name: string | null | undefined;
  readonly " $fragmentType": "AppUserNodeFragment_user";
};
export type AppUserNodeFragment_user$key = {
  readonly " $data"?: AppUserNodeFragment_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppUserNodeFragment_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppUserNodeFragment_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "user_name",
      "storageKey": null
    }
  ],
  "type": "UserNode",
  "abstractKey": null
};

(node as any).hash = "96f17d5e9735768837443bcdf02609c9";

export default node;
