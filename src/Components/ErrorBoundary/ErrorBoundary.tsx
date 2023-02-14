import React from "react";
import {FaSadCry} from "react-icons/fa";

import { ErrorContainer, ErrorResult, ErrorImg } from "./ErrorBoundary.elements";
export default function ErrorBoundary({condition}:any) {
  return (
    <ErrorContainer>
      <ErrorImg><FaSadCry /></ErrorImg>
      <ErrorResult>{condition === "emty" ? "Sorry,we couldnt't find any results" : "Something is wrong on server. Try again later"}</ErrorResult>
    </ErrorContainer>
  );
}
