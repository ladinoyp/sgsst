declare module "react-slick" {
    import { Component } from "react";
  
    export interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      className?: string;
      adaptiveHeight?: boolean;
      // Agrega más configuraciones según la documentación
    }
  
    export default class Slider extends Component<Settings> {}
  }
  