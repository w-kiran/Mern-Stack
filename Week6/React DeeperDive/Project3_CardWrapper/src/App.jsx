// real wrapper
function App() {
  return (
    <div>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>

      <CardWrapper>
        <div>hi there</div>
      </CardWrapper>

      <CardWrapper>
        <CardWrapper>
           <div>hello there</div>
        </CardWrapper>
      </CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  // create a div which has a border (hint: the way to create a border is border: "2px solid black")
  // and inside the div, renders the prop
  return (
    <div style={{ border: "2px solid black", padding: 20 }}>
      {children}
    </div>
  );
}

function TextComponent() {
  return<div>
    hi from TextComponent
  </div>
}
export default App;
