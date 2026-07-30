"use client";

import Barcode from "react-barcode";

export default function PlantBarcode() {
  return (
    <div className="my-8 flex justify-center">
      <Barcode
        value="GREENLEAF2026"
        height={55}
        width={1.4}
        displayValue={false}
        background="transparent"
      />
    </div>
  );
}