import React from "react";

export default function GJNumberLabel(props) {

  const { description, value } = props;

  console.log(props)
  return (
    <div className="gj-number-label">
      <div className="description"><h4>{description}</h4></div>
  <div className="value">{value}</div>
    </div>
  )
}