import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "assets/jss/material-dashboard-react.js";
const DataTableStyle = {
  card: { marginBottom: "2rem" },
  //   ".customer-badge": {
  //     borderRadius: "2px",
  //     padding: ".25em .5rem",
  //     textTransform: "uppercase",
  //     fontWeight: 700,
  //     fontSize: "12px",
  //     letterSpacing: ".3px",
  //   },
  ".customer-badge.status-qualified": {
    backgroundColor: "#C8E6C9",
    color: "#256029",
  },
  ".customer-badge.status-unqualified": {
    backgroundColor: "#FFCDD2",
    color: "#C63737",
  },
  ".customer-badge.status-negotiation": {
    backgroundColor: "#FEEDAF",
    color: "#8A5340",
  },
  ".customer-badge.status-new": {
    backgroundColor: "#B3E5FC",
    color: "#23547B",
  },
  ".customer-badge.status-renewal": {
    backgroundColor: "#ECCFFF",
    color: "#694382",
  },
  ".customer-badge.status-proposal": {
    backgroundColor: "#FFD8B2",
    color: "#805B36",
  },
  ".product-badge": {
    borderRadius: "2px",
    padding: ".25em .5rem",
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: "12px",
    letterSpacing: ".3px",
  },
  ".product-badge.status-instock": { background: "#C8E6C9", color: "#256029" },
  ".product-badge.status-outofstock": {
    background: "#FFCDD2",
    color: "#C63737",
  },
  ".product-badge.status-lowstock": { background: "#FEEDAF", color: "#8A5340" },
  ".order-badge": {
    borderRadius: "2px",
    padding: ".25em .5rem",
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: "12px",
    letterSpacing: ".3px",
  },
  ".order-badge.order-delivered": { background: "#C8E6C9", color: "#256029" },
  ".order-badge.order-cancelled": { background: "#FFCDD2", color: "#C63737" },
  ".order-badge.order-pending": { background: "#FEEDAF", color: "#8A5340" },
  ".order-badge.order-returned": { background: "#ECCFFF", color: "#694382" },
  ".image-text": { verticalAlign: "middle", marginLeft: ".5rem" },
  ".p-multiselect-representative-option": {
    display: "inline-block",
    verticalAlign: "middle",
  },
  ".p-multiselect-representative-option img": {
    verticalAlign: "middle",
    width: "24px",
  },
  ".p-multiselect-representative-option span": { marginTop: ".125rem" },
  ".p-column-filter": { width: "100%" },
  ".country-item": { display: "flex", alignItems: "center" },
  ".country-item img.flag": { width: "18px", marginRight: ".5rem" },
  ".flag": { verticalAlign: "middle" },
  "span.flag": { width: "44px", height: "30px", display: "inline-block" },
  "img.flag": { width: "30px" },
};
export default DataTableStyle;
