import Header from './Header';
function NotFound() {
  return (
    <>
      <Header></Header>
      <div className="not-found">
        <div className="not-found__main">
          <h2 className="not-found__main-title">404</h2>
          <h4 className="not-found__main-subtitle">Страница не найдена</h4>
        </div>
      </div>
    </>
  );
}

export default NotFound;
