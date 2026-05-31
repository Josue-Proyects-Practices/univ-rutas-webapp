import React, { type ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class CookieBannerErrorBoundary extends React.Component<Props, State> {
     public state: State = { hasError: false };

     // Este método es obligatorio para actualizar el estado tras un error
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }
  

public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Es buena práctica capturar también el errorInfo para el árbol de componentes
    console.warn('CookieBanner error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
 

