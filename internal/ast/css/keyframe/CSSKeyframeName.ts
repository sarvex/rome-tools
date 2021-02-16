import {CSSIdentifier, CSSString, NodeBaseWithComments} from "@internal/ast";
import {createBuilder} from "../../utils";

export interface CSSKeyframeName extends NodeBaseWithComments {
	readonly type: "CSSKeyframeName";
	readonly value: CSSIdentifier | CSSString;
}

export const cssKeyframeName = createBuilder<CSSKeyframeName>(
	"CSSKeyframeName",
	{
		bindingKeys: {},
		visitorKeys: {
			value: true,
		},
	},
);
