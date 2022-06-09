import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/personalTab/index.html")
@PreventIframe("/<personalTab>/personal.html")
export class PersonalTab {
}
