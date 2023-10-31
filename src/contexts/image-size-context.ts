import { createContext, useContext } from "react";

export const ImageSizeContext = createContext(500)

export const useImageSizeContext = () => useContext(ImageSizeContext)