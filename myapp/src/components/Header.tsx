import "./Header.css";

function Header() {
  return (
    <div>
      <head>
        {'{<link rel="stylesheet" href="Header.css">}'}
        {'{<link rel="preconnect" href="https://fonts.googleapis.com">}'}' '
        {
          '{<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>}'
        }
        ' '
        {
          '{<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap" rel="stylesheet"></link>}'
        }
        '
      </head>
      <body>
        <h1 className="Header">Ice Cream Wars</h1>
      </body>
    </div>
  );
}

export default Header;
