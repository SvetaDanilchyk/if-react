import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновляем состояние, чтобы отобразить запасной UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Можно отправить информацию об ошибке на сервер
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить любой кастомный UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
