import React, { Component } from "react";
import { MenuItem } from "@material-ui/core";
import { t } from "../i18n";

export class Categories extends Component {
  render() {
    return (
      <>
        <MenuItem value="cash">{t("cash")}</MenuItem>
        <MenuItem value="deposits">{t("deposits")}</MenuItem>
        <MenuItem value="credits">{t("credits")}</MenuItem>
        <MenuItem value="other">{t("other")}</MenuItem>
        <MenuItem value="bank">{t("bank")}</MenuItem>
        <MenuItem value="contragents">{t("contragents")}</MenuItem>
        <MenuItem value="property">{t("property")}</MenuItem>
      </>
    );
  }
}

export default Categories;
